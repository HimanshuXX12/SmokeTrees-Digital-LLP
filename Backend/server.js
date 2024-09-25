const express= require("express");
const mongoose= require("mongoose");
const env= require("dotenv").config();
const port= 300 || process.env.PORT;
const app= express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
const controller= require("./Controllers/Controllers");
const db_link="mongodb+srv://himanshuee20a1358:IhbY53Mb3hZ330e5@cluster0.irwpg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(db_link).then(()=>{
     console.log("Database is connected");
}).catch((err)=>{   
     console.log("Not Connnected");
})
controller(app);


app.listen(port,()=>{
     console.log("Server is running at port ",300);
})