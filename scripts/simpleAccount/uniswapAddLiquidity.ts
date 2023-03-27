import {
  getVerifyingPaymaster,
  getSimpleAccount,
  getGasFee,
  printOp,
  getHttpRpcClient,
} from "../../src";
import { ROUTER_ABI } from "../../src/UniswapAbi"; 
import { ethers } from "ethers";

import config from "../../config.json";

export default async function main(
  router: string,
  tokenA: string,
  tokenB: string,
  amountADesired: string,
  amountBDesired: string,
  amountAMin: string,
  amountBMin: string,
  to: string,
  deadline: string,
  withPM: boolean
) {
  const provider = new ethers.providers.JsonRpcProvider(config.rpcUrl);

  const paymasterAPI = withPM
    ? getVerifyingPaymaster(config.paymasterUrl, config.entryPoint)
    : undefined;

  const accountAPI = getSimpleAccount(
    provider,
    config.signingKey,
    config.entryPoint,
    config.simpleAccountFactory,
    paymasterAPI
  );
  const uniRouterAddr = ethers.utils.getAddress(router);
  const uniswapRouter = new ethers.Contract(uniRouterAddr, ROUTER_ABI, provider);

  const token1 = ethers.utils.getAddress(tokenA);
  const token2 = ethers.utils.getAddress(tokenB);
  const amount1desired = ethers.utils.parseEther(amountADesired);
  const amount2desired = ethers.utils.parseEther(amountBDesired);
  const amount1min = ethers.utils.parseEther(amountAMin);
  const amount2min = ethers.utils.parseEther(amountBMin);
  const receiver = ethers.utils.getAddress(to);
  const deadlinee = Number(deadline);

  const op = await accountAPI.createSignedUserOp({
    target: uniswapRouter.address,
    data: uniswapRouter.interface.encodeFunctionData("addLiquidity", [token1, token2, amount1desired, amount2desired, amount1min, amount2min, receiver, deadlinee]),
    ...(await getGasFee(provider)),
  });
  console.log(`Signed UserOperation: ${await printOp(op)}`);

  const client = await getHttpRpcClient(
    provider,
    config.bundlerUrl,
    config.entryPoint
  );
  const uoHash = await client.sendUserOpToBundler(op);
  console.log(`UserOpHash: ${uoHash}`);

  console.log("Waiting for transaction...");

  const txHash = await accountAPI.getUserOpReceipt(uoHash);
  console.log(`Transaction hash: ${txHash}`);
}
/*
yarn run simpleAccount uniswapAddLiquidity --router 0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D --tokenA 0x5803D48A7aC1bA1eFD5C2537482F8800B4a64458 --tokenB 0xf53c9007Efc497c545222Efcd45BbB577886C5a5 --amountADesired 100 --amountBDesired 100 --amountAMin 0 --amountBMin 0 --to 0xb28FEA25bb9dD5E1363fDF1b4e80e800B3bAF6d9 --deadline 1975319856
*/