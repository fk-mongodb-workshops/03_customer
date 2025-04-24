import moment from "moment";
import { MongoClient } from "mongodb";
import 'dotenv/config';

const main = async () => {

    const uri = `mongodb://database1:27017,database2:27018,database3:27019/?tls=false`;
    const client = new MongoClient(uri);
    await client.connect();

    const coll = client.db("merchant").collection("customer_transaction_histories");

    await client.db("merchant").collection("customer_transaction_histories")
        .updateOne({ amount: { $gte: 250 } }, { $set: { amount: { $inc: 1 } } })

    console.log("records updated")

    await client.close();
}

(async function () {
    await main();
})();
