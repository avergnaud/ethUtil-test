// exécuter babel-node src/test.js
//import ethUtil from 'ethereumjs-util';
ethUtil = require('ethereumjs-util')

// INPUT
const signature = "0x51473c27def5921f18dfefb9dbb95f315f38f75a7b36b1f09f8b28d3f67cefdb3f5938e5e5c53f8ed4887995e85f476f5710d3b110453de4b624c7a0761b57481b"
const publicAddress = "0xd2e42398e63a9c638444087b3d1e76c3cf1508fa"
const msg = "I am signing my one-time nonce: 4246"

console.log(publicAddress)

// msgHash
const msgBuffer = ethUtil.toBuffer(msg);
const msgHash = ethUtil.hashPersonalMessage(msgBuffer);

// signatureParams
const signatureBuffer = ethUtil.toBuffer(signature);
const signatureParams = ethUtil.fromRpcSig(signatureBuffer);

// clé publique
const publicKey = ethUtil.ecrecover(
    msgHash,
    signatureParams.v,
    signatureParams.r,
    signatureParams.s
  );

// adresse reconstituée
const addressBuffer = ethUtil.publicToAddress(publicKey);
const address = ethUtil.bufferToHex(addressBuffer);

console.log(address)