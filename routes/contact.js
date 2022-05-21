const express=require("express")
const router=express.Router()
const Contact=require("../models/contact")

//test
router.get("/",(req,res) =>{
    res.send("test") 
})


router.post("/add",async(req,res) =>{
    const {name,email,phone} =req.body;
    try{
    const newContact=new Contact ({
        name,
        email,
        phone,
    })
    console.log(newContact,"testtttt")
const contact= await newContact.save()
res.send( {msg: "contact added"})
}
    catch(error){
        console.log(error)

    }
})

module.exports=router