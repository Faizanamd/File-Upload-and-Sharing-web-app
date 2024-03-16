import mongoose from "mongoose";

const fileSchema = new mongoose.Schema({
    userId:String,
    image:String,
    title:String,
    fav: {
        type: Boolean,
        default: false,
    },
    trash:{
        type:Boolean,
        default:false,
    },
})

const FileModel = mongoose.models.files || mongoose.model("files", fileSchema);
export default FileModel;