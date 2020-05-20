const express = require("express");
const app = express();
const parser = require("body-parser");
const cors = require("cors");
const MongoClient = require("mongodb").MongoClient;
const createRouter = require("./helpers/create_router.js");

app.use(cors());
app.use(parser.json());

MongoClient.connect("mongodb://localhost:27017")
  .then((client) => {
    const db = client.db("hotel");
    const hotelBookings = db.collection("guest");
    const guestRouter = createRouter(hotelBookings);
    app.use("/api/bookings/", guestRouter);
  })
  .catch(console.error);

app.listen(3000, function () {
  console.log(`Listening on port ${this.address().port}`);
});
