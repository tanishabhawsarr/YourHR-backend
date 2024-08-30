import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from './routes/user.route.js';

dotenv.config({});

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOptions={
    origin: [
            "http://localhost:5173",
            "http://localhost:4173",
            process.env.CLIENT_URL,
        ],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials:true
}
app.use(cors(corsOptions));

const PORT=process.env.PORT || 3000;

app.use("/api/v1/user",userRoute);


app.listen(PORT,()=>{
    connectDB();
    console.log(`Server running at port ${PORT}`);
})
