import mongoose from "mongoose";

const LogSchema = new mongoose.Schema({
    Log:{
        type: String
    },
    date:{
        type: Date
    },
    label:{
        type:String,
        required: true,
        enum:['update', 'fix', 'refactor'],
        default: 'update'
    },
    moreInfo:{
        type: String
    }
},{timestamps:true})

const Log = mongoose.models.Log || mongoose.model('Log', LogSchema) 
export default Log