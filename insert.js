import dbConnect from './mongodb.js'

const insert = async () => {
    const db = await dbConnect();
    const result = await db.insertMany([{name:'keyir',price:'33'},{name:'tushar',price:'55'}]);
    if(result.acknowledged)
    {
        console.log('data inserted.');
    }
}
insert();