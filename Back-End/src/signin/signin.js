import express from 'express';
const router = express.Router();

import checkNoteAuthenticated from "./checkNoteAuthenticated"



//call passport.use(new passportLocal.Strategy())
router.post("/login", checkNoteAuthenticated,  passport.authenticate("local", {
  success: "/user",
  failure: "/login"
}));

// Sign-in route
router.get('/signin', (req, res) => {
  const { username, password } = req.query;

});
  



export default router;