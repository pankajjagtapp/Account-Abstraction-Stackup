import { Router } from "express";
import controller from "./controller";
const router = Router();

router
  .post("/getAddress", controller.getAddress)
  .post("/erc20Transfer", controller.erc20Transfer)
  .post("/erc20Approve", controller.erc20Approve)
  .post("/addLiquidity", controller.atomicAddLiquidity);

export default router;
