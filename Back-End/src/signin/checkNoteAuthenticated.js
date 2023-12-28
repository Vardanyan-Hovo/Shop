export default function checkNoteAuthenticated(req, res, next){
    if (req.isAuthenticated() === true)
    {
        return res.send("you are alredy sign in");
    }
    next();
}
