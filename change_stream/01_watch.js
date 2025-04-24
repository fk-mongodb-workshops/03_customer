import moment from "moment";
import { MongoClient } from "mongodb";
import 'dotenv/config';

const simulateAsyncPause = () =>
    new Promise(resolve => {
        setTimeout(() => resolve(), 6000000);
    });


const main = async () => {

    const uri = `mongodb://database1:27017,database2:27018,database3:27019/?tls=false`;
    const client = new MongoClient(uri);
    await client.connect();

    const coll = client.db("merchant").collection("customer_transaction_histories");
 
    const changeStream = coll.watch();
    console.log("waiting for incoming changes")

    // set up a listener when change events are emitted
    changeStream.on("change", next => {
        // process any change event
        console.log("received a change to the collection: \t", next);
    });
    await simulateAsyncPause();

    await changeStream.close();

    await client.close();
}

(async function () {
    await main();
})();
