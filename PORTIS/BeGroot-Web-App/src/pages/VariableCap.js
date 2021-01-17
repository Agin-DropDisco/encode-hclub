const ContentVarCA = [

  {
    bigTitle: "On this section we will learn how to created Variable Cap Asset",
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
    "password": "127.0.0.1:9650/ext/keystore" } 
  }' -H 'content-type:application/json;' 127.0.0.1:9650/ext/keystore`,
    hds4: "Create Address",
    hds4AT1:`$ curl -X POST --data '{
    "jsonrpc":"2.0",
    "id"     :2,
    "method" :"avm.createAddress",
    "params" :{
    "username": "The_Weird_Brother",
     "password": "127.0.0.1:9650/ext/keystore" }
    }' -H 'content-type:application/json;' 127.0.0.1:9650/ext/bc/X
  `,
    hds5: "Check the list of address that we made",
    hds5AT1:`$ curl -X POST --data '{
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
    userProfile: "https://raw.githubusercontent.com/Agin-DropDisco/encode-hclub/main/PORTIS/groot.webp"
  },
  {
    bigTitle: "",
    hds: "Create the Asset",
    hdsAT1:`$ curl -X POST --data '{
    "jsonrpc":"2.0",
    "id"     : 1,
    "method" :"avm.createVariableCapAsset",
    "params" :{
    "name":"WeirdBrother CA",
    "symbol":"WBCA",
    "minterSets":[ {
    "minters": [
    "X-fuji1yfk8e6vh82llz8fzcqk6yrm5sk0tkyq2u0ef32"],
    "threshold": 1 },
    {
    "minters": [
    "X-fuji1q8ye8mur7n6qlyfprtj9kgqj4egvjtkvwgm5gg",
    "X-fuji19l6c0z3thxghrh0x5dd8xt0gjly73frefnh2qa",
    "X-fuji1qhu4l7uh9qtlkjhcd9yyx3344f9ewd9c7rx66d"],
    "threshold": 2 }
    ],
    "from":["X-fuji1a2rjn68zf7tp62fprv08eh5kvcgl037ustfsz0"],
    "changeAddr":"X-fuji1qjg5dke53036483saqeezx85uf8czu6pjxkz6w",
    "username": "The_Weird_Brother",
    "password": "127.0.0.1:9650/ext/keystore" }
    }' -H 'content-type:application/json;' 127.0.0.1:9650/ext/bc/X`,
    hdsAT2: "",
    hdsAT3: "|| Make sure we can control the to: address ||",
    hds2: "send some WBCA [WeirdBrother CA] balances)",
    hds2AT1:`$ curl -X POST --data '{
    "jsonrpc":"2.0",
    "id"     : 1,
    "method" :"avm.mint",
    "params" :{
    "amount":7777777,
    "assetID":"QmLHE7yzhLtNM8AWrvNQVrzzQJoyxcZb3PHg1EAshGA94gQ12",
    "to":"X-fuji1a2rjn68zf7tp62fprv08eh5kvcgl037ustfsz0",
    "username": "The_Weird_Brother",
     "password": "127.0.0.1:9650/ext/keystore" }
    }' -H 'content-type:application/json;' 127.0.0.1:9650/ext/bc/X`,
    hds3: "Check Status Balance",
    hds3AT1:`$ curl -X POST --data '{
    "jsonrpc":"2.0",
    "id"     : 1,
    "method" :"avm.getTxStatus",
    "params" :{
    "txID":"PBwYK4c6U8uCNUtF6VPJgBYspJWBVpuE7jU1NWSoGVqeSyKYF"}
    }' -H 'content-type:application/json;' 127.0.0.1:9650/ext/bc/X`,
    hds4: "Check Balance of the to: Address",
    hds4AT1:`$ curl -X POST --data '{
    "jsonrpc":"2.0",
    "id"     :1,
    "method" :"avm.getBalance",
    "params" :{
    "address":"X-fuji1a2rjn68zf7tp62fprv08eh5kvcgl037ustfsz0",
    "assetID":"QmLHE7yzhLtNM8AWrvNQVrzzQJoyxcZb3PHg1EAshGA94gQ12"}
    }' -H 'content-type:application/json;' 127.0.0.1:9650/ext/bc/X`,
    hds5: "Send The Asset to Another Address ",
    hds5AT1:`$ curl -X POST --data '{
    "jsonrpc":"2.0",
    "id"     :1,
    "method" :"avm.send",
    "params" :{
    "username": "The_Weird_Brother",
    "password": "127.0.0.1:9650/ext/keystore",
    "assetID" :"QmLHE7yzhLtNM8AWrvNQVrzzQJoyxcZb3PHg1EAshGA94gQ12",
    "amount"  : 555,
    "to"      :"X-fuji1cezp7kvqefvdewlksqvv3klk743hpstjqv465g"}
    }' -H 'content-type:application/json;' 127.0.0.1:9650/ext/bc/X`,
    hds6: "FINAL RESULT",
    hds6AT1:`{"jsonrpc":"2.0","result":{"balance":"555","utxoIDs":[{
    "txID":"nFvJ9ioWZF2W3jaypGBRasirBaaeniDSeQ3WEubhJbeadn7eZ","outputIndex":0}]},"id":1}`,
    hds6AT2: "== DONE ==",
    hds6AT3: "",
    termOne: "Second Terminal",
    termTwo: "Second Terminal",
    user: "Like What You See ?",
    userProfile: "https://raw.githubusercontent.com/Agin-DropDisco/encode-hclub/main/PORTIS/groot.webp"

  },

];
export default ContentVarCA;
