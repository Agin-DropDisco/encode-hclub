const ContentSubBlockAvax = [
  {
    hds: "Install and run Avash node",
    hdsAT1: "$ cd $GOPATH/src/github.com/ava-labs/avash",
    hdsAT2: "$ ./avash",
    hdsAT3: "",
    hds2: "Start node & Connecting to Five node",
    hds2AT1: "$ runscript scripts/five_node_staking.lua",
    hds3: "Create Keystore",
    hds3AT1: `$ curl -X POST --data '{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "keystore.createUser",
    "params": {
    "username": "BrotherSub",
    "password": "127.0.0.1:9650/ext/keystore" }
  }' -H 'content-type:application/json;' 127.0.0.1:9650/ext/keystore`,
    hds4: "Create Address",
    hds4AT1: `$ curl -X POST --data '{
    "jsonrpc": "2.0",
    "method": "platform.createAddress",
    "params": {
    "username": "BrotherSub",
    "password": "127.0.0.1:9650/ext/keystore"},
    "id": 1}' -H 'content-type:application/json;' 127.0.0.1:9650/ext/P`,
    hds5: "Check the list of address that we made",
    hds5AT1: `$ curl -X POST --data '{
    "jsonrpc": "2.0",
    "method": "platform.listAddresses",
    "params": {
    "username": "BrotherSub",
    "password": "127.0.0.1:9650/ext/keystore"},
    "id": 1 }'  -H 'content-type:application/json;' 127.0.0.1:9650/ext/P`,
    hds6: "Import Pre-Funded",
    hds6AT1: "<Method> || platform.importKey ||",
    hds6AT2: "",
    hds6AT3: "",
    termOne: "First Terminal",
    termTwo: "Second Terminal",
    user: "Like What You See ?",
    userProfile: "https://raw.githubusercontent.com/Agin-DropDisco/encode-hclub/main/PORTIS/groot.webp",
  },
  {
    hds: "Create Subnet",
    hdsAT1: `$ curl -X POST --data '{
    "jsonrpc": "2.0",
    "method": "platform.createSubnet",
    "params": {
    "controlKeys":[
    "P-local1dyqadxr74wgpvwc7aa22gav4pf3vmsael9ghkc",
    "P-local1vxx0a0tw8hc5ta3lr68ttmpeekdheph3ecpxc4"],
    "threshold":2,
    "username": "BrotherSub",
    "password": "127.0.0.1:9650/ext/keystore"},
    "id": 1}' -H 'content-type:application/json;' 127.0.0.1:9650/ext/P`,
    hdsAT2: "Get all existing subnets",
    hdsAT3: `$ curl -X POST --data '{
    "jsonrpc": "2.0",
    "method": "platform.getSubnets",
    "params": {},
    "id": 1}' -H 'content-type:application/json;' 127.0.0.1:9650/ext/P`,
    hds2: "",
    hds2AT1:"",
    hds3: "Check info of the Subnets by First <ids>",
    hds3AT1: `$ curl -X POST --data '{
    "jsonrpc": "2.0",
    "method": "platform.getSubnets",
    "params": {"ids":["2eqXqSYXRKHM5yUXbRGBiJLogiNzXR4Ka9L9sfCvCfY9j8h4CY"]},
    "id": 1}' -H 'content-type:application/json;' 127.0.0.1:9650/ext/P`,
    hds4: "Check info of the Subnets by Second <ids>",
    hds4AT1: `$ curl -X POST --data '{
    "jsonrpc": "2.0",
    "method": "platform.getSubnets",
    "params": {"ids":["11111111111111111111111111111111LpoYY"]},
    "id": 1}' -H 'content-type:application/json;' 127.0.0.1:9650/ext/P`,
    hds5: "Add a Validator with API calls",
    hds5AT1: `$ curl -X POST --data '{
    "jsonrpc":"2.0",
    "id"     :1,
    "method" :"info.getNodeID"}' -H 'content-type:application/json;' 127.0.0.1:9650/ext/info`,
    hds6: "Add Validator",
    hds6AT1: "<Method> || platform.addValidator ||",
    hds6AT2: "",
    hds6AT3: "",
    termOne: "Second Terminal",
    termTwo: "Second Terminal",
    user: "Like What You See ?",
    userProfile: "https://raw.githubusercontent.com/Agin-DropDisco/encode-hclub/main/PORTIS/groot.webp",
  },
  {
    hds: "Add Validator",
    hdsAT1: `$ curl -X POST --data '{
    "jsonrpc": "2.0",
    "method": "platform.addValidator",
    "params": {
    "nodeID":"NodeID-7Xhw2mDxuDS44j42TCB6U5579esbSt3Lg",
    "startTime":'$(date --date="10 minutes" +%s)',
    "endTime":'$(date --date="30 days" +%s)',
    "stakeAmount":2000000000000,
    "rewardAddress": "P-local1vdvu5wmfgzuk7pgdexx4hsf549lkvjwr3qxw0m",
    "changeAddr": "P-local1fsdyaqhdwefn6dn3y8m6v6grsptc7jyl3hxp8v",
    "delegationFeeRate":10,
    "username": "BrotherSub",
    "password": "127.0.0.1:9650/ext/keystore"},
    "id": 1}' -H 'content-type:application/json;' 127.0.0.1:9650/ext/P`,
    hdsAT2: "Adding a Subnet to Validator",
    hdsAT3: `$ curl -X POST --data '{
    "jsonrpc": "2.0",
    "method": "platform.addSubnetValidator",
    "params": {
    "nodeID":"NodeID-7Xhw2mDxuDS44j42TCB6U5579esbSt3Lg",
    "subnetID":"2eqXqSYXRKHM5yUXbRGBiJLogiNzXR4Ka9L9sfCvCfY9j8h4CY",
    "startTime":'$(date --date="10 minutes" +%s)',
    "endTime":'$(date --date="30 days" +%s)',
    "weight":1,
    "changeAddr": "P-local1fsdyaqhdwefn6dn3y8m6v6grsptc7jyl3hxp8v",
    "username": "BrotherSub",
    "password": "127.0.0.1:9650/ext/keystore" },
    "id": 1 }' -H 'content-type:application/json;' 127.0.0.1:9650/ext/P`,
    hds2: "",
    hds2AT1:"",
    hds3: "Get tx status",
    hds3AT1: `curl -X POST --data '{
    "jsonrpc": "2.0",
    "method": "platform.getTxStatus",
    "params": {
    "txID":"xtC8yziuZXo6bzNuVbnAmTWYkoPqEs4BxMvsLW8nJ9beqmNc9"
    },"id": 1}' -H 'content-type:application/json;' 127.0.0.1:9650/ext/P`,
    hds4: "•> Response",
    hds4AT1: `{"jsonrpc":"2.0","result":"Committed","id":1}`,
    hds5: "Check Validator",
    hds5AT1: `$curl -X POST --data '{
    "jsonrpc": "2.0",
    "method": "platform.getPendingValidators",
    "params": {"subnetID":"2eqXqSYXRKHM5yUXbRGBiJLogiNzXR4Ka9L9sfCvCfY9j8h4CY"},
    "id": 1}' -H 'content-type:application/json;' 127.0.0.1:9650/ext/P`,
    hds6: "Create / Build Genesis",
    hds6AT1: "<Method> || avm.buildGenesis || platform.buildGenesis ",
    hds6AT2: "",
    hds6AT3: "",
    termOne: "Second Terminal",
    termTwo: "Second Terminal",
    user: "Like What You See ?",
    userProfile: "https://raw.githubusercontent.com/Agin-DropDisco/encode-hclub/main/PORTIS/groot.webp",
  },
  {
    hds: "Create / Build Genesis",
    hdsAT1: `$ curl -X POST --data '{
    "jsonrpc": "2.0",
    "id"     : 1,
    "method" : "avm.buildGenesis",
    "params" : {
    "genesisData": {
    "asset1": {
    "name": "myFixedCapAsset",
    "symbol":"MFCA",
    "initialState": {
    "fixedCap" : [{
    "amount":100000,
    "address": "local1qwfws7mgwe9slfx6l7vhxk2y0n7dwnuy6jdftg"},{
    "amount":100000,
    "address": "local1kzar62ggnm0td8vvt3x6z0pn2eunvq88x63p39"},{
    "amount":50000,
    "address": "local18wt6032m57x5st064vyk6a27wtvftxzxpr0pl4"},{
    "amount":50000,
    "address": "local14naqtwsaj3tm3d9axquahjl42dmeyecu7twruu" }] }},
    "asset2": {
    "name": "myVarCapAsset",
    "symbol":"MVCA",
    "initialState": {
    "variableCap" : [ {
    "minters": [
    "local1fr86zq22p5qn2sv2hstplxr3pvgwll7mqpmc84",
    "local1k0jdvsgxcadp7z2hvs4e30z6x05qaecket097k"],
    "threshold":1},{
    "minters": [
    "local1adfgq8qmq2ur9rpeuxu6t6uvjux2pv85jjcu0x",
    "local1mthuc85sdcsep9eg3zje270jcxvdh67t4y7rk9",
    "local1u06hgqjn0xvhlaetkawjpch6fc70jtldfsgq7t"],
    "threshold":2}]} }}}}' -H 'content-type:application/json;' 127.0.0.1:9650/ext/vm/avm`,
    hdsAT2: "•> Response ",
    hdsAT3: `{"jsonrpc":"2.0","result":{
    "bytes":"11111BcSrCUj7fX2ZiHNVgPnTXSiS1bB1vWo7QMaZ61vcyR7LHgFURR95N4TR6Tnu9u4dUW8M1ERahfCrexDbZr6A7d3dfRkbhJyhyspHdLsxUj8Vxn3pmGt5iTCtJwPggjxy5EEqrK9EZGgTprKFonWY8EkE1hAfp1yLqKRNjqEVmLcUDXe7feGxGBg8EraKrdSNXkvSzxo7nx6M5ygdYhnDzghU7ZFUaAD19ZZwFhc1y57zj2ubTWNXHZyAEa5VCz9Wf173UEPcW93VNcNq4QyGaucEmLznh8gei1b89VLQdfQDEG6xnc4HbCcYEY4W5wHzzkBXDGpYbyLx3uwzWVdVzV9nXBWtMhS5KWHhf2j4SPr3BLP5LNG3R73vsaAE5skDEE9t8QPraP7M2f52rfspZR9kAE3hrBwHT9mSLczyBA9MPnZGqCtbpABtvVzoDQxZveJXgivS3kBMo85WvmyFNWQPyzzwCWKsSUUdn9yzmdnt4EojeuGXBiwWhvu68jLJZhaig6VrzMb9EgxJT6sh52UC2zj5z3afxkcqjwVYPowk3aBwEAfJFUU41d9SRb2BZLg1JV3FU9yxWfNLd6MYiLMEWhw67G3wNLJGeUCMLpRxPvd1oe3pKmED86YecRTiRLjrCt2MHvLsgi9mFdyPj5nJk7pRutFGCMRiZKp1VTr1jRNjStKuXuyMtD4gLuzCXXrt",
    "encoding":"cb58"},"id":1}`,
    hds2: "",
    hds2AT1:"",
    hds3: "Create New Blockchain",
    hds3AT1: `$ $ curl -X POST --data '{
    "jsonrpc": "2.0",
    "method": "platform.createBlockchain",
    "params" : {
    "subnetID": "2eqXqSYXRKHM5yUXbRGBiJLogiNzXR4Ka9L9sfCvCfY9j8h4CY",
    "vmID":"avm",
    "name":"My new AVM",
    "genesisData": "11111BcSrCUj7fX2ZiHNVgPnTXSiS1bB1vWo7QMaZ61vcyR7LHgFURR95N4TR6Tnu9u4dUW8M1ERahfCrexDbZr6A7d3dfRkbhJyhyspHdLsxUj8Vxn3pmGt5iTCtJwPggjxy5EEqrK9EZGgTprKFonWY8EkE1hAfp1yLqKRNjqEVmLcUDXe7feGxGBg8EraKrdSNXkvSzxo7nx6M5ygdYhnDzghU7ZFUaAD19ZZwFhc1y57zj2ubTWNXHZyAEa5VCz9Wf173UEPcW93VNcNq4QyGaucEmLznh8gei1b89VLQdfQDEG6xnc4HbCcYEY4W5wHzzkBXDGpYbyLx3uwzWVdVzV9nXBWtMhS5KWHhf2j4SPr3BLP5LNG3R73vsaAE5skDEE9t8QPraP7M2f52rfspZR9kAE3hrBwHT9mSLczyBA9MPnZGqCtbpABtvVzoDQxZveJXgivS3kBMo85WvmyFNWQPyzzwCWKsSUUdn9yzmdnt4EojeuGXBiwWhvu68jLJZhaig6VrzMb9EgxJT6sh52UC2zj5z3afxkcqjwVYPowk3aBwEAfJFUU41d9SRb2BZLg1JV3FU9yxWfNLd6MYiLMEWhw67G3wNLJGeUCMLpRxPvd1oe3pKmED86YecRTiRLjrCt2MHvLsgi9mFdyPj5nJk7pRutFGCMRiZKp1VTr1jRNjStKuXuyMtD4gLuzCXXrt",
    "username": "BrotherSub",
    "password": "127.0.0.1:9650/ext/keystore"},
    "id": 1 }' -H 'content-type:application/json;' 127.0.0.1:9650/ext/P`,
    hds4: "•> Response",
    hds4AT1: `{"jsonrpc":"2.0","result":{
    "txID":"2EitAPNMXvFY9C1fZAs7RbLijMUuhHd72V4opZFrjcz1WqPjgY",
    "changeAddr":"P-local1dyqadxr74wgpvwc7aa22gav4pf3vmsael9ghkc"},"id":1}`,
    hds5: "Verify Blockchain",
    hds5AT1: `$ curl -X POST --data '{
    "jsonrpc":"2.0",
    "id"     :1,
    "method" :"platform.getBlockchains",
    "params" :{}
    }' -H 'content-type:application/json;' 127.0.0.1:9650/ext/P`,
    hds6: "Restart the Node and Add this Command to Your Terminal",
    hds6AT1: "$ ./build/avalanchego --whitelisted-subnets=[ your subnets id]",
    hds6AT2: "eg:  ./build/avalanchego --whitelisted-subnets=2eqXqSYXRKHM5yUXbRGBiJLogiNzXR4Ka9L9sfCvCfY9j8h4CY",
    hds6AT3: " == DONE ==",
    termOne: "Second Terminal",
    termTwo: "Second Terminal",
    user: "Like What You See ?",
    userProfile: "https://raw.githubusercontent.com/Agin-DropDisco/encode-hclub/main/PORTIS/groot.webp",
  },
];
export  default ContentSubBlockAvax;