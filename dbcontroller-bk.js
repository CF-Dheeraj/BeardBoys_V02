let {MongoClient} = require('mongodb');
let mongourl= "mongodb://127.0.0.1:27017"
let client = new MongoClient(mongourl)


async function dbConnect(){
    await client.connect()
}

let db = client.db('internmay');

async function getData(colName,query){
    let output=[];
    console.warn("Inside getdata");
    try{
        const cursor = db.collection(colName).find(query);
        for await(const data of cursor){
            output.push(data)
            
        }
        cursor.closed
        return output
        //output = await db.collection(colName).find(query).toArray()
    }
    catch(err){
        output.push({"Error":"Error in getData"})
        }
    }


module.exports = {
    dbConnect,
    getData
}