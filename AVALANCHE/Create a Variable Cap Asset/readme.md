Create a Variable Cap Asset
---------------------------

### Install and run Avalanche node

``` {.hljs}
$ go get -v -d github.com/ava-labs/avalanchego/...
$ cd $GOPATH/src/github.com/ava-labs/avalanchego
$ ./scripts/build.sh
```

### Start node & Connecting to Fuji: [ optional ] {#start-node--connecting-to-fuji--optional}

``` {.hljs}
$ ./build/avalanchego --network-id=fuji
```

-   Create Keystore

``` {.hljs}
$ curl -X POST --data '{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "keystore.createUser",
    "params": {
        "username": "The_Weird_Brother",
        "password": "127.0.0.1:9650/ext/keystore"
    }
}' -H 'content-type:application/json;' 127.0.0.1:9650/ext/keystore
```

``` {.hljs}
•> Response 
{"jsonrpc":"2.0","result":{"success":true},"id":1}
```

-   Create Address

``` {.hljs}
$ curl -X POST --data '{
    "jsonrpc":"2.0",
    "id"     :2,
    "method" :"avm.createAddress",
    "params" :{
        "username": "The_Weird_Brother",
        "password": "127.0.0.1:9650/ext/keystore"
    }
}' -H 'content-type:application/json;' 127.0.0.1:9650/ext/bc/X
```

-   Check the list of address that we made

``` {.hljs}
$ curl -X POST --data '{
    "jsonrpc": "2.0",
    "method": "avm.listAddresses",
    "params": {
        "username": "The_Weird_Brother",
        "password": "127.0.0.1:9650/ext/keystore"
    },
    "id": 1
}'  -H 'content-type:application/json;' 127.0.0.1:9650/ext/X
```

``` {.hljs}
•> Response 
{"jsonrpc":"2.0","result":{"address":"X-fuji1a2rjn68zf7tp62fprv08eh5kvcgl037ustfsz0"},"id":2}//make sure this address had a balances to use for fees 
{"jsonrpc":"2.0","result":{"address":"X-fuji1qjg5dke53036483saqeezx85uf8czu6pjxkz6w"},"id":2}
{"jsonrpc":"2.0","result":{"address":"X-fuji1yfk8e6vh82llz8fzcqk6yrm5sk0tkyq2u0ef32"},"id":2}
{"jsonrpc":"2.0","result":{"address":"X-fuji1q8ye8mur7n6qlyfprtj9kgqj4egvjtkvwgm5gg"},"id":2}
{"jsonrpc":"2.0","result":{"address":"X-fuji19l6c0z3thxghrh0x5dd8xt0gjly73frefnh2qa"},"id":2}
{"jsonrpc":"2.0","result":{"address":"X-fuji1qhu4l7uh9qtlkjhcd9yyx3344f9ewd9c7rx66d"},"id":2}
```

-   go to the: https://wallet.avax.network
-   Then : https://faucet.avax-test.network
-   And Store Some Funds to Our Node

##### Create the Asset with this Signature Method

``` {.hljs}
$ avm.createVariableCapAsset({
    name: string,
    symbol: string,
    denomination: int,
    minterSets []{
        minters: []string,
        threshold: int
    },
    from: []string,
    changeAddr: string,
    username: string,
    password: string
}) ->
{
    assetID: string,
    changeAddr: string,
}
```

``` {.hljs}
$ curl -X POST --data '{
    "jsonrpc":"2.0",
    "id"     : 1,
    "method" :"avm.createVariableCapAsset",
    "params" :{
        "name":"WeirdBrother CA",
        "symbol":"WBCA",
        "minterSets":[
            {
                "minters": [
                    "X-fuji1yfk8e6vh82llz8fzcqk6yrm5sk0tkyq2u0ef32"
                ],
                "threshold": 1
            },
            {
                "minters": [
                    
                    "X-fuji1q8ye8mur7n6qlyfprtj9kgqj4egvjtkvwgm5gg",
                    "X-fuji19l6c0z3thxghrh0x5dd8xt0gjly73frefnh2qa",
                    "X-fuji1qhu4l7uh9qtlkjhcd9yyx3344f9ewd9c7rx66d"
                ],
                "threshold": 2
            }
        ],
        "from":["X-fuji1a2rjn68zf7tp62fprv08eh5kvcgl037ustfsz0"],
        "changeAddr":"X-fuji1qjg5dke53036483saqeezx85uf8czu6pjxkz6w",
        "username": "The_Weird_Brother",
        "password": "127.0.0.1:9650/ext/keystore"
    }
}' -H 'content-type:application/json;' 127.0.0.1:9650/ext/bc/X
```

``` {.hljs}
•> Response 
{"jsonrpc":"2.0","result":{
    "assetID":"QmLHE7yzhLtNM8AWrvNQVrzzQJoyxcZb3PHg1EAshGA94gQ12",
    "changeAddr":"X-fuji1qjg5dke53036483saqeezx85uf8czu6pjxkz6w"},"id":1}
```

