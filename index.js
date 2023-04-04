import express from "express"
import morgan from "morgan"
import bodyParser from "body-parser"
import dotEnv from "dotenv"
import connectDB from "./config/database.js";


const app = express()
dotEnv.config()
connectDB()
app.use(morgan("common"))
app.use(bodyParser.urlencoded({extended : false}))


const port = process.env.PORT || 8500

app.listen(port, console.log("Server started"))