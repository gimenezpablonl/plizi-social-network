import { NextApiRequest, NextApiResponse } from "next";
import { fetcher } from "../../graphql/client";
import { setAuthCookie } from "../../utils/authCookies";
import { loginUser } from "../../graphql/mutations";
const faunadb = require("faunadb");
const q = faunadb.query;

export default async function login(req: NextApiRequest, res: NextApiResponse) {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).send("Usarname and password not provided");
  }

  try {
    const auth = await fetcher(loginUser, undefined, { username, password });
    if (!auth.loginUser) {
      return res.status(404).send("Secret is missing");
    }

    setAuthCookie(res, auth.loginUser);
    const client = new faunadb.Client({ secret: auth.loginUser });
    const user = await client
      .query(q.CurrentIdentity())
      .then((ret:any) =>
          client.query(q.Get(q.Ref(q.Collection("User"), ret.value.id)))
      );
    res.status(200).json(user.data);
  } catch (error) {
    res.status(401).send(error.message);
  }
}