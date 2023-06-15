let express = require('express');
let app = express();
let port = 9120;
let {dbConnect,getData} = require('./dbcontroller-bk')

app.get('/',(req,res)=>{
    res.send('Hii from express')
})

app.get('/location',async (req,res)=>{
    let query = {};
    let collection = "location";
    let output = await getData(collection,query)
    console.log(output)
    res.send(output)
})

app.listen(port,(err)=>{
    dbConnect()
    if (err) throw err;
    console.log(`Server is running on port ${port}`)
})