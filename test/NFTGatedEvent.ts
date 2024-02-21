import {loadFixture,} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import {ethers} from "hardhat";

describe("Lock", function () {
    // We define a fixture to reuse the same setup in every test.
    // We use loadFixture to run this setup once, snapshot that state,
    // and reset Hardhat Network to that snapshot in every test.
    async function deployNFTGatedEventContract() {

        // Contracts are deployed using the first signer/account by default
        const [owner, otherAccount] = await ethers.getSigners();

        const NFT = await ethers.getContractFactory("EventNft");
        const nft = await NFT.deploy();

        const NftEvent = await ethers.getContractFactory("NftGatedEvent");
        const nftEvent = await NftEvent.deploy(nft.target);

        return {owner, nft, nftEvent, otherAccount};
    }

    describe("Deployment", function () {
        it("Should set the right unlockTime", async function () {
            const {
                owner,
                nft,
                nftEvent,
                otherAccount
            } = await loadFixture(deployNFTGatedEventContract);

        });

    });
});
