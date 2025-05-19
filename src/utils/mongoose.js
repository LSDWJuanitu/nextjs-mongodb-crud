import { connect, connection } from "mongoose";

const conn = {
  isConnected: false,
};

export async function dbConnect() {
  if (conn.isConnected) {
    return;
  }

  const db = await connect(
    process.env.MONGODB_URI || "mongodb+srv://jjmanzo:jjmanzo.2327@clustermongo-crud.ny7kb.mongodb.net/?retryWrites=true&w=majority&appName=ClusterMongo-Crud"
  );
  // console.log(db.connection.db.databaseName);
  conn.isConnected = db.connections[0].readyState;
}

connection.on("connected", () => console.log("Mongodb connected to db"));

connection.on("error", (err) => console.error("Mongodb Error:", err.message));
