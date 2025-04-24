import moment from "moment";
import { MongoClient } from "mongodb";
import 'dotenv/config';

const main = async () => {

    const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@fk02.karnagi.monster/?tls=false`;
    const client = new MongoClient(uri);
    await client.connect();

    const coll = client.db("merchant").collection("customer_transaction_histories");

    const pipeline = [
        {
            $match: {
                amount: { $gte: 250 },
                customer_id: '123456789'
            }
        },
        { $project: { _id: 0, customer_id: 0 } },
        { $sort: { amount: -1 } },
        { $limit: 5 },
        {
            $merge: {
                into: "trx_rollup",
                on: "transaction_id",
                whenMatched: "merge",
                whenNotMatched: "insert"
            }
        }
    ]

    const params = { maxTimeMS: 60000, allowDiskUse: true }

    var res = await coll.aggregate(pipeline, params).toArray();
    console.log(res);

    await client.close();
}

(async function () {
    await main();
})();
