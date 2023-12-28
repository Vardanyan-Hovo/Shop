import  fs from "fs";
import path  from "path";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";


export async function Post(request:Request) {
    const body = await request.json();
    const {
        name,
        email,
        type,
        password
    } = body;

    const hashedPassword = await bcrypt.hash(password, 12)

    try{
        let User = {
            name:name,
            type,
            email,
            password: hashedPassword
        };
        return NextResponse.json(User);
    }
    catch {
        return NextResponse.error();
    }

}



// var data = "New File Contents";

// fs.writeFile("./prisma/temp.txt", data, (err) => {
//   if (err) console.log(err);
//   console.log("Successfully Written to File.");
// });

// fs.readFile("./prisma/temp.txt", "utf-8", (err, data)=>{
//     if (err) {console.log(err)}
//     console.log(data);
// })