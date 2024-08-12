import { Note } from "../models/note.model.js";
import { STATUS } from "../common/configs.js";

export const createNote = async(req,res) =>{
  try {
    let {title,body} = req.body;
    let isNote = await Note.findOne({title});
    if(isNote) return res.status(STATUS.BAD_REQUEST).json({message:"Note already exist!"});

    const myNote = new Note({
      title:title,
      body:body
    });
    await myNote.save();
    res.status(STATUS.CREATED).json({message:"New Note created successfully",data:myNote});
  } catch (error) {
    res.status(STATUS.SERVER_ERROR).json({message:error.message})
  }
};

export const getNoteById = async(req,res) => {
  try {
    const id = req.params.id;
    const isNote = await Note.findById(id);
    if(!isNote) return res.status(STATUS.BAD_REQUEST).json({message:"Note not found!"});
    return res.status(STATUS.OK).json({message:"Note data fetched",data:isNote});
  } catch (error) {
    return res.status(STATUS.SERVER_ERROR).json({message:error.message});
  }
};

export const queryNoteByTitleSubstring = async(req,res) => {
  try {
    const titleSubstring = req.query.title;
    if(!titleSubstring) return res.status(STATUS.BAD_REQUEST).json({message:"Title subString is required!"});
    const isNote = await Note.find({ title: { $regex: titleSubstring, $options: 'i' } });
    if(!isNote) return res.status(STATUS.BAD_REQUEST).json({message:"Note not found!"});
    return res.status(STATUS.OK).json({message:"Note data fetched by title",data:isNote});
  } catch (error) {
    return res.status(STATUS.SERVER_ERROR).json({message:error.message});
  }
}

export const updateNote = async(req,res) => {
  try {
    const id = req.params.id;
    const isNote = await Note.findById(id);
    if(!isNote) return res.status(STATUS.BAD_REQUEST).json({message:"Note not found!"});

    isNote.title = req.body.title || isNote.title;
    isNote.body = req.body.body || isNote.body;
    isNote.updated_at = Date.now();

    const newNote = await isNote.save();
    return res.status(STATUS.OK).json({message:"Note updated successfully",data:newNote});
  } catch (error) {
    return res.status(STATUS.SERVER_ERROR).json({message:error.message});
  }
}

