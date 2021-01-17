const ContentCFCA = [
  {
    hds:"Install and run an Avalanche node",
    hdsAT1:"$ go get -v -d github.com/ava-labs/avalanchego/...",
    hdsAT2:"$ cd $GOPATH/src/github.com/ava-labs/avalanchego",
    hdsAT3:"$ ./scripts/build.sh",
    hds2:"Start node & Connecting to Fuji (optional)",
    hds2AT1: "$ ./build/avalanchego --network-id=fuji",
    hds3: "Create Keystore",
    hds3AT1:`$ curl -X POST --data '{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "keystore.createUser",
    "params": {
    "username": "The_Weird_Brother",
    "password": "127.0.0.1:9650/ext/keystore"}
    }' -H 'content-type:application/json;' 127.0.0.1:9650/ext/keystore`,
    hds4: "Create Address",
    hds4AT1:`$ curl -X POST --data '{
    "jsonrpc":"2.0",
    "id"     :2,
    "method" :"avm.createAddress",
    "params" :{
    "username": "The_Weird_Brother",
    "password": "127.0.0.1:9650/ext/keystore"}
    }' -H 'content-type:application/json;' 127.0.0.1:9650/ext/bc/X`,
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
    userProfile: "https://raw.githubusercontent.com/Agin-DropDisco/encode-hclub/main/PORTIS/groot.webp",
  },
  {
    hds: "Create the Asset",
    hdsAT1:`$ curl -X POST --data '{
    "jsonrpc":"2.0",
    "id"     : 1,
    "method" :"avm.createFixedCapAsset",
    "params" :{
    "name": "WEIRD Brother",
    "symbol":"WIBO",
    "denomination": 0,
    "initialHolders": [
    {
    "address": "X-fuji1448xtwm3mp23ckdd9u7wuxrd5a5aqpjkmye2uk",
    "amount": 23232323232}],
    "from":["X-fuji1ma4eae2w9p6r3d7xwyl0z3ch2e950sup4v38r8"],
    "changeAddr":"X-fuji12mf4eytshkj3fvz9wnntyx8dp6g92ctkp0gkam",
    "username": "The_Weird_Brother",
    "password": "127.0.0.1:9650/ext/keystore"}
    }' -H 'content-type:application/json;' 127.0.0.1:9650/ext/bc/X`,
    hdsAT2: "",
    hdsAT3: "",
    hds2: "Check Balance",
    hds2AT1:`$ curl -X POST --data '{
    "jsonrpc":"2.0",
    "id"     :1,
    "method" :"avm.getBalance",
    "params" :{
    "address":"X-fuji1448xtwm3mp23ckdd9u7wuxrd5a5aqpjkmye2uk",
    "assetID":"Fv3diDMhP4nFaPxUhQXkayVqKbzgVa8ks9KAz3qCyLgwRmxjF"}
    }' -H 'content-type:application/json;' 127.0.0.1:9650/ext/bc/X`,
    hds3: "Send the Asset",
    hds3AT1:`$  curl -X POST --data '{
    "jsonrpc":"2.0",
    "id"     :1,
    "method" :"avm.send",
    "params" :{
    "username": "The_Weird_Brother",
    "password": "127.0.0.1:9650/ext/keystore",
    "assetID" :"Fv3diDMhP4nFaPxUhQXkayVqKbzgVa8ks9KAz3qCyLgwRmxjF",
    "amount"  :777,
    "to"      :"X-fuji1ds7436xy6xuuehv7tjmt4x7gld5rl23k7pm920"}
    }' -H 'content-type:application/json;' 127.0.0.1:9650/ext/bc/X`,
    hds4: "Check Transaction Status",
    hds4AT1: `$ curl -X POST --data '{
    "jsonrpc":"2.0",
    "id"     :1,
    "method" :"avm.getTxStatus",
    "params" :{
    "txID":"uMeKJU25XxY6wzJfzvoaf3HpW2sxRtVbQ1ms1grF2371LQCay"}
    }' -H 'content-type:application/json;' 127.0.0.1:9650/ext/bc/X `,
    hds5: "Check Balance of the <to>: Address",
    hds5AT1: `$ curl -X POST --data '{
    "jsonrpc":"2.0",
    "id"     :1,
    "method" :"avm.getBalance",
    "params" :{
    "address":"X-fuji1ds7436xy6xuuehv7tjmt4x7gld5rl23k7pm920",
    "assetID":"Fv3diDMhP4nFaPxUhQXkayVqKbzgVa8ks9KAz3qCyLgwRmxjF"}
    }' -H 'content-type:application/json;' 127.0.0.1:9650/ext/bc/X`,
    hds6: "FINAL RESULT",
    hds6AT1: `•> Response {"jsonrpc":"2.0","result":{"balance":"777","utxoIDs":[{"txID":"uMeKJU25XxY6wzJfzvoaf3HpW2sxRtVbQ1ms1grF2371LQCay","outputIndex":0}]},"id":1} `,
    hds6AT2: " == DONE == ",
    hds6AT3: "",
    termOne: "Second Terminal",
    termTwo: "Second Terminal",
    user: "Like What You See ?",
    userProfile: "https://raw.githubusercontent.com/Agin-DropDisco/encode-hclub/main/PORTIS/groot.webp",
  },
];
export default ContentCFCA;
