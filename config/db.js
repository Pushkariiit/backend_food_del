import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://greatstack:6204935506@cluster0.specm94.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}