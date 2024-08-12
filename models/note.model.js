import {Schema,model} from "mongoose";

const noteSchema = new Schema({
  title:{type:String,required:true},
  body:{type:String,required:true},
  created_at:{type:Date,default:Date.now},
  updated_at:{type:Date,default:Date.now}
});

export const Note = model("note",noteSchema);