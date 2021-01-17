Create Subnet & New Blockchain 
------------------------------

###### On this tutorial we will create subnet, add a validator with API calls, adding a subnet validator , create/build genesis & create new blockchain {#on-this-tutorial-we-will-create-subnet-add-a-validator-with-api-calls-adding-a-subnet-validator--createbuild-genesis--create-new-blockchain}

### Install and run Avash node

``` {.hljs}
$ cd $GOPATH/src/github.com/ava-labs/avash
$ ./avash
```

### Start node & Connecting to Five node {#start-node--connecting-to-five-node}

``` {.hljs}
$ runscript scripts/five_node_staking.lua
```

-   Create Keystore

``` {.hljs}
$ curl -X POST --data '{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "keystore.createUser",
    "params": {
        "username": "BrotherSub",
        "password": "127.0.0.1:9650/ext/keystore"
    }
}' -H 'content-type:application/json;' 127.0.0.1:9650/ext/keystore    
```

-   Create Address

``` {.hljs}
$ curl -X POST --data '{
    "jsonrpc": "2.0",
    "method": "platform.createAddress",
    "params": {
        "username": "BrotherSub",
        "password": "127.0.0.1:9650/ext/keystore"
    },
    "id": 1
}' -H 'content-type:application/json;' 127.0.0.1:9650/ext/P
```

-   Check the list of address that we made

``` {.hljs}
$ curl -X POST --data '{
    "jsonrpc": "2.0",
    "method": "platform.listAddresses",
    "params": {
        "username": "BrotherSub",
        "password": "127.0.0.1:9650/ext/keystore"
    },
    "id": 1
}'  -H 'content-type:application/json;' 127.0.0.1:9650/ext/P
```

``` {.hljs}
•> Response 
{"jsonrpc":"2.0","result":{
    "addresses":[
    "P-local1dyqadxr74wgpvwc7aa22gav4pf3vmsael9ghkc",
    "P-local1vxx0a0tw8hc5ta3lr68ttmpeekdheph3ecpxc4",
    "P-local1vdvu5wmfgzuk7pgdexx4hsf549lkvjwr3qxw0m",
    "P-local1fsdyaqhdwefn6dn3y8m6v6grsptc7jyl3hxp8v",
    "P-local1qwfws7mgwe9slfx6l7vhxk2y0n7dwnuy6jdftg",
    "P-local1kzar62ggnm0td8vvt3x6z0pn2eunvq88x63p39",
    "P-local18wt6032m57x5st064vyk6a27wtvftxzxpr0pl4",
    "P-local14naqtwsaj3tm3d9axquahjl42dmeyecu7twruu",
    "P-local1fr86zq22p5qn2sv2hstplxr3pvgwll7mqpmc84",
    "P-local1k0jdvsgxcadp7z2hvs4e30z6x05qaecket097k",
    "P-local1adfgq8qmq2ur9rpeuxu6t6uvjux2pv85jjcu0x",
    "P-local1mthuc85sdcsep9eg3zje270jcxvdh67t4y7rk9",
    "P-local1u06hgqjn0xvhlaetkawjpch6fc70jtldfsgq7t"
    ]},"id":1} 
```

-   Import Pre-Funded

``` {.hljs}
$ curl --location --request POST 'localhost:9650/ext/platform' \
--header 'Content-Type: application/json' \
--data-raw '{
    "jsonrpc": "2.0",
    "method": "platform.importKey",
    "params":{
        "username": "BrotherSub",
        "password": "127.0.0.1:9650/ext/keystore",
          "privateKey":"PrivateKey-ewoqjP7PxY4yr3iLTpLisriqt94hdyDFNgchSxGGztUrTXtNN"
    },
    "id": 1
}'
```

``` {.hljs}
•> Response 
{"jsonrpc":"2.0","result":{"address":"P-local18jma8ppw3nhx5r4ap8clazz0dps7rv5u00z96u"},"id":1}
```

#### Create Subnet

``` {.hljs}
$ curl -X POST --data '{
    "jsonrpc": "2.0",
    "method": "platform.createSubnet",
    "params": {
        "controlKeys":[
            "P-local1dyqadxr74wgpvwc7aa22gav4pf3vmsael9ghkc",
            "P-local1vxx0a0tw8hc5ta3lr68ttmpeekdheph3ecpxc4"
        ],
        "threshold":2,
        "username": "BrotherSub",
        "password": "127.0.0.1:9650/ext/keystore"
    },
    "id": 1
}' -H 'content-type:application/json;' 127.0.0.1:9650/ext/P
```

