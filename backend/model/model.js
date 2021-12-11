import mongoose from "mongoose";

const SchemaContacto = new mongoose.Schema({
     id: {
           type: String,
           unique: true
     }
     name:{
          required: true, 
          type: String
     },
      email:{
        type:String,
        unique: true,
      } ,
      contact: {
           type: Number,
           unique: true,
           required: true,
      },
      picture:{
           type: Buffer,
           required: true,
      }
});

export default mongoose.model('Contato', SchemaContacto);