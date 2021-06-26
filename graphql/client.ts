import { GraphQLClient } from "graphql-request";
import { RequestDocument, Variables } from "graphql-request/dist/types";

const endpoint = "https://graphql.fauna.com/graphql";

// FQL

const faunadb = require("faunadb");
export const faunaClient = (token?: string) =>
  new faunadb.Client({
    secret: `${token ? token : process.env.NEXT_PUBLIC_FAUNADB_SECRET}`,
  });
export const client = new faunadb.Client({
  secret: `${process.env.NEXT_PUBLIC_FAUNADB_SECRET}`,
});

// GRAPHQL

export const graphQLClient = (token?: string) => {
  const secret = token || process.env.NEXT_PUBLIC_FAUNADB_SECRET;

  return new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${secret}`,
      "X-Schema-Preview": "partial-update-mutation",
    },
  });
};

export const fetcher = async (
  query: RequestDocument,
  token?: string,
  variables?: Variables
) => await graphQLClient(token).request(query, variables);