``` {.hljs}
•> Response 
{
    "jsonrpc":"2.0",
    "result":{
        "txID":"2eqXqSYXRKHM5yUXbRGBiJLogiNzXR4Ka9L9sfCvCfY9j8h4CY",
        "changeAddr":"P-local1dyqadxr74wgpvwc7aa22gav4pf3vmsael9ghkc"},
        "id":1
}
```

-   Get all existing subnets

``` {.hljs}
$ curl -X POST --data '{
    "jsonrpc": "2.0",
    "method": "platform.getSubnets",
    "params": {},
    "id": 1
}' -H 'content-type:application/json;' 127.0.0.1:9650/ext/P
```

``` {.hljs}
•> Response 
{
    "jsonrpc":"2.0",
    "result":{
        "subnets":[{
            "id":"2eqXqSYXRKHM5yUXbRGBiJLogiNzXR4Ka9L9sfCvCfY9j8h4CY",
            "controlKeys":[
                "P-local1vxx0a0tw8hc5ta3lr68ttmpeekdheph3ecpxc4",
                "P-local1dyqadxr74wgpvwc7aa22gav4pf3vmsael9ghkc"
                ],
                "threshold":"2"
                },
                {
                    "id":"11111111111111111111111111111111LpoYY",
                    "controlKeys":[],"threshold":"0"
                }]},"id":1
}
```

-   Check info of the Subnets

``` {.hljs}
$ curl -X POST --data '{
    "jsonrpc": "2.0",
    "method": "platform.getSubnets",
    "params": {"ids":["2eqXqSYXRKHM5yUXbRGBiJLogiNzXR4Ka9L9sfCvCfY9j8h4CY"]},
    "id": 1
}' -H 'content-type:application/json;' 127.0.0.1:9650/ext/P
```

``` {.hljs}
$ curl -X POST --data '{
    "jsonrpc": "2.0",
    "method": "platform.getSubnets",
    "params": {"ids":["11111111111111111111111111111111LpoYY"]},
    "id": 1
}' -H 'content-type:application/json;' 127.0.0.1:9650/ext/P
```

#### Add a Validator with API calls

-   Get NodeId

``` {.hljs}
$ curl -X POST --data '{
    "jsonrpc":"2.0",
    "id"     :1,
    "method" :"info.getNodeID"
}' -H 'content-type:application/json;' 127.0.0.1:9650/ext/info
```

``` {.hljs}
•> Response 
{"jsonrpc":"2.0","result":{"nodeID":"NodeID-7Xhw2mDxuDS44j42TCB6U5579esbSt3Lg"},"id":1}
```

-   Add Validator

``` {.hljs}
$ curl -X POST --data '{
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
        "password": "127.0.0.1:9650/ext/keystore"
    },
    "id": 1
}' -H 'content-type:application/json;' 127.0.0.1:9650/ext/P
```

``` {.hljs}
•> Response 
{
    "jsonrpc":"2.0",
    "result":{
        "txID":"PKWGmqxteNAtEuhpchsxm1xinQAEGdJAk9GYMAikivpsUvyMx",
    "changeAddr":"P-local1fsdyaqhdwefn6dn3y8m6v6grsptc7jyl3hxp8v"
    },"id":1
}
```

### Adding a Subnet Validator

``` {.hljs}
$ curl -X POST --data '{
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
        "password": "127.0.0.1:9650/ext/keystore"
    },
    "id": 1
}' -H 'content-type:application/json;' 127.0.0.1:9650/ext/P
```

``` {.hljs}
•> Response 
{
    "jsonrpc":"2.0",
    "result":{
        "txID":"xtC8yziuZXo6bzNuVbnAmTWYkoPqEs4BxMvsLW8nJ9beqmNc9",
        "changeAddr":"P-local1fsdyaqhdwefn6dn3y8m6v6grsptc7jyl3hxp8v"
        },"id":1
}
```

-   Get tx status

``` {.hljs}
curl -X POST --data '{
    "jsonrpc": "2.0",
    "method": "platform.getTxStatus",
    "params": {
        "txID":"xtC8yziuZXo6bzNuVbnAmTWYkoPqEs4BxMvsLW8nJ9beqmNc9"
    },
    "id": 1
}' -H 'content-type:application/json;' 127.0.0.1:9650/ext/P
```

``` {.hljs}
•> Response 
{"jsonrpc":"2.0","result":"Committed","id":1}
```

-   Check Validator

``` {.hljs}
curl -X POST --data '{
    "jsonrpc": "2.0",
    "method": "platform.getPendingValidators",
    "params": {"subnetID":"2eqXqSYXRKHM5yUXbRGBiJLogiNzXR4Ka9L9sfCvCfY9j8h4CY"},
    "id": 1
}' -H 'content-type:application/json;' 127.0.0.1:9650/ext/P
```

