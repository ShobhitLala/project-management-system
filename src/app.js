import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import routes from "./routes/index.js";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./config/swagger.js";

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
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/api/v1",routes);
export default app;
