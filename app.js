import express from "express";
import mongoose from "mongoose";
import { user } from "./models/users.js";
import userRouter from "./routes/users.js";
import { connectDb } from "./data/database.js";







const app = express()
connectDb();

// using middlewares
app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use("/users", userRouter);




app.get("/",(req, res) => {
    res.send("Nicely working");
})



app.listen(3000 , () => {
    console.log("listening at the port 3000");
})