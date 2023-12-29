import express from 'express';
import passportLocal from "passport-local"
import checkNoteAuthenticated from "./checkNoteAuthenticated"

const router = express.Router();
//-------------------------------------------------------------------    for password     --------
//middleware for check password 
//Authentication
passport.use(new passportLocal.Strategy({
      //we say your username is your email address
      usernameField: "email"
  }, async (email, password, done) => {
      let user = data.find((user)=>user.email === email);
      if (!user)
      {
          //         error, user?  
          return done(null, null, {massage: "incorect email"});
      }
      //                       real           hash password
      if (await bcrypt.compare(password, user.password))
      {
          return done(null, user);
      }
      done(null, null, {massage: "incorect password"})
}));



//got error function user and returned id
passport.serializeUser((user, done) => {
  done(null, user.id);
})

//got error function id and returned user
passport.deserializeUser((id, done)=> {
  done(null, data.find((user)=>user.id === id));
})
//-------------------------------------------------------------------    for password     --------



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