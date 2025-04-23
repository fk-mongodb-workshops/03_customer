import moment from "moment";
import { MongoClient } from "mongodb";
import 'dotenv/config';

const main = async () => {

    const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@fk02.karnagi.monster/?tls=false`;
    const client = new MongoClient(uri);
    await client.connect();

    const coll = client.db("merchant").collection("customer_transaction_histories");

    var stage1 = { $match: { saleDate: { $gt: new Date(t0) } } }

    // Add 'total' and 'item_count' fields...
    var stage2 = {
        $addFields: {
            total: {
                $sum: {
                    $map: {
                        input: "$items",
                        as: "row",
                        in: { $multiply: ["$$row.price", "$$row.quantity"] }
                    }
                }
            },
            item_count: {
                $sum: { $size: "$items" }
            }
        }
    }

    // Calculate average number of items and total sales per month by location and channel
    var stage3 = {
        $group: {
            _id: {
                year: { $year: "$saleDate" },
                month: { $month: "$saleDate" },
                location: "$storeLocation",
                channel: "$purchaseMethod"
            },
            avg_count: { $avg: "$item_count" },
            sales: { $sum: "$total" },
            last_sale: { $max: "$saleDate" }
        }
    }

    // Record the update time
    var stage4 = { $addFields: { 'updateTime': now } }

    // Sort by sale date, location and channel
    var stage5 = { $sort: { _id: 1 } }

    // Merge into report materialized view
    var stage6 = {
        $merge: {
            into: "report",
            on: "_id",
            whenMatched: "merge",
            whenNotMatched: "insert"
        }
    }

    var res = await coll.aggregate([stage1, stage2, stage3, stage4, stage4, stage5, stage6])
        .toArray().then(console.log("Finished merge pipeline..."));

    console.log(res);

    await client.close();
}

(async function () {
    await main();
})();
