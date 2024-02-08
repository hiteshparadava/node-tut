import dbConnect from './mongodb.js'

const update = async () => {
    const db = await dbConnect();
    const result = await db.updateOne({name:'hiesh'},{$set:{price:'55515'}});
    if(result.acknowledged)
    {
        console.log('data updated.');
    }
}
update();