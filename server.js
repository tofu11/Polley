const express= require('express')
const app = express()
const port= 1234

const {readDb, writeDb}= require ('./db_pollsfunction')

app.use(express.static('public'))
app.use(express.json())

//routes HTTP verbs
app.post('/', async (req, res) => {
    const { id, question, options } = req.body

    if (!id || !question || options.length == 0) {
        res.status(400).send({ status: 'error' })
    }
    const docRef = db.collection('poles').doc('poles')
    const response = await docRef.set({
        [id]: {
            question,
            options: Array.from(options).reduce((acc, curr) => {
                return { ...acc, [curr]: 0 }
            }, {})
        }
    }, { merge: true })

    console.log(id, question, options)
    res.redirect('/' + id)
})
/*

app.post('/', (req,res)=>{
    const {id,question,options}=req.body
    console.log(id,question,options)
    const currentPolls= readDb()
    writeDb({
        ...currentPolls
        [id]:{
            question,
            options:options.reduce((acc, curr=>{
                return {...acc, [curr]:0 }

            },{}
            ))
        }
    })
    //res.send('ur mom is gay')asd
    res.sendStatus(200)

}*/

app.listen(port,()=> console.log(`server has started on port: ${port}`))
//console.log("testing pls work123")  