import express from "express";
import cors from "cors";
import mongoose from 'mongoose';
import { User } from "./users.js";

const app = express();
mongoose.connect("mongodb+srv://erlichmenahem_db_user:U7V1oByG0XsFuUJz@cluster0.doiizuk.mongodb.net/html-forms")


app.use(cors());
app.use(express.urlencoded({ extended: true }));


app.post("/register", async (req, res) => {
    const newUser = await User.create(req.body)
    res.status(200).json(newUser)
});

app.get("/students", async (req, res)=>{
    const users = await User.find()
    res.status(200).json(users)
})

app.listen(3000, () =>
  console.log(`server is running on http://localhost:3000/add-task`),
);