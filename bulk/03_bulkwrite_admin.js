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
    await client.db("merchant").collection("customer_transaction_histories").bulkWrite([
        {
            insertOne: {
                document: {
                    location: {
                        address: {
                            street1: "3 Main St.",
                            city: "Anchorage",
                            state: "AK",
                            zipcode: "99501",
                        },
                    },
                },
            },
        }
    ])

    await client.close();
}

(async function () {
    await main();
})();
