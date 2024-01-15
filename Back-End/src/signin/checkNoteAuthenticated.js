export default function checkNoteAuthenticated(req, res, next){
    if (req.isAuthenticated() === true)
    {
        console.log("redirect")
        return res.redirect("/api/lognin");
    }
    next();
}
