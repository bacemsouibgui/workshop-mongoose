const express=require("express")
const app=express()
const connectDB=require("./config/connectDB")
//middleware
app.use(express.json());
const port=5000
//2eme etape connect to database
connectDB()
//3.routes
app.use("api/contacts",require("./routes/contact"))

app.listen(port,(err) =>{
    err?console.log("erreur"): console.log(`server is running on port ${port}`)
}) 