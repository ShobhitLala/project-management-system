import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import routes from "./routes/index.js";

const app=express();
app.use(express.json());
app.use(cors({
    origin:true,
    credentials:true,
}));
app.use(cookieParser());
app.get("/",(req,res)=>{
    res.json({
        message:"project management system api running"
    });
});
app.use("/api/v1",routes);
export default app;
