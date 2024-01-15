import axios from "axios"

export async function POST(){
console.log("POST coll");
    // const user = await axios("http://localhost:5001/login",{
    //     method: 'POST',
    //     body: JSON.stringify(credentials),
    //     headers: { "Content-Type": "application/json" }
    // });
    // console.log("user == " + user);
    return Response.json('ok')
}