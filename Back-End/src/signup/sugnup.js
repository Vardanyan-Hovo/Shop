import express from 'express';
import checkNoteAuthenticated from "./checkNoteAuthenticated.js"
import { Users } from '../bd/data.js'; // Assuming this is an ES module as well
import bcrypt from 'bcrypt';
import haveEmail from "./haveEmail.js";

const router = express.Router();


router.post('/', checkNoteAuthenticated, haveEmail, async (req, res) => {
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
