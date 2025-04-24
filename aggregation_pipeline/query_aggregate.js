import moment from "moment";
import { MongoClient } from "mongodb";
import 'dotenv/config';

const main = async () => {

    const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@fk02.karnagi.monster/?tls=false`;
    const client = new MongoClient(uri);
    await client.connect();

    const coll = client.db("merchant").collection("customer_transaction_histories");

    const pipeline =
        [
            { $match: { amount: { $gte: 250 } } },
            { $project: { _id: 0 } },
            { $limit: 5 },
            { $sort: { amount: -1 } }
        ]


    const params = { maxTimeMS: 60000, allowDiskUse: true }

    var res = await coll.aggregate(pipeline, params).toArray();
    console.log(res);

    await client.close();
}

(async function () {
    await main();
})();
