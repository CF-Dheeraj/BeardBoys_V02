let express = require('express');
let app = express();// executable mode of express
let port = process.env.PORT;
let {dbConnect,getData,postData,updateData,deleteData} = require('./controller/dbcontroller') // destructuring - direct grabing attribute name
let cors = require('cors');
const bodyParser = require('body-parser');
const Mongo = require('mongodb')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())

app.get('/',(req,res)=>{
    res.send("Hi from express");
})

//list of products
app.get('/products',async (req,res)=>{
    let query = {}
    if(req.query.category_id)
    {
        
        query={categoryId:Number(req.query.category_id)}
    }
    let collection = 'products'
    let output = await getData(collection,query)
    res.send(output)
})

app.get('/categories',async (req,res)=>{
    let collection = 'categories'
    let output = await getData(collection,{})
    res.send(output)
})

//list of product wrt category
//list of products within price range
app.get('/categories/:cid',async (req,res)=>{
    let cid = Number(req.params.cid)
    let lcost = Number(req.query.lcost)
    let hcost = Number(req.query.hcost)
    
    if(lcost && hcost)
    {
        query={
            categoryId:cid,
            $and:[{"price":{$gt:lcost,$lt:hcost}}]
        }
    }
    else{
        query={categoryId:cid}
    }
    let collection = 'products'
    let output = await getData(collection,query)
    res.send(output)
})

app.get('/getUser/:emailId',async (req,res)=>{
    let collection = 'users'
    let query = {"emailId":req.params.emailId}
    let output = await getData(collection,query)
    res.send(output)
})

app.post('/addUser',async (req,res)=>{
    let data = req.body
    let collection='users'
    let response = await postData(collection,data)
    res.send(response)
})

app.post('/addtoCart',async(req,res)=>{
    let data = req.body
    let collection='cart'
    let response = await postData(collection,data)
    res.send(response)
})

app.get('/getfromCart/:email',async(req,res)=>{
    let collection ='cart'
    let query = {'email':email}
    let output= await getData(collection,query)
    res.send(output)
})

app.put('/updateCartquantity',async (req,res)=>{
    let collection = 'cart'
    // console.log(new Mongo.ObjectId(req.body._id))
    let condition = {'_id': new Mongo.ObjectId(req.body._id)}
    let data = {
        $set:{
            'quantity':req.body.quantity
        }
    }
    let output = await updateData(collection,condition,data)
    res.send(output)

})


app.get('/orders',async (req,res)=>{
    let query={}
    let email= req.query.email
    if(email)
    {
        query={'email':email}
    }
    let collection = 'orders'
    let output = await getData(collection,query)
    res.send(output)
})

app.post('/placeOrder',async (req,res)=>{
    let data = req.body
    let collection='orders'
    let response = await postData(collection,data)
    res.send(response)
})

app.post('/itemDetails',async (req,res)=>{
    if(Array.isArray(req.body.id))
    {
        
        let query = {id:{$in:req.body.id}}
        let collection= 'products'
        let output= await getData(collection,query)
        res.send(output)
    }
    else{
        res.send('Please send data in array format')
    }
})

app.put('/updateOrder',async (req,res)=>{
    console.log('update');
    let collection = 'orders'
    console.log(new Mongo.ObjectId(req.body._id))
    let condition = {'_id': new Mongo.ObjectId(req.body._id)}
    let data = {
        $set:{
            'status':req.body.status
        }
    }
    let output = await updateData(collection,condition,data)
    res.send(output)

})

app.delete('/deleteOrder',async (req,res)=>{
    let collection='orders'
    let condition = {'_id': new Mongo.ObjectId(req.body._id)}
    let output = await deleteData(collection,condition)
    res.send(output)
})





app.get('/details/:pid',async(req,res)=>{
    let pid = Number(req.params.pid)
    query={id:pid}
    let collection = 'products'
    let output = await getData(collection,query)
    res.send(output)

})

app.listen(port,(err)=>{
    if(err) throw err;
    dbConnect();
    console.log(`Server is running on ${port}`)
})

