import express from 'express';
const router = express.Router();

router.get("/", (req, res)=> {
    req.logOut();
    res.redirect("login");
})


export default router;
