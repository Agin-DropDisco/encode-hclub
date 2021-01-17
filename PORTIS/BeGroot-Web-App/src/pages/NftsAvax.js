const ContentNFT = [
  
  {
    hds: "Install and run an Avalanche node",
    hdsAT1: "$ go get -v -d github.com/ava-labs/avalanchego/...",
    hdsAT2: "$ cd $GOPATH/src/github.com/ava-labs/avalanchego",
    hdsAT3: "$ ./scripts/build.sh",
    hds2: "Start node & Connecting to Fuji (optional)",
    hds2AT1: "$ ./build/avalanchego --network-id=fuji",
    hds3: "Create Keystore",
    hds3AT1: `$ curl -X POST --data '{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "keystore.createUser",
    "params": {
    "username": "The_Weird_Brother",
    "password": "127.0.0.1:9650/ext/keystore"}
    }' -H 'content-type:application/json;' 127.0.0.1:9650/ext/keystore`,
    hds4: "Create Address",
    hds4AT1: `$ curl -X POST --data '{
    "jsonrpc":"2.0",
    "id"     :2,
    "method" :"avm.createAddress",
    "params" :{
    "username": "The_Weird_Brother",
    "password": "127.0.0.1:9650/ext/keystore"}
    }' -H 'content-type:application/json;' 127.0.0.1:9650/ext/bc/X`,
    hds5: "Check the list of address that we made",
    hds5AT1: ` $ curl -X POST --data '{
    "jsonrpc": "2.0",
    "method": "platform.listAddresses",
    "params": {
    "username": "The_Weird_Brother",
    "password": "127.0.0.1:9650/ext/keystore"},
    "id": 1 }'  -H 'content-type:application/json;' 127.0.0.1:9650/ext/P`,
    hds6: "Send Funds Via Ava Wallet & Faucet",
    hds6AT1: "|| go to the: https://wallet.avax.network",
    hds6AT2: "|| Faucet: https://faucet.avax-test.network",
    hds6AT3: "|| Store Some Funds to Our Node",
    termOne: "First Terminal",
    termTwo: "Second Terminal",
    user: "Like What You See ?",
    userProfile: "https://raw.githubusercontent.com/Agin-DropDisco/encode-hclub/main/PORTIS/groot.webp",
  },
  {
    hds: "Create the NFT Asset",
    hdsAT1: `$ curl -X POST --data '{
    "jsonrpc":"2.0",
    "id"     :1,
    "method" :"avm.createNFTAsset",
    "params" :{
    "name":"WeirdBrotherFams",
    "symbol":"WBFA",
    "minterSets":[{"minters": [
    "X-fuji1r94e3a9vxz03mknqv9k0yg24hgr596svfpj3xx" ],
    "threshold": 1 }],
    "username": "The_Weird_Brother",
    "password": "127.0.0.1:9650/ext/keystore"}
    }' -H 'content-type:application/json;' 127.0.0.1:9650/ext/bc/X`,
    hdsAT2: "",
    hdsAT3: "",
    hds2: "Get UTXOs for NFT",
    hds2AT1: `$ curl -X POST --data '{
    "jsonrpc":"2.0",
    "id"     : 1,
    "method" :"avm.getUTXOs",
    "params" :{
    "addresses":["X-fuji1r94e3a9vxz03mknqv9k0yg24hgr596svfpj3xx"]}
    }' -H 'content-type:application/json;' 127.0.0.1:9650/ext/bc/X`,
    hds3: "Mint the Asset",
    hds3AT1: `$ curl -X POST --data '{
    "jsonrpc":"2.0",
    "id"     : 1,
    "method" :"avm.mintNFT",
    "params" :{
    "assetID":"uVjfX2icQ9gYBSa5izxzWPfTcYNfn3qagJNy3BukEGf6YxvLv",
    "payload":"2EWh72jYQvEJF9NLk", 
    "to":"X-fuji1r94e3a9vxz03mknqv9k0yg24hgr596svfpj3xx",
    "username": "The_Weird_Brother",
    "password": "127.0.0.1:9650/ext/keystore"}
    }' -H 'content-type:application/json;' 127.0.0.1:9650/ext/bc/X`,
    hds4: "Check NFT Status (UTXOs)",
    hds4AT1: `$ curl -X POST --data '{
    "jsonrpc":"2.0",
    "id"     : 1,
    "method" :"avm.getUTXOs",
    "params" :{
    "addresses":["X-fuji1r94e3a9vxz03mknqv9k0yg24hgr596svfpj3xx"]}
    }' -H 'content-type:application/json;' 127.0.0.1:9650/ext/bc/X`,
    hds5: "Send NFT Asset",
    hds5AT1: `curl -X POST --data '{
    "jsonrpc":"2.0",
    "id"     :1,
    "method" :"avm.sendNFT",
    "params" :{
    "assetID" :"2GiMTvR7jL16EF7Z4ygVSKtd7AmnczpRjfGVFtsGYwfhdzEf1G",
    "to"      :"X-fuji1r94e3a9vxz03mknqv9k0yg24hgr596svfpj3xx",
    "groupID" : 0,
    "username": "The_Weird_Brother",
    "password": "127.0.0.1:9650/ext/keystore"}
    }' -H 'content-type:application/json;' 127.0.0.1:9650/ext/bc/X`,
    hds6: "FINAL RESULT",
    hds6AT1: `•> Response 
    { "jsonrpc":"2.0","result":{
    "txID":"26fnFn7n6LYzZgicybYNKddYJ5Zd4LCrWiy3bNhqCJwZCg7Kbh",
    "changeAddr":"X-fuji1448xtwm3mp23ckdd9u7wuxrd5a5aqpjkmye2uk"},"id":1}`,
    hds6AT2: " == DONE == ",
    hds6AT3: "",
    termOne: "Second Terminal",
    termTwo: "Second Terminal",
    user: "Like What You See ?",
    userProfile: "https://raw.githubusercontent.com/Agin-DropDisco/encode-hclub/main/PORTIS/groot.webp",
  },
];
export  default ContentNFT;