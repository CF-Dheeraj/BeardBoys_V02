const {MongoClient} = require('mongodb');//destructuring
const url = "mongodb+srv://at_adm:lGJ2Wvls17n65Bfm@mongoprac.q3lkisg.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(url);//connection with mongo and url


async function  dbConnect(){
    await client.connect();//mongo conected
    //database connection
    
    //let collection = db.collection('products');
    //let response = await collection.find({}).toArray() // returns promise thats why await
    //console.log(response);
}
let db = client.db('beardboys')

async function getData(colName,query){
    
    let output=[]
    try{
        const cursor =  db.collection(colName).find(query)
        for await(const data of cursor)
        {
            output.push(data)
        }
        cursor.closed
    }
    catch(err){
        
        output.push({'Error': 'Error in getData'})

    }
    return output
}

async function postData(colName,data){
    let output;
    try{
        output= await db.collection(colName).insertOne(data)
    }
    catch(err)
    {
        output= {'response':'Error in postData'}
    }
    return output;
}

async function updateData(colName,condition,data)
{
    let output;
    try{
        console.log("try");
        output= await db.collection(colName).updateOne(condition,data)
    }
    catch(err){
        console.log("catch");
        output={'response':'Error in Update'}
    }
    return output;
}

async function deleteData(colName,condition)
{
    let output;
    try{
        output= await db.collection(colName).deleteOne(condition)
    }
    catch(err){
        console.log(err)
        output={'response':'Eroor in removing data'}
    }
    return output;
}

module.exports = {
    dbConnect,
    getData,
    postData,
    updateData,
    deleteData

}