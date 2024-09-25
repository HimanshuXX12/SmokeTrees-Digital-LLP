const UserModel= require("../Models/UserTable");
const AddressModel= require("../Models/Address");

function Controller(app)
{
  // Storing the User Infrmation and  Address in Tables
  app.post("/create", async (req,res)=>{
       const {address,name}= req.body;

       const AddressData= new AddressModel({
          Address:address,
       })

       const UserData= new UserModel({
          UserName:name
       })

       let  res_1
       await AddressData.save().then(()=>{
           res_1 =true;
           console.log("Data Inserted");
       }).catch((err)=>{
            console.log("Failed to  insert Data");
       });

         let  res_2
         await UserData.save().then(()=>{
               res_2=true;
              console.log("Data inserted");
        }).catch((err)=>{
             console.log("Failed to insert Data");
        })
        
        if(res_1 && res_2)
        {
             res.send("Both  Address and Name are Stored in  Diffrent Tables");
        }
        else{
             res.send("Failed to Store Data");
        }


  })  
}

module.exports= Controller;