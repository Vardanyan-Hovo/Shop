
export default function checkisAuthenticated(req, res, next)
{
    if (req.isAuthenticated() === false)
    {
        return res.redirect("/login");
    }
    next();
}
