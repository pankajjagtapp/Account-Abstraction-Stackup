import router from "../controller/functionRouter";
import express, { Application } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
// import dbConnect from "../helpers/helpers";
dotenv.config();

class ExpressServer {
  private app: Application;
  constructor() {
    this.app = express();
    this.app.use(cors());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    // dbConnect.dbConnection();
    this.initialiseRouter();
  }

  private initialiseRouter() {
    this.app.use(router);
    return this;
  }

  public listen(port: number) {
    this.app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  }
}

export default new ExpressServer();
