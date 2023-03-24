const Web3 = require("web3");
const web3 = new Web3("http://localhost:8545");
const MyContact = require("./builds/comntracts/MyContact.json");

const init = async () => {
  // network id where we deployed our smart contract
  const id = await web3.eth.net.getId();
  const deployedNetwork = MyContact.networks[id];
  // create a contract instance
  const contract = new web3.eth.Contract(
    MyContact.abi,
    deployedNetwork.address
  );
  const addresses = await web3.eth.getAccounts();

  /** receipt is the confirmation from the blockchain network that your transaction is received by the blockchain and being processed */

  /** NOTE: success does not mean that your transaction is completed. It's just means that your transaction has been received successfully. */
  const receipt = await contract.methods.setData(10).send({
    from: addresses[0], // in real case, user's wallet address
  });

  console.log("receipt :>> ", receipt);

  /** transactionHash in receipt = uniquely identify your transaction on the network  */

  const data = await contract.methods.getData().call();
  console.log("data :>> ", data);
};

init();
