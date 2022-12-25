//Require the MongoDB connection created in index.js and then mention the db name
//within db() and mention the collection name within collection()
const products = require("./index").db("koa").collection("products");

//Require ObjectId in order to access documents based on the _id
const ObjectId = require("mongodb").ObjectId;

// creating a new record
const save = async ({ name, description, qty, price }) => {
  const result = await products.insertOne({ name, description, qty, price });
  //returns the inserted data
  return result.ops[0];
};

// getting all records
const getAll = async () => {
  const cursor = await products.find();
  //Converts the result into an array
  return cursor.toArray();
};

// getting a specific by it's id
const getById = async (id) => {
  return await products.findOne({ _id: ObjectId(id) });
};

// update a particular product by its id
const update = async (id, { name, description, qty, price }) => {
  console.log(id);
  const result = await products.replaceOne(
    { _id: ObjectId(id) },
    { name, description, qty, price }
  );
  return result.ops[0];
};

// Remove the Product Using it’s ID
const removeById = async (id) => {
  await products.deleteOne({ _id: ObjectId(id) });
};

module.exports = { getAll, getById, removeById, save, update };
