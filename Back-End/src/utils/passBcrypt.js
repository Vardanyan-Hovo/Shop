import express from "express";
import path from "path";
import bcrypt from "bcrypt";
import session from "express-session";
import passport from "passport"
import passportLocal from "passport-local"

const app = express();

let data = [];

// secret:"keyboard cat"
app.use(session({
    secret: process.env.SESSION_SECRET,  //save .env
    resave: false,                        //cookie: {maxAge: 60000}
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

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
passport.deserializeUser((id, done)=>{
    done(null, data.find((user)=>user.id === id));
})
