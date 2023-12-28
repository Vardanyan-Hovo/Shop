import express from 'express';
import session from "express-session";
import passport from "passport"
import passportLocal from "passport-local"
import checkNoteAuthenticated from "./checkNoteAuthenticated.js"
import { Users } from '../bd/data.js'; // Assuming this is an ES module as well
import bcrypt from 'bcrypt';


const router = express.Router();


//-------------------------------------------------------------------    for password     --------
// secret:"keyboard cat"
router.use(session({
  secret: process.env.SESSION_SECRET,  //save .env
  resave: false,                        //cookie: {maxAge: 60000}
  saveUninitialized: false
}));

router.use(passport.initialize());
router.use(passport.session());

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




router.post('/', checkNoteAuthenticated, async (req, res) => {
  let {name, email, password, type} = req?.body;

  if (!name || !password || !type || !email)
    return res.status(400).json({ message: `received user not create db` });

  //create hashed pass
  const hashedPass = password.length < 10 ? await bcrypt.hash(password, 10) : password;

  const user = {
    id: `${Date.now()}_${Math.random()}`,
    name,
    type,
    email,
    password: hashedPass,
  };

  Users.push(user);
  res.send(user);
});

export default router;









