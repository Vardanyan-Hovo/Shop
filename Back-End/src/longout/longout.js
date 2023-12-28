app.get("/logout", (req, res)=> {
    req.logOut();
    res.redirect("login");
})
