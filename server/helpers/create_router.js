const express = require("express");
const ObjectID = require("mongodb").ObjectID;

const createRouter = function (collection) {
  const router = express.Router();

  // INDEX

  // CREATE
  router.post("/", (req, res) => {
    const newGuest = req.body;
    collection
      .insertOne(newGuest)
      .then((result) => {
        res.json(result.ops[0]);
      })
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({ status: 500, error: err });
      });
  });

  // DELETE

  return router;

  // Not used: SHOW or UPDATE
};

module.exports = createRouter;
