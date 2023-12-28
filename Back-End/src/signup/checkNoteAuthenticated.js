export default function checkNoteAuthenticated(req, res, next){
    if (req.isAuthenticated() === true)
    {
        return res.redirect("/user");
    }
    next();
}
