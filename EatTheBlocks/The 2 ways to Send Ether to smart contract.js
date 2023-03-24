/** 2 ways to send ether to SM
 * 1. Execute a function of our SM
 * 2. Send ehter directly
 */

/** FIRST APPROACH */
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

  await contract.methods.sendEther().send({
    from: addresses[0], // in real case, user's wallet address
    value: "10000",
  });

  console.log(
    "await contract.methods. :>> ",
    await contract.methods.functionCalled().call()
  );
};

// fallback function = if you send transaction to the SM without specifying a function
/** SECOND APPRAOCH */

const init1 = async () => {
  await web3.eth.sendTransaction({
    from: addresses[0],
    to: contract.options.address,
    value: "100000",
  });
};
