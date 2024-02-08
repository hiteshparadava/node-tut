import { MongoClient } from 'mongodb'
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);
const dbName = 'e-com';

async function dbConnect()
{
    await client.connect();
    const db = client.db(dbName);
    return db.collection('product');
}

export default dbConnect;