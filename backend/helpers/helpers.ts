import mongoose from "mongoose";

class DbClass {
  dbConnection = async () => {
    const MONGO_URL = "mongodb://localhost:27017";

    let options: any = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      keepAlive: true,
    };
    try {
      if (MONGO_URL) {
        const connect = mongoose.connect(MONGO_URL, options);
        const db = mongoose.connection;
        db.on("error", console.error.bind(console, "connection error: "));
        db.once("open", function () {
          console.log("Connected successfully");
        });
        mongoose.set("strictQuery", false);
      }
    } catch (error) {
      console.log("====>>>>", error);
    }
  };
}
export default new DbClass();