``` {.hljs}
•> Response 
{
    "jsonrpc":"2.0",
    "result":{
        "validators":[{
            "txID":"xtC8yziuZXo6bzNuVbnAmTWYkoPqEs4BxMvsLW8nJ9beqmNc9",
            "startTime":"1607161000",
            "endTime":"1609752400",
            "weight":"1",
    "nodeID":"NodeID-7Xhw2mDxuDS44j42TCB6U5579esbSt3Lg"}],"delegators":[]},"id":1
}
```

#### Create / Build Genesis {#create--build-genesis}

``` {.hljs}
$ curl -X POST --data '{
    "jsonrpc": "2.0",
    "id"     : 1,
    "method" : "avm.buildGenesis",
    "params" : {
        "genesisData": {
            "asset1": {
                "name": "myFixedCapAsset",
                "symbol":"MFCA",
                "initialState": {
                    "fixedCap" : [
                        {
                            "amount":100000,
                            "address": "local1qwfws7mgwe9slfx6l7vhxk2y0n7dwnuy6jdftg"
                        },
                        {
                            "amount":100000,
                            "address": "local1kzar62ggnm0td8vvt3x6z0pn2eunvq88x63p39"
                        },
                        {
                            "amount":50000,
                            "address": "local18wt6032m57x5st064vyk6a27wtvftxzxpr0pl4"
                        },
                        {
                            "amount":50000,
                            "address": "local14naqtwsaj3tm3d9axquahjl42dmeyecu7twruu"
                        }
                    ]
                }
            },
            "asset2": {
                "name": "myVarCapAsset",
                "symbol":"MVCA",
                "initialState": {
                    "variableCap" : [
                        {
                            "minters": [
                                "local1fr86zq22p5qn2sv2hstplxr3pvgwll7mqpmc84",
                                "local1k0jdvsgxcadp7z2hvs4e30z6x05qaecket097k"
                            ],
                            "threshold":1
                        },
                        {
                            "minters": [
                                "local1adfgq8qmq2ur9rpeuxu6t6uvjux2pv85jjcu0x",
                                "local1mthuc85sdcsep9eg3zje270jcxvdh67t4y7rk9",
                                "local1u06hgqjn0xvhlaetkawjpch6fc70jtldfsgq7t"
                            ],
                            "threshold":2
                        }
                    ]
                }
            }
        }
    }
}' -H 'content-type:application/json;' 127.0.0.1:9650/ext/vm/avm
```

``` {.hljs}
•> Response 
{"jsonrpc":"2.0","result":{
    "bytes":"11111BcSrCUj7fX2ZiHNVgPnTXSiS1bB1vWo7QMaZ61vcyR7LHgFURR95N4TR6Tnu9u4dUW8M1ERahfCrexDbZr6A7d3dfRkbhJyhyspHdLsxUj8Vxn3pmGt5iTCtJwPggjxy5EEqrK9EZGgTprKFonWY8EkE1hAfp1yLqKRNjqEVmLcUDXe7feGxGBg8EraKrdSNXkvSzxo7nx6M5ygdYhnDzghU7ZFUaAD19ZZwFhc1y57zj2ubTWNXHZyAEa5VCz9Wf173UEPcW93VNcNq4QyGaucEmLznh8gei1b89VLQdfQDEG6xnc4HbCcYEY4W5wHzzkBXDGpYbyLx3uwzWVdVzV9nXBWtMhS5KWHhf2j4SPr3BLP5LNG3R73vsaAE5skDEE9t8QPraP7M2f52rfspZR9kAE3hrBwHT9mSLczyBA9MPnZGqCtbpABtvVzoDQxZveJXgivS3kBMo85WvmyFNWQPyzzwCWKsSUUdn9yzmdnt4EojeuGXBiwWhvu68jLJZhaig6VrzMb9EgxJT6sh52UC2zj5z3afxkcqjwVYPowk3aBwEAfJFUU41d9SRb2BZLg1JV3FU9yxWfNLd6MYiLMEWhw67G3wNLJGeUCMLpRxPvd1oe3pKmED86YecRTiRLjrCt2MHvLsgi9mFdyPj5nJk7pRutFGCMRiZKp1VTr1jRNjStKuXuyMtD4gLuzCXXrt",
    "encoding":"cb58"},"id":1}
```

#### Create New Blockchain

