const hre = require("hardhat");

async function main() {

  const SuperNovaNFT = await hre.ethers.getContractFactory("SuperNovaNFT");
  const superNovaNFT = await SuperNovaNFT.deploy();

  await superNovaNFT.deployed();

  console.log("SuperNovaNFT deployed to:", superNovaNFT.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
