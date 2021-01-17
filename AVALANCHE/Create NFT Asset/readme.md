## Created NFT Asset
### Install and run an Avalanche node

``` {.hljs}
$ go get -v -d github.com/ava-labs/avalanchego/...
$ cd $GOPATH/src/github.com/ava-labs/avalanchego
$ ./scripts/build.sh
```

### Start node & Connecting to Fuji (optional) 

``` {.hljs}
$ ./build/avalanchego --network-id=fuji
```

-   ## Create Keystore && Address

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

-   ##  Create NFT Asset

``` {.hljs}
$ curl -X POST --data '{
    "jsonrpc":"2.0",
    "id"     :1,
    "method" :"avm.createNFTAsset",
    "params" :{
        "name":"WeirdBrotherFams",
        "symbol":"WBFA",
        "minterSets":[
            {
                "minters": [
                    "X-fuji1r94e3a9vxz03mknqv9k0yg24hgr596svfpj3xx"
                ],
                "threshold": 1
            }
        ],
        "username": "The_Weird_Brother",
        "password": "127.0.0.1:9650/ext/keystore"
    }
}' -H 'content-type:application/json;' 127.0.0.1:9650/ext/bc/X
```

``` {.hljs}
•> Response 
{"jsonrpc":"2.0","result":{
    "assetID":"uVjfX2icQ9gYBSa5izxzWPfTcYNfn3qagJNy3BukEGf6YxvLv",
    "changeAddr":"X-fuji1448xtwm3mp23ckdd9u7wuxrd5a5aqpjkmye2uk"},"id":1}
```

-   CGet UTXOS

``` {.hljs}
$ curl -X POST --data '{
    "jsonrpc":"2.0",
    "id"     : 1,
    "method" :"avm.getUTXOs",
    "params" :{
        "addresses":["X-fuji1r94e3a9vxz03mknqv9k0yg24hgr596svfpj3xx"]
    }
}' -H 'content-type:application/json;' 127.0.0.1:9650/ext/bc/X
```

``` {.hljs}
•> Response 
{"jsonrpc":"2.0","result":{"
numFetched":"2",
"utxos":[
    "115PbuJ4f4wPYk3Vo4ZzBGwpugrRAMB8tvfE9PWe4iJshVjpHyiEon2TreXbJ9tNhDbf5mtqoyUMo9qihfbdtY3SqZv4bDvGa7t29X8E4pHqr6UHfoV3zbfuZ4d6GmmNm4H9vqopKhmH1YrJcqZnjwjdFiRfajFcDTo9H4SFzPAtfKEw3TttJH9vAW7kP2uzF3BqUR5AeHZDSs28MK",
    "113XSg1CahoEuWg29kRhnKsERWiNZVRJCtMmP9pa3jmDyK1EypXnXH9M8KxjF6JZxZ6hv4gTRj9QxZjjn7Aph6Xawv7kdo4rWHiHvYv9ajhqzAvEzJfeVcVTYj3A98X8qvA8uAbALSkfnVSqPrh7KZw4srWkccxyz"],
    "endIndex":{
        "address":"X-fuji1r94e3a9vxz03mknqv9k0yg24hgr596svfpj3xx",
    "utxo":"2Dtszkg1eZyA3RoXhT32BV5WieWV2FuK5PrP5LneK67yzAN8ss"},"encoding":"cb58"},"id":1}
```

-   Mint NFT Asset

``` {.hljs}
$  curl -X POST --data '{
    "jsonrpc":"2.0",
    "id"     : 1,
    "method" :"avm.mintNFT",
    "params" :{
        "assetID":"uVjfX2icQ9gYBSa5izxzWPfTcYNfn3qagJNy3BukEGf6YxvLv",
        "payload":"2EWh72jYQvEJF9NLk", 
        "to":"X-fuji1r94e3a9vxz03mknqv9k0yg24hgr596svfpj3xx",
        "username": "The_Weird_Brother",
        "password": "127.0.0.1:9650/ext/keystore"
    }
}' -H 'content-type:application/json;' 127.0.0.1:9650/ext/bc/X
```

``` {.hljs}
•> Response 
{"jsonrpc":"2.0","result":{
    "txID":"21FUVmnGUvK85NPrEUhDbTFiDrA3V6sa1mQX5CUqLUf4Y8eVzQ",
    "changeAddr":"X-fuji1448xtwm3mp23ckdd9u7wuxrd5a5aqpjkmye2uk"},"id":1}
```

-   Send NFT Asset

``` {.hljs}
$ curl -X POST --data '{
    "jsonrpc":"2.0",
    "id"     :1,
    "method" :"avm.sendNFT",
    "params" :{
        "assetID" :"2GiMTvR7jL16EF7Z4ygVSKtd7AmnczpRjfGVFtsGYwfhdzEf1G",
        "to"      :"X-fuji1r94e3a9vxz03mknqv9k0yg24hgr596svfpj3xx",
        "groupID" : 0,
        "username": "The_Weird_Brother",
        "password": "127.0.0.1:9650/ext/keystore"
    }
}' -H 'content-type:application/json;' 127.0.0.1:9650/ext/bc/X
```

``` {.hljs}
•> Response 
{"jsonrpc":"2.0","result":{
    "txID":"26fnFn7n6LYzZgicybYNKddYJ5Zd4LCrWiy3bNhqCJwZCg7Kbh",
    "changeAddr":"X-fuji1448xtwm3mp23ckdd9u7wuxrd5a5aqpjkmye2uk"},"id":1}
```
