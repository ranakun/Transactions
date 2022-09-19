const Tx = require('@ethereumjs/tx').Transaction;
const Web3 = require('web3');
const web3 = new Web3('HTTP://127.0.0.1:7545');

function createAndSendTransaction(
    from,
    to,
    value,
    gas,
    gasPrice = web3.eth.getGasPrice(),
    nonce = web3.eth.getTransactionCount(from)
    ){
        try{
    const trObj = { 
        from: from,
        to: to,
        value: web3.utils.toWei('1','ether'),
        gasLimit: 21000,
        gasPrice: web3.utils.toWei('10','gwei'),
        nonce: 3  
    }
    web3.eth.sendTransaction(trObj,(err,txHash)=> {
        console.log('txHash: ',txHash)
    })
    }
    catch (err) {
        console.log(err);
      }
}

createAndSendTransaction("0xD2AcF220f2380a53DE12881480e0fc3b280838A7","0x9823B6Dc3Ce8D45d4fB2D2c71AB8b7d16f467783")