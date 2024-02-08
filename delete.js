import dbConnect from './mongodb.js'

const deleteData = async () => {
    const db = await dbConnect();
    const result = await db.deleteOne({name:'hiesh'});
    if(result.acknowledged)
    {
        console.log('data deleted.');
    }
}
deleteData();