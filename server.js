const express = require("express");
const app = express()
const bodyParser = require("body-parser")
const path = require("path")
const router = express.Router()
const PORT = process.env.PORT || 4300

app.use(bodyParser.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static( path.join(__dirname, "public")))

 
const documentation = router.get("/", (req, res)=>{
    res.send("API Documentation page")
})


app.use("/", documentation) 



app.listen(PORT, ()=>{
console.log(`Running on   http://localhost:${PORT}`)
})