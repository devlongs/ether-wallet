import { ethers } from "hardhat";

async function main() {
  const EtherWallet = await ethers.getContractFactory("EtherWallet");
  const etherWallet = await EtherWallet.deploy();

  await etherWallet.deployed();

  console.log(`EtherWallet is deployed to ${etherWallet.address}`); //0x9E34ae907dAbfAa86eAD074CA04FfAe059940Af8
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
