import express from "express"
import { addSong, listSong } from "../controllers/songController.js"

const songRouter = express.Router()

songRouter.post("/add",addSong);
songRouter.get("/list",listSong);

export default songRouter;