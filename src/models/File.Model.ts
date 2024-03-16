import mongoose from "mongoose";

const fileSchema = new mongoose.Schema({
    userId:String,
    image:String,
    title:String, 
})

const FileModel = mongoose.models.files || mongoose.model("files", fileSchema);
export default FileModel;