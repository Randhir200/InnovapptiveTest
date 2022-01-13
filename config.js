const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const databaseName = 'innovapptive';

async function dbConnect() {
  const result = await client.connect();
  const db = result.db(databaseName);
  return db.collection('testcollection');
}

module.exports = dbConnect;
