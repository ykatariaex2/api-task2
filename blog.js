const express = require('express')
const path = require('path')

const app = express()
const port = 3000

app.listen(port, () => {
  console.log(`Blog app listening on port ${port}`)
})


// async function getData(){
//     let value=await fetch('https://randomuser.me/api/?page=3&results=10&seed=abc')
//     let data=await value.json();
//     final=data;
//     // console.log(final)
// }
// getData();

app.get('/',async(req,res)=>{

    let value=await fetch(`https://randomuser.me/api/?page=${req.query.page}&results=${req.query.result}&seed=abc`)
    let data =await value.json();
    final=data;
    res.send(final)
})

app.get('/table',(req,res)=>{
    console.log(__dirname)
    res.sendFile(path.join(__dirname,'table.html'))
})
