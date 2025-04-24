import moment from "moment";
import { MongoClient } from "mongodb";
import 'dotenv/config';

const main = async () => {

    const uri = `mongodb://database1:27017,database2:27018,database3:27019/?tls=false`;
    const client = new MongoClient(uri);
    await client.connect();

    const coll = client.db("merchant").collection("customer_transaction_histories");
    
    let datas = [];
    for (let i = 0; i < 2; i++) {
        datas.push({
            "transaction_id": "T223456789" + i,
            "date": "2024-09-0" + i,
            "type": "Debit",
            "amount": 250 + i,
            "currency": "USD",
            "merchant": "Amazon",
            "category": "Shopping",
            "status": "Completed",
            "customer_id": "123456789"
        })
    }
    await client.db("merchant").collection("customer_transaction_histories").insertMany(datas);

    console.log("new records inserted")

    await client.close();
}

(async function () {
    await main();
})();
