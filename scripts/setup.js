const faunadb = require("faunadb");
const q = faunadb.query;
const request = require("request");
const fs = require("fs");
const streamToPromise = require("stream-to-promise");
const { Console } = require("console");

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const main = () => {
  // In order to set up a database, we need an admin key, so let's ask the user for a key.
  readline.question(`Please provide the FaunaDB admin key\n`, (adminKey) => {
    // A graphql schema can be imported in override or merge mode: 'https://docs.fauna.com/fauna/current/api/graphql/endpoints#import'
    const client = new faunadb.Client({ secret: adminKey });
    const options = {
      model: "merge",
      uri: "https://graphql.fauna.com/import",
      headers: { Authorization: `Bearer ${adminKey}` },
    };
    const stream = fs
      .createReadStream("./graphql/schema.gql")
      .pipe(request.post(options));
    return client
      .query(
        q.Do(
          q.CreateFunction({
            name: "create_user",
            body: q.Query(
              q.Lambda(
                ["input"],
                q.Create(q.Collection("User"), {
                  data: {
                    username: q.Select("username", q.Var("input")),
                    name: q.Select("name", q.Var("input")),
                    avatar: q.Select("avatar", q.Var("input")),
                    dob: q.Select("dob", q.Var("input")),
                    location: q.Select("location", q.Var("input")),
                    created: q.Now(),
                  },
                  credentials: {
                    password: q.Select("password", q.Var("input")),
                  },
                })
              )
            ),
          }),
          q.CreateFunction({
            name: "login_user",
            body: q.Query(
              q.Lambda(
                ["input"],
                q.Select(
                  "secret",
                  q.Login(
                    q.Match(
                      q.Index("unique_User_username"),
                      q.Select("username", q.Var("input"))
                    ),
                    { password: q.Select("password", q.Var("input")) }
                  )
                )
              )
            ),
          }),
          q.CreateFunction({
            name: "create_post",
            body: q.Query(
              q.Lambda(
                ["input"],
                q.Create(q.Collection("Post"), {
                  data: {
                    author: q.CurrentIdentity(),
                    text: q.Select("text", q.Var("input")),
                    created: q.Now(),
                  },
                })
              )
            ),
          })
        )
      )
      .then(() => {
        console.log("1. Successfully created functions.");
      })
      .catch((err) => {
        if (err.toString().includes("instance already exists")) {
          console.log("1. Funtions already exists.");
        } else {
          throw err;
        }
      })
      .then(() => {
        streamToPromise(stream)
          .then((res) => {
            const readableResult = res.toString();
            if (readableResult.startsWith("Invalid authorization header")) {
              console.error("You need to provide a secret, closing. Try again");
              return readline.close();
            } else if (readableResult.startsWith("Invalid database secret")) {
              console.error(
                "The secret you have provided is not valid, closing. Try again"
              );
              return readline.close();
            } else if (readableResult.includes("success")) {
              console.log("2. Successfully imported schema");
              readline.close();
              return client
                .query(
                  q.CreateRole({
                    name: "UserRole",
                    membership: {
                      resource: q.Collection("User"),
                    },
                    privileges: [
                      {
                        resource: q.Collection("Post"),
                        actions: {
                          read: true,
                          write: true,
                          create: true,
                        },
                      },
                      {
                        resource: q.Function("create_post"),
                        actions: { call: true },
                      },
                      {
                        resource: q.Collection("PostInteractions"),
                        actions: {
                          read: true,
                          write: true,
                          create: true,
                        },
                      },
                      {
                        resource: q.Index("getPosts"),
                        actions: { read: true },
                      },
                      {
                        resource: q.Collection("Comment"),
                        actions: {
                          read: true,
                          write: true,
                          create: true,
                        },
                      },
                      {
                        resource: q.Index("getComments"),
                        actions: { read: true },
                      },
                      {
                        resource: q.Collection("Like"),
                        actions: {
                          read: true,
                          write: true,
                          create: true,
                        },
                      },
                      {
                        resource: q.Index("getLikes"),
                        actions: { read: true },
                      },
                      {
                        resource: q.Collection("Shoutout"),
                        actions: {
                          read: true,
                          write: true,
                          create: true,
                        },
                      },
                      {
                        resource: q.Index("getShoutouts"),
                        actions: { read: true },
                      },
                      {
                        resource: q.Collection("Follower"),
                        actions: {
                          read: true,
                          write: true,
                          create: true,
                        },
                      },
                      {
                        resource: q.Index("getFollowers"),
                        actions: { read: true },
                      },
                      {
                        resource: q.Collection("Message"),
                        actions: {
                          read: true,
                          write: true,
                          create: true,
                        },
                      },
                      {
                        resource: q.Index("getMessages"),
                        actions: { read: true },
                      },
                      {
                        resource: q.Collection("User"),
                        actions: {
                          read: true,
                          write: true,
                          create: true,
                        },
                      },
                      {
                        resource: q.Index("getUsers"),
                        actions: { read: true },
                      },
                      {
                        resource: q.Index("getUserByUsername"),
                        actions: { read: true },
                      },
                    ],
                  })
                )
                .then(() => {
                  console.log("3. Successfully created user role.");
                  client
                    .query(
                      q.CreateRole({
                        name: "GuestRole",
                        privileges: [
                          {
                            resource: q.Collection("User"),
                            actions: {
                              create: true,
                            },
                          },
                          {
                            resource: q.Index("unique_User_username"),
                            actions: { read: true },
                          },
                          {
                            resource: q.Function("create_user"),
                            actions: { call: true },
                          },
                          {
                            resource: q.Function("login_user"),
                            actions: { call: true },
                          },
                        ],
                      })
                    )
                    .then(() => {
                      console.log("4. Successfully created guest role.");
                      return client
                        .query(
                          q.CreateKey({
                            role: q.Role("GuestRole"),
                          })
                        )
                        .then((res) => {
                          console.log("5. Created key to use in client");
                          const envFile =
                            "NEXT_PUBLIC_FAUNADB_SECRET=" +
                            res.secret +
                            "\n" +
                            "NEXT_PUBLIC_FAUNADB_GRAPHQL_ENDPOINT=https://graphql.fauna.com/graphql";

                          fs.writeFile(".env.local", envFile, (err) => {
                            if (err) {
                              console.error(
                                "Failed to create .env.local file. Copy the .env.local.example file and provide the secret shown below:"
                              );
                              console.log(res.secret);
                            } else {
                              console.log(
                                "6. Created .env.local file with secret\n"
                              );
                              fs.readFile(".env.local", (err, data) => {
                                if (!err) {
                                  console.log(".env.local:\n");
                                  console.log(data.toString("utf-8"));
                                }
                              });
                            }
                          });
                        })
                        .catch((err) => {
                          console.error(err);
                          console.error(`Failed to create key, closing`);
                        });
                    })
                    .catch((err) => {
                      if (err.toString().includes("instance already exists")) {
                        console.log("4. Role already exists.");
                      } else {
                        throw err;
                      }
                    });
                })
                .catch((err) => {
                  if (err.toString().includes("instance already exists")) {
                    console.log("3. Role already exists.");
                  } else {
                    throw err;
                  }
                });
            }
          })
          .catch((err) => {
            console.error(err);
            console.error(`Could not import schema, closing`);
          });
      })
      .catch((err) => {
        console.error(err);
        console.error(`Could not import schemaas, closing`);
      });
  });
};

main();
