import moment from "moment";
import { MongoClient } from "mongodb";
import 'dotenv/config';

const main = async () => {

    const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@fk02.karnagi.monster/?tls=false`;
    const client = new MongoClient(uri);
    await client.connect();

    const coll = client.db("merchant").collection("customer_transaction_histories");

    let datas = [];
    for (let i = 0; i < 10; i++) {
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

    // https://www.mongodb.com/docs/drivers/node/current/usage-examples/bulkWrite/
    await client.db("merchant").collection("customer_transaction_histories").bulkWrite([
        {
            insertOne: {
                document: {
                    "transaction_id": "U223456789",
                    "date": "2024-10-01",
                    "type": "Debit",
                    "amount": 300,
                    "currency": "USD",
                    "merchant": "Amazon",
                    "category": "Shopping",
                    "status": "Pending",
                    "customer_id": "123456789"
                },
            },
        },
        {
            updateMany: {
                filter: { 
                    $or: [
                        { amount: { $gte: 300 }},
                        { amount: { $gte: 300 } }
                    ]
                   
                },
                update: { $set: { high_transaction: true } }
            },
        },
        {
            deleteOne: { filter: { amount: { $gte: 301 } } }
        }
    ])

    await client.close();
}

(async function () {
    await main();
})();
