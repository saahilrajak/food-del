import express from "express";
import { addFood, listFood, removeFood} from "../controllers/foodController.js";
import fileUpload from "../middleware/file-upload.js";

const foodRouter = express.Router();

foodRouter.post("/add",fileUpload.single("image"),addFood);
foodRouter.get("/list",listFood);
foodRouter.post("/remove",removeFood);


export default foodRouter;

