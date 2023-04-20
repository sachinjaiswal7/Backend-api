import express from "express";
import userRouter from "./routes/users.js";
import taskRouter from "./routes/task.js"
import { connectDb } from "./data/database.js";
import cookieParser from "cookie-parser";
import { errorHandler } from "./middlewares/error.js";
import cors from "cors"






const app = express()
connectDb();

// using middlewares
app.use(cookieParser());
app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(cors());

// using routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/task",taskRouter)



app.get("/",(req, res) => {
    res.send("Nicely working");
})
app.use(errorHandler)





app.listen(3000 , () => {
    console.log("listening at the port 3000");
})