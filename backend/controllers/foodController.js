import { log } from "console";
import foodModel from "../models/foodModel.js";
import fs from "fs";

//add food item

export const addFood = async (req, res) => {
  const { name, description, price, category } = req.body;
  let image_filename = `${req.file.filename}`;

  //validation 
  if (!name || !description || !price || !category) {
    return res.json({ message: "Please Enter all the details" });
  }

  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_filename,
  });

  try {
    await food.save();
    return res.json({ success: true, message: "Food Added" });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: "Error" });
  }
};

//all food list
export const listFood = async(req,res)=>{
  try{
      const foods = await foodModel.find({});
      res.json({success:true,data:foods})
  }
  catch (error){
       console.log(error);
       res.json({success:false,message:"Error"})
  }
}

// remove food item
export const removeFood = async(req,res)=>{
  try{
       const food = await foodModel.findById({_id: req.body.id});
       //to delete the images
       fs.unlink(`uploads/images/${food.image}`,()=>{})

       await foodModel.findByIdAndDelete(req.body.id);
       res.json({success:true,message:"food removed"})
  }catch(error){
       console.log(error);
       res.json({success:false,message:"Error"})
  }
};