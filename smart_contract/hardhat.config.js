require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  defaultNetwork: 'sepolia',
  networks: {
    hardhat: {
      chainId: 1337
    },
    sepolia:{
      url : process.env.API_URL,
      accounts: [process.env.PRIVATE_KEY]
    }

  }
};
