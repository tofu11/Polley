const express= require('express')
const app = express()
const port= 1234
//get request using HTTPS
app.use(express.static('public'))

app.post('/', (req,res)=>{

    res.status(200).send('testing')
    //res.send('ur mom is gay')
})
app.listen(port,()=> console.log(`server has started on port: ${port}`))
//console.log("testing pls work123")  
