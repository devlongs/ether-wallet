import { ethers } from "hardhat";

// CONTRACT DEPLOYED TO GOERLI TESTNET: 0x9E34ae907dAbfAa86eAD074CA04FfAe059940Af8

async function main() {
  const EtherWallet = await ethers.getContractFactory("EtherWallet");
  const etherWallet = EtherWallet.attach(
    "0x9E34ae907dAbfAa86eAD074CA04FfAe059940Af8"
  );

  //   const sendEther = await etherWallet.deposit({ value: "100" });
  //   console.log("Deposit ether tx receipt: ", sendEther);

  const withdrawFund = await etherWallet.withdraw("100");
  console.log(withdrawFund);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
