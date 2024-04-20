import  {Request, Response } from "express";
import { createUser, getUserEmail } from "./user.controller"

async function register(req : Request, res : Response) {
  try {
    console.log(typeof req)
    const { email, password, username } = req.body;
    console.log("after destructuring" ,email, password, username)

    if (!email || !password || !username) {
      return res.sendStatus(400);
    }

    const existingUser = await getUserEmail(email);

    if (existingUser !== null && existingUser !== undefined ) {
      return res.sendStatus(400);
    }

    const user = await createUser({
      email: email,
      username: username,
      authentication: {
        password: password,
      },
    });
    return res.status(200).json(user)
   
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}

export default register;
