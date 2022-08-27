import { ethers } from "hardhat";

// CONTRACT DEPLOYED TO GOERLI TESTNET:

async function main() {
  const EtherWallet = await ethers.getContractFactory("EtherWallet");
  const etherWallet = EtherWallet.attach("");

  const sendEther = await etherWallet.deposit(0);
  console.log("Deposit ether tx receipt: ", sendEther);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
