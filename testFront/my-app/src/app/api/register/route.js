//Back end
// import {User} from "@/models/User.js"
import {User} from "../../../models/User";
import { dbConnect, disconnect } from "../../../lib/db";
import { NextResponse } from 'next/server';

export async function POST(req){
    console.log("hit get post", new Date().getSeconds());
    try {
        //await for src/app/register send request 
        //i means front end send request with form
        const body = await req.json();

        //connect whit Mongodb
        await dbConnect();

        const post = await User.create(body);

        console.log("Post post" + post);
        

        return new NextResponse(post);
    } catch (error) {
        console.log("error from route", error);
        return new NextResponse("Error");
    }
}