-   Important Part (Make sure we can control the <to:> address that we
    will send some WBCA [WeirdBrother CA] balances)
-   todo: [method:avm.mint](method:avm.mint)

``` {.hljs}
$ curl -X POST --data '{
    "jsonrpc":"2.0",
    "id"     : 1,
    "method" :"avm.mint",
    "params" :{
        "amount":7777777,
        "assetID":"QmLHE7yzhLtNM8AWrvNQVrzzQJoyxcZb3PHg1EAshGA94gQ12",
        "to":"X-fuji1a2rjn68zf7tp62fprv08eh5kvcgl037ustfsz0",
        "username": "The_Weird_Brother",
        "password": "127.0.0.1:9650/ext/keystore"
    }
}' -H 'content-type:application/json;' 127.0.0.1:9650/ext/bc/X
```

``` {.hljs}
•> Response 
{"jsonrpc":"2.0","result":{
    "txID":"PBwYK4c6U8uCNUtF6VPJgBYspJWBVpuE7jU1NWSoGVqeSyKYF",
    "changeAddr":"X-fuji1erzwkyfm9w9fgp28uu7davjfnssdc8jy56jf7j"},"id":1}
```

-   Check Status Balance

``` {.hljs}
$ curl -X POST --data '{
    "jsonrpc":"2.0",
    "id"     : 1,
    "method" :"avm.getTxStatus",
    "params" :{
        "txID":"PBwYK4c6U8uCNUtF6VPJgBYspJWBVpuE7jU1NWSoGVqeSyKYF"
    }
}' -H 'content-type:application/json;' 127.0.0.1:9650/ext/bc/X
```

``` {.hljs}
•> Response 
{"jsonrpc":"2.0","result":{"status":"Accepted"},"id":1}
```

-   Check Balance of the "to": Address

``` {.hljs}
$ curl -X POST --data '{
    "jsonrpc":"2.0",
    "id"     :1,
    "method" :"avm.getBalance",
    "params" :{
        "address":"X-fuji1a2rjn68zf7tp62fprv08eh5kvcgl037ustfsz0",
        "assetID":"QmLHE7yzhLtNM8AWrvNQVrzzQJoyxcZb3PHg1EAshGA94gQ12"
    }
}' -H 'content-type:application/json;' 127.0.0.1:9650/ext/bc/X
```

``` {.hljs}
•> Response Should Be Something Like This
{"jsonrpc":"2.0","result":{
    "balance":"7777777",
    "utxoIDs":[{
        "txID":"PBwYK4c6U8uCNUtF6VPJgBYspJWBVpuE7jU1NWSoGVqeSyKYF","outputIndex":2}]},"id":1}
```

-   Send The Asset to Another Address

``` {.hljs}
$ curl -X POST --data '{
    "jsonrpc":"2.0",
    "id"     :1,
    "method" :"avm.send",
    "params" :{
        "username": "The_Weird_Brother",
        "password": "127.0.0.1:9650/ext/keystore",
        "assetID" :"QmLHE7yzhLtNM8AWrvNQVrzzQJoyxcZb3PHg1EAshGA94gQ12",
        "amount"  : 555,
        "to"      :"X-fuji1cezp7kvqefvdewlksqvv3klk743hpstjqv465g"
    }
}' -H 'content-type:application/json;' 127.0.0.1:9650/ext/bc/X
```

``` {.hljs}
•> Response Should Be Something Like This
{"jsonrpc":"2.0","result":{
    "txID":"nFvJ9ioWZF2W3jaypGBRasirBaaeniDSeQ3WEubhJbeadn7eZ",
    "changeAddr":"X-fuji1erzwkyfm9w9fgp28uu7davjfnssdc8jy56jf7j"},"id":1}
```

-   Check Balance of the "to": Address

``` {.hljs}
$ curl -X POST --data '{
    "jsonrpc":"2.0",
    "id"     :1,
    "method" :"avm.getBalance",
    "params" :{
        "address":"X-fuji1cezp7kvqefvdewlksqvv3klk743hpstjqv465g",
        "assetID":"QmLHE7yzhLtNM8AWrvNQVrzzQJoyxcZb3PHg1EAshGA94gQ12"
    }
}' -H 'content-type:application/json;' 127.0.0.1:9650/ext/bc/X
```

``` {.hljs}
•> Response
{"jsonrpc":"2.0","result":{"balance":"555",
    "utxoIDs":[{
        "txID":"nFvJ9ioWZF2W3jaypGBRasirBaaeniDSeQ3WEubhJbeadn7eZ","outputIndex":0}]},"id":1}
```

### What has been done?:

-   Used createVariableCapAsset to create a variable-cap asset that
    represents shares [WBCA / WeirdBrother CA]
-   Used mint to mint more units of an asset
-   Used getBalance to check address balances
-   Used send to transfer shares [ WBCA / WeirdBrother CA]

