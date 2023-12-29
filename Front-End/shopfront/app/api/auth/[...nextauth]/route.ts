import {options} from "./options";
import NextAuth from "next-auth";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async function auth(req: NextApiRequest, res: NextApiResponse) {

  const {providers} = options;

  const isDefaultSigninPage = req.method === "GET" && req.query.nextauth?.includes("signin");

  // Will hide the `GoogleProvider` when you visit `/api/auth/signin`
  if (isDefaultSigninPage) providers.pop()

  return await NextAuth(req, res, {
    providers
  })
}


export { handler as GET, handler as POST }