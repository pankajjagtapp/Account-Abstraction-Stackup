import getAddress from "../../scripts/simpleAccount/address";
import transfer from "../../scripts/simpleAccount/erc20Transfer";
import approve from "../../scripts/simpleAccount/erc20Approve";
import addLiquidity from "../../scripts/simpleAccount/atomicUniswapAddLiquidity";

import { Request, Response } from "express";
import { RESPONSES, RES_MSG } from "../constant/response";
import { MessageUtil } from "../constant/message";

class controller {
  public getAddress = async (req: Request, res: Response) => {
    try {
      const result = await getAddress();
      return MessageUtil.success(res, {
        status: RESPONSES?.SUCCESS,
        error: false,
        message: RES_MSG?.SUCCESS,
        data: result,
      });
    } catch (error) {
      console.log(error);
      return MessageUtil.error(res, {
        status: RESPONSES?.INTERNALSERVER,
        error: true,
        message: RES_MSG?.INTERNAL_SERVER_ERROR,
      });
    }
  };

  public erc20Transfer = async (req: Request, res: Response) => {
    try {
      const { tkn, t, amt, withPM } = req.body;
      const result = await transfer(tkn, t, amt, withPM);
      return MessageUtil.success(res, {
        status: RESPONSES?.SUCCESS,
        error: false,
        message: RES_MSG?.SUCCESS,
        data: result,
      });
    } catch (error) {
      console.log(error);
      return MessageUtil.error(res, {
        status: RESPONSES?.INTERNALSERVER,
        error: true,
        message: RES_MSG?.INTERNAL_SERVER_ERROR,
      });
    }
  };

  public erc20Approve = async (req: Request, res: Response) => {
    try {
      const { tkn, t, amt, withPM } = req.body;
      const result = await approve(tkn, t, amt, withPM);
      return MessageUtil.success(res, {
        status: RESPONSES?.SUCCESS,
        error: false,
        message: RES_MSG?.SUCCESS,
        data: result
      });
    } catch (error) {
      console.log(error);
      return MessageUtil.error(res, {
        status: RESPONSES?.INTERNALSERVER,
        error: true,
        message: RES_MSG?.INTERNAL_SERVER_ERROR,
      });
    }
  };

  public atomicAddLiquidity = async (req: Request, res: Response) => {
    try {
      const {
        router,
        tokenA,
        tokenB,
        amountADesired,
        amountBDesired,
        amountAMin,
        amountBMin,
        to,
        deadline,
        withPM,
      } = req.body;

      const result = await addLiquidity(
        router,
        tokenA,
        tokenB,
        amountADesired,
        amountBDesired,
        amountAMin,
        amountBMin,
        to,
        deadline,
        withPM
      );
      return MessageUtil.success(res, {
        status: RESPONSES?.SUCCESS,
        error: false,
        message: RES_MSG?.SUCCESS,
        data: result,
      });
    } catch (error) {
      console.log(error);
      return MessageUtil.error(res, {
        status: RESPONSES?.INTERNALSERVER,
        error: true,
        message: RES_MSG?.INTERNAL_SERVER_ERROR,
      });
    }
  };
}

export default new controller();
