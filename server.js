const express= require('express')
const app = express()
const port= 1234
//get request using HTTPS
app.use(express.static('public'))
//stores data into the json file
app.use(express.json)


app.post('/', (req,res)=>{
    const {id,question,options}=req.body
    console.log(id,question,options)
    res.sendStatus(200)
    //res.send('ur mom is gay')
})
app.listen(port,()=> console.log(`server has started on port: ${port}`))
//console.log("testing pls work123")  