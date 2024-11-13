import express from "express"
import cors from "cors"
import "dotenv/config"

//app config
const app = express();
const port = process.env.PORT || 4000;

//middlewares
app.use(express.json());
app.use(cors())

//initializing routes

app.get("/",(req,res)=> res.send("Api Working"));


app.listen(port,()=>{
    console.log(`server tun port number ${port}`);
    
})