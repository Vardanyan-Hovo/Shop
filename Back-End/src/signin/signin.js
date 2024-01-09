import express from 'express';
import passport from 'passport';
import passportLocal from "passport-local"
import checkNoteAuthenticated from "./checkNoteAuthenticated.js"
import {Users} from "../bd/data.js"

const router = express.Router();
//-------------------------------------------------------------------    for password     --------
//middleware for check password 
//Authentication
passport.use(new passportLocal.Strategy({
      //we say your username is your email address
      usernameField: "email"
  }, async (email, password, done) => {
      let user = Users.find((user)=>user.email === email);
      console.log("user = " + user);
      if (!user) {
          //         error, user?  
          return done(null, null, {massage: "incorect email"});
      }
      //                       real        hash password
      if (await bcrypt.compare(password, user.password)) {
          return done(null, user);
      }
      console.log("user = " + user);
      done(null, null, {massage: "incorect password"})
}));



//got error function user and returned id
passport.serializeUser((user, done) => {
  done(null, user.id);
})

//got error function id and returned user
passport.deserializeUser((id, done)=> {
  done(null, Users.find((user)=>user.id === id));
})
//-------------------------------------------------------------------    for password     --------




//call passport.use(new passportLocal.Strategy())
router.post("/", checkNoteAuthenticated,  passport.authenticate("local", {
  success: "/Home",
  failure: "/login"
}));

// Sign-in route
router.get('/', (req, res) => {
  const { username, password } = req.query;

  console.log("username = " + username + "password = " + password);
});
  



export default router;
