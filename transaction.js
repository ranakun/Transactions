const Tx = require('@ethereumjs/tx').Transaction;
const Web3 = require('web3');
const web3 = new Web3('HTTP://127.0.0.1:8545');

// function createAndSendTransaction(
//     from,
//     to,
//     value,
//     // gas,
//     // gasPrice = web3.eth.getGasPrice(),
//     // nonce = web3.eth.getTransactionCount(from)
//     ){
//         try{
//     const trObj = { 
//         from: from,
//         to: to,
//         value: web3.utils.toWei('1','ether'),
//         // gasLimit: 21000,
//         // gasPrice: web3.utils.toWei('10','gwei'),
//         nonce: 0
//     }
//     web3.eth.sendTransaction(trObj,(err,txHash)=> {
//         console.log('txHash: ',txHash)
//     })
//     }
//     catch (err) {
//         console.log(err);
//       }
// }

// createAndSendTransaction("0x2eC1E0707abF593C9958b0d578fc42E96d45871d","0x2473e23dEE4c248325fB242238B72CAe070Ebcf8")


const accountFrom = {
    privateKey: '26ce36cfc1af082424daafed50bb10bff166e8be319460625c05908e6b279770',
    address: '0x1c1A318DB3DB880AEfAea9cAc84A203B7b8E7462',
  };
  const addressTo = '0xCB68CE0fF0F3CC0E33cb0229E98D645aA87dD796'; // Change addressTo
  
  // 3. Create send function
  const send = async () => {
    console.log(`Attempting to send transaction from ${accountFrom.address} to ${addressTo}`);
  
    // 4. Sign tx with PK
    const createTransaction = await web3.eth.accounts.signTransaction(
      {
        gas: 21000,
        to: addressTo,
        value: web3.utils.toWei('1', 'ether'),
      },
      accountFrom.privateKey
    );
  
    // 5. Send tx and wait for receipt
    const createReceipt = await web3.eth.sendSignedTransaction(createTransaction.rawTransaction);
    console.log(`Transaction successful with hash: ${createReceipt.transactionHash}`);
  };
  
  // 6. Call send function
  send();