import { getServerSession } from "next-auth/next";
import {options} from "@/app/api/auth/[...nextauth]/options"



// export function getSession(){
//     return getServerSession(options) //return CredentialsProvider
// }



export async function getCurrentUser() {
    const session = await getServerSession(options)
    
    return session;
}

