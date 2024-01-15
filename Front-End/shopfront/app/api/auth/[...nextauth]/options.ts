// import type { NextApiRequest, NextApiResponse } from "next"
import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

import axios from "axios";

export const options:NextAuthOptions = {
    providers:[
        // GitHubProvider({
        //     clientId: process.env.GITHUB_ID as string,
        //     clientSecret: process.env.GITHUB_SECRET as string
        //   }),
        CredentialsProvider({
          // The name to display on the sign in form (e.g. 'Sign in with...')
          name: 'Credentials',
          // The credentials is used to generate a suitable form on the sign in page.
          // You can specify whatever fields you are expecting to be submitted.
          // e.g. domain, username, password, 2FA token, etc.
          // You can pass any HTML attribute to the <input> tag through the object.
          credentials: {
            username: { label: "Email", type: "email", placeholder: "jsmith" },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials, req) {
            // You need to provide your own logic here that takes the credentials
            // submitted and returns either a object representing a user or value
            // that is false/null if the credentials are invalid.
            // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
            // You can also use the `req` object to obtain additional parameters
            // (i.e., the request IP address)
    console.log("await fetch(localhost:5001/api/lognin)");
            const res = await fetch('@app/api/signin/', {
              method: 'POST',
              body: JSON.stringify(credentials),
              headers: { "Content-Type": "application/json" }
            })
    console.log(res);
            const user = await res.json()
      
            // If no error and we have user data, return it
            if (res.ok && user) {
              return user
            }
            // Return null if user data could not be retrieved
            return null
          }
        })
    ],
    // pages:{
    //     signIn:"/signin"
    // }
}
