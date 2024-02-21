import { ethers } from "hardhat";

async function main() {
  const nft = await ethers.deployContract("EventNft");
  await nft.waitForDeployment();

  const nftEvent = await ethers.deployContract("NftGatedEvent");
  await nftEvent.waitForDeployment();

  console.log(`Contract: EventNFT deployed successfully to ${nft.target}`);
  console.log(`Contract: NFT Gated Event deployed successfully to ${nftEvent.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
