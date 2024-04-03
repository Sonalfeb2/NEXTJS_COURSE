import { MongoClient } from "mongodb";
const url ="mongodb+srv://sonal:5zsSlXfuybPLlle7@cluster0.9caborj.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0";
const handler = async (req, res) => {
  try {
    const client = await MongoClient.connect(url, err => {
      if (err) {
        throw new err();
      }
    });

    const db = client.db(); // it will create /connect a databse name meetups
    const collection = db.collection("meets"); // collection is a called as table in sql
    if (req.method === "POST") {
      const data = req.body;
      await collection.insertOne(data);
      res.json({ message: "created" });
    }
    client.close()
  } catch (err) {
    console.log("failed");
    res.json({ message: "failed" });
  }
};
export default handler;
