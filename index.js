import { MongoClient } from 'mongodb'
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);
const dbName = 'e-com';

async function getData()
{
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('product');
    let response = await collection.find({}).toArray();
    console.log(response);
}

getData();