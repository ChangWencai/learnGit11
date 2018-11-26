var Web3 = require('web3');

var web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'));


var abi = '[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"initialSupply","type":"uint256"},{"name":"tokenName","type":"string"},{"name":"tokenSymbol","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"}]';

// 实例化合约
var MyContract = new web3.eth.Contract(JSON.parse(abi),'0xe4044e690b761805504692db2d06bc886cd263e9');


/*
MyContract.methods.name().call({from:'0x7860E5c80069B94b8705D4c761947bfbF7A09F50'},function (err,result) {
    if(err){
        console.error(err)
    }
    console.log(result);
});


MyContract.methods.balanceOf("0x7860E5c80069B94b8705D4c761947bfbF7A09F50").call({from:'0x7860E5c80069B94b8705D4c761947bfbF7A09F50'},function (err,result) {
    if(err){
        console.error(err)
    }
    console.log(result/10**18);
});

MyContract.methods.totalSupply().call({from:'0x7860E5c80069B94b8705D4c761947bfbF7A09F50'},function (err,result) {
    if(err){
        console.error(err)
    }
    console.log(result/10**18);
});


MyContract.methods.transfer('0x5762fF7a642B447f5Ab2E6C1743D0E89b3Dfe51d',1000).send(
    {   from:'0x7860E5c80069B94b8705D4c761947bfbF7A09F50',
        value:0,
        gasPrice:2*10**9,
        gasLimit:300000
    },
    function (err,result) {
        if(err){
            console.error(err)
        }
        console.log("TXhash: "+ result)
    }
);
*/

// web3.eth.getTransaction('0x529aab0944e2ff5aae95e198828bcb93702666a7aaedbea7129dd3fc3fc72b8b',function (err,data) {
//     if (err){
//         console.error(err)
//     }
//     console.log(data)
// });

web3.eth.getTransactionReceipt('0x529aab0944e2ff5aae95e198828bcb93702666a7aaedbea7129dd3fc3fc72b8b',function (err,data) {
    if (err){
        console.error(err)
    }
    console.log(data['logs'])
    // data.forEach(element,index){
    //
    // }
});