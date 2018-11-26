const Web3 = require("web3");
import Helper from "./helper.js";

console.log("Blockathon~ ");

Helper.helperTest();

if (typeof web3 !== "undefined") {
  web3 = new Web3(web3.currentProvider);
} else {
  // set the provider you want from Web3.providers
  web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:5500/"));
}

let hash = web3.sha3("Some string to be hashed");
console.log(hash);
