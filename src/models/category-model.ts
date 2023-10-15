import mangoose from 'mongoose';

const categorySchema = new mangoose.Schema({
    name: {
        type: String,
        required: true, 
    },
    isEditable: {
        type: Boolean,
        required: true,
        default: true, 
    },
    color : {
        id: String,
        name: String, 
        code: String,
    },
    icon: {
        id: String,
        name: String,
        symbol: String, 
    },
    user: {
        type: mangoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    
    },
})

const Category = mangoose.model("Category", categorySchema);
export default Category; 