``` {.hljs}
$ curl -X POST --data '{
    "jsonrpc": "2.0",
    "method": "platform.createBlockchain",
    "params" : {
        "subnetID": "2eqXqSYXRKHM5yUXbRGBiJLogiNzXR4Ka9L9sfCvCfY9j8h4CY",
        "vmID":"avm",
        "name":"My new AVM",
        "genesisData": "11111BcSrCUj7fX2ZiHNVgPnTXSiS1bB1vWo7QMaZ61vcyR7LHgFURR95N4TR6Tnu9u4dUW8M1ERahfCrexDbZr6A7d3dfRkbhJyhyspHdLsxUj8Vxn3pmGt5iTCtJwPggjxy5EEqrK9EZGgTprKFonWY8EkE1hAfp1yLqKRNjqEVmLcUDXe7feGxGBg8EraKrdSNXkvSzxo7nx6M5ygdYhnDzghU7ZFUaAD19ZZwFhc1y57zj2ubTWNXHZyAEa5VCz9Wf173UEPcW93VNcNq4QyGaucEmLznh8gei1b89VLQdfQDEG6xnc4HbCcYEY4W5wHzzkBXDGpYbyLx3uwzWVdVzV9nXBWtMhS5KWHhf2j4SPr3BLP5LNG3R73vsaAE5skDEE9t8QPraP7M2f52rfspZR9kAE3hrBwHT9mSLczyBA9MPnZGqCtbpABtvVzoDQxZveJXgivS3kBMo85WvmyFNWQPyzzwCWKsSUUdn9yzmdnt4EojeuGXBiwWhvu68jLJZhaig6VrzMb9EgxJT6sh52UC2zj5z3afxkcqjwVYPowk3aBwEAfJFUU41d9SRb2BZLg1JV3FU9yxWfNLd6MYiLMEWhw67G3wNLJGeUCMLpRxPvd1oe3pKmED86YecRTiRLjrCt2MHvLsgi9mFdyPj5nJk7pRutFGCMRiZKp1VTr1jRNjStKuXuyMtD4gLuzCXXrt",
        "username": "BrotherSub",
        "password": "127.0.0.1:9650/ext/keystore"
    },
    "id": 1
}' -H 'content-type:application/json;' 127.0.0.1:9650/ext/P
```

``` {.hljs}
•> Response 
{"jsonrpc":"2.0","result":{
    "txID":"2EitAPNMXvFY9C1fZAs7RbLijMUuhHd72V4opZFrjcz1WqPjgY",
    "changeAddr":"P-local1dyqadxr74wgpvwc7aa22gav4pf3vmsael9ghkc"},"id":1}
```

-   Verify Blockchain

``` {.hljs}
$ curl -X POST --data '{
    "jsonrpc":"2.0",
    "id"     :1,
    "method" :"platform.getBlockchains",
    "params" :{}
}' -H 'content-type:application/json;' 127.0.0.1:9650/ext/P
```

``` {.hljs}
•> Response 
{
    "jsonrpc":"2.0","result":{
    "blockchains":[{
        "id":"2eNy1mUFdmaxXNj1eQHUe7Np4gju9sJsEtWQ4MX3ToiNKuADed",
        "name":"X-Chain",
        "subnetID":"11111111111111111111111111111111LpoYY",
        "vmID":"jvYyfQTxGMJLuGWa55kdP2p2zSUYsQ5Raupu4TW34ZAUBAbtq"
    },
        {

        "id":"26sSDdFXoKeShAqVfvugUiUQKhMZtHYDLeBqmBfNfcdjziTrZA",
        "name":"C-Chain",
        "subnetID":"11111111111111111111111111111111LpoYY",
        "vmID":"mgj786NP7uDwBCcq6YwThhaN8FLyybkCa4zBWTQbNgmK6k9A6"
    },
       {
        "id":"2EitAPNMXvFY9C1fZAs7RbLijMUuhHd72V4opZFrjcz1WqPjgY",
        "name":"My new AVM",
        "subnetID":"2eqXqSYXRKHM5yUXbRGBiJLogiNzXR4Ka9L9sfCvCfY9j8h4CY",
        "vmID":"jvYyfQTxGMJLuGWa55kdP2p2zSUYsQ5Raupu4TW34ZAUBAbtq"
        }]}
    ,"id":1
}
```

#### Restart the Node and Add this Command to Your Terminal

``` {.hljs}
$ ./build/avalanchego --whitelisted-subnets=[ your subnets id]
```

###### eg:

``` {.hljs}
 ./build/avalanchego --whitelisted-subnets=2eqXqSYXRKHM5yUXbRGBiJLogiNzXR4Ka9L9sfCvCfY9j8h4CY
```

### What has been done?:

-   Create a SubNet
-   Create a Blockchain
-   Create a new Blockchain

