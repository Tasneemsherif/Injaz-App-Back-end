import mongoose from "mongoose";

const connectToDatabase = async () => {
    try{
       const connection = await mongoose.connect("mongodb+srv://tasneemsherif45:Gc8pOuIJxifNgp0G@cluster0.jqihlqk.mongodb.net/Injaaz-app?retryWrites=true&w=majority")

       if (connection) {
    console.log("connected to database");}

    }catch (error){
        console.log("connection error",error);
        throw error;
    }
}
export default connectToDatabase;