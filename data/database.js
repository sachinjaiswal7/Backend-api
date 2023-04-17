import mongoose from "mongoose";
import { config } from "dotenv";

config({
    path : "./data/config.env",
})

export const connectDb = () => {
    mongoose.connect(process.env.DB_URI,{
    dbName : "backendApi",
}).then(() => {console.log("In then")}).catch(() => {console.log("In catch")});
}
