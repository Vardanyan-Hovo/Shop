import { Users } from "../bd/data.js";

export default function haveEmail(req, res, next)
{
    const {email} = req.body
    if (email && Users.find((e)=>email == e))
    {
        return res.send("email alredy registred");
    }
    next();
}