import express from "express";
import { addFood, listFood, removeFood } from "../controllers/foodController.js";
import multer from "multer"; // using that i will create the image storage system

const foodRouter = express.Router();

// Image Storage engine

const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req, file, cb)=>{
        return cb(null, `${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})

foodRouter.post("/add", upload.single("image"), addFood)
foodRouter.get("/list", listFood)
foodRouter.post("/remove", removeFood);



export default foodRouter;