import mongoose  from "mongoose";

const uri = 'mongodb://localhost:27017/contacto_db'
mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true
 
});

const conection = mongoose.connection

conection.on('open', ()=>{
    console.log("DB")
})