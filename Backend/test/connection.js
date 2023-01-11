const { MongoClient } = require("mongodb");
require("dotenv").config();

async function main() {
  /**
   * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
   * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
   */
  const uri = process.env.CONNECTION_STRING;

  const client = new MongoClient(uri);

  try {
    // Connect to the MongoDB cluster
    console.log("Connecting to MongoDB.....");
    await client.connect();
    console.log("Connection successful!");

    // Make the appropriate DB calls
    console.log("Finding Databases ....");
    await listDatabases(client);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

async function listDatabases(client) {
  databasesList = await client.db().admin().listDatabases();

  console.log("List of Databases Found:");
  databasesList.databases.forEach((db) => console.log(` - ${db.name}`));
}

main().catch(console.error);
