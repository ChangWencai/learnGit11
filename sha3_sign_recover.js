
var Web3 = require('web3');

var web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:8545'));


/// gasrice 交易发送gas的价格
// 获取当前区块gasPrice的平均值
// web3.eth.getGasPrice(function(error, result){
//     if (error){
//         console.error(error)
//     }
//     console.log(result)
// });

// 获取用户地址列表
//  console.log(web3.eth.accounts);

// web3.eth.getAccounts(function(error, result){
//     if (error){
//         console.error(error)
//     }
//     console.log(result)
// });


// 获取账户列表
web3.eth.getAccounts( function (err,result){
    if (err){
        console.log(err)
    }
    result.forEach(function (addr,index) {
        // console.log(addr +" "+ index )
        web3.eth.getBalance( addr, function (err, bala) {
            if (err){
                console.log(err)
            }
            console.log(index+ ' 地址：'+addr+ "  balance: "+ bala/(10**18) + ' ether');
        });
    })
});


// web3.eth.getStorageAt('0x5762fF7a642B447f5Ab2E6C1743D0E89b3Dfe51d', 0, function (err,result) {
//     if (err) {
//         console.error(err)
//     }
//     console.log(result)
// });


// var code = "603d80600c6000396000f3007c01000000000000000000000000000000000000000000000000000000006000350463c6888fa18114602d57005b6007600435028060005260206000f3";
// web3.eth.sendTransaction({data: code, from:'0x7860E5c80069B94b8705D4c761947bfbF7A09F50'}, function(err, transactionHash) {
//     if (!err)
//         console.log(transactionHash); // "0x7f9fade1c0d57a7af66ab4ead7c2eb7b11a91385"
// });


// web3.eth.getCode("0xe4044e690b761805504692db2d06bc886cd263e9",function (err,data) {
//     if (err) {
//         console.log(err)
//     }
//     console.log(data)
// });



// web3.eth.getBlock(1 ,function (err,data) {
//     if (err){
//         console.error(err)
//     }
//     console.log(data)
// });


// web3.eth.getBlockTransactionCount(1, function (err,data) {
//         if (err){
//         console.error(err)
//     }
//     console.log(data)
// });


// web3.eth.getTransaction('0x7b8069a509fc650d2d3ca257cb4a86723f0729ae4767fef95140373b86273847',function (err,data) {
//     if (err){
//         console.error(err)
//     }
//     console.log(data)
// });
//
// web3.eth.getTransactionFromBlock(1,function (err,data) {
//     if (err){
//         console.error(err)
//     }
//     console.log(data)
// });


// web3.eth.getTransactionReceipt('0x6d293bd5c49d516ee66d7f582b3d7856861e44931d874153c11ca28f05a2a268',function (err,data) {
//     if (err){
//         console.error(err)
//     }
//     console.log(data)
// });

// web3.eth.getTransactionCount("0x7860E5c80069B94b8705D4c761947bfbF7A09F50",function (err,data) {
//     if (err){
//         console.error(err)
//     }
//     console.log(data)
// });

web3.eth.sendTransaction({from:"0x092446D06813878B063eBD5165d86b6D5C63ABF9",to:'0xDeA466e733D2B647FB90fD719D78E321BDa74753',value:10*10**18,gasPrice:2*10**9},function (err,TXhash) {
    if (err){
        console.error(err)
    }
    console.log(TXhash)
});



// console.log(web3.eth.accounts.sign("some data",
//     "70d5b7633d9edf483dc33a69e875ab1ad755266110ea9a02a70575732e26d956"));

//
// web3.eth.call({
//     to: "0xe4044e690b761805504692db2d06bc886cd263e9",
//     data: "0xc6888fa10000000000000000000000000000000000000000000000000000000000000003"},function (err, data) {
//     if (err){
//         console.error(err)
//     }
//     console.log(data)
// });


// web3.eth.estimateGas({
//     to: "0xe4044e690b761805504692db2d06bc886cd263e9",
//     data: "0xc6888fa10000000000000000000000000000000000000000000000000000000000000003"},function (err, data) {
//     if (err){
//         console.error(err)
//     }
//     console.log(data)
// });

