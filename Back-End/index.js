import express, { json } from "express";
import cors from 'cors';
import userSignUp  from "./src/signup/sugnup.js";
import useController from "./src/controller/controller.js"
import session from "express-session";
import passport from "passport"
import logout from "./src/longout/longout.js"
import checkisAuthenticated from "./src/utils/checkisAuthenticated.js"
import userSignIn from "./src/signin/signin.js"
// import pass from "./passBcrypt.js"

const app = express();

// CORS (Cross-Origin Resource Sharing): If the server 
// is on a different domain or port than your React Native app, 
// ensure that the server allows cross-origin requests.
//  You might need to configure the server to include the 
//  proper CORS headers (Access-Control-Allow-Origin)
//  to permit requests from your React Native app's origin.
app.use(cors());

//for data.on dont use
app.use(express.json());

//for from parsing
app.use(express.urlencoded({extended : true}))

// secret:"keyboard cat"
app.use(session({
  secret: process.env.SESSION_SECRET,  //save .env
  resave: false,                        //cookie: {maxAge: 60000}
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

//when request came to react.js
// app.use(express.static("./front/build"));


app.use("/", useController);

app.use("/api/register", userSignUp);
app.use("api/lognin", userSignIn);
app.use("/logout", logout)

app.get("/", async (req, res) => {
  return res.send("I em Server");
});

app.use(checkisAuthenticated);

app.get("/Home", async (req, res) => {
  return res.send("Hello Welcome to account");
});


//listen this port 
let PORT = process.env.PORT || 3155;
app.listen(PORT, () => {
      console.log(`Server running on port http://localhost:${PORT}`);
});
