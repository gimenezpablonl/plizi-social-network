import { query as q } from "faunadb";
import { NextApiRequest, NextApiResponse } from "next";
import { faunaClient } from "../../graphql/client";
import { getAuthCookie, removeAuthCookie } from "../../utils/authCookies";
export default async function logout(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const token = getAuthCookie(req);

  // already logged out
  if (!token) return res.status(200).end();
  
  try {
    await faunaClient(token).query(q.Logout(false));
    removeAuthCookie(res);
    res.status(200).end();
  } catch (error) {
    res.status(401).send(error.message);
  }
}
