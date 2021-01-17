Create a Fixed Cap Asset
------------------------

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

``` {.hljs}
•> Response 
{"jsonrpc":"2.0","result":{"address":"X-fuji1448xtwm3mp23ckdd9u7wuxrd5a5aqpjkmye2uk"},"id":2}
{"jsonrpc":"2.0","result":{"address":"X-fuji1ma4eae2w9p6r3d7xwyl0z3ch2e950sup4v38r8"},"id":2} //make sure this address had a balances to use for fees
{"jsonrpc":"2.0","result":{"address":"X-fuji12mf4eytshkj3fvz9wnntyx8dp6g92ctkp0gkam"},"id":2}
```

-   go to the: https://wallet.avax.network
-   https://faucet.avax-test.network
-   Store Some Funds to Our Node

#### Create the Asset

``` {.hljs}
$ curl -X POST --data '{
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
                "amount": 23232323232
            }
        ],
        "from":["X-fuji1ma4eae2w9p6r3d7xwyl0z3ch2e950sup4v38r8"],
        "changeAddr":"X-fuji12mf4eytshkj3fvz9wnntyx8dp6g92ctkp0gkam",
        "username": "The_Weird_Brother",
        "password": "127.0.0.1:9650/ext/keystore"
    }
}' -H 'content-type:application/json;' 127.0.0.1:9650/ext/bc/X
```

``` {.hljs}
•> Response 
{"jsonrpc":"2.0","result":{"assetID":"Fv3diDMhP4nFaPxUhQXkayVqKbzgVa8ks9KAz3qCyLgwRmxjF","changeAddr":"X-fuji12mf4eytshkj3fvz9wnntyx8dp6g92ctkp0gkam"},"id":1}
```

-   Check Balance

``` {.hljs}
$ curl -X POST --data '{
    "jsonrpc":"2.0",
    "id"     :1,
    "method" :"avm.getBalance",
    "params" :{
        "address":"X-fuji1448xtwm3mp23ckdd9u7wuxrd5a5aqpjkmye2uk",
        "assetID":"Fv3diDMhP4nFaPxUhQXkayVqKbzgVa8ks9KAz3qCyLgwRmxjF"
    }
}' -H 'content-type:application/json;' 127.0.0.1:9650/ext/bc/X
```

``` {.hljs}
•> Response 
{"jsonrpc":"2.0","result":{"balance":"23232323232","utxoIDs":[{"txID":"Fv3diDMhP4nFaPxUhQXkayVqKbzgVa8ks9KAz3qCyLgwRmxjF","outputIndex":1}]},"id":1}
```

-   Send the Asset

``` {.hljs}
$  curl -X POST --data '{
    "jsonrpc":"2.0",
    "id"     :1,
    "method" :"avm.send",
    "params" :{
        "username": "The_Weird_Brother",
        "password": "127.0.0.1:9650/ext/keystore",
        "assetID" :"Fv3diDMhP4nFaPxUhQXkayVqKbzgVa8ks9KAz3qCyLgwRmxjF",
        "amount"  :777,
        "to"      :"X-fuji1ds7436xy6xuuehv7tjmt4x7gld5rl23k7pm920"
    }
}' -H 'content-type:application/json;' 127.0.0.1:9650/ext/bc/X   
```

``` {.hljs}
•> Response 
{"jsonrpc":"2.0","result":{"txID":"uMeKJU25XxY6wzJfzvoaf3HpW2sxRtVbQ1ms1grF2371LQCay","changeAddr":"X-fuji1448xtwm3mp23ckdd9u7wuxrd5a5aqpjkmye2uk"},"id":1}
```

-   Check Transaction Status

``` {.hljs}
$ curl -X POST --data '{
    "jsonrpc":"2.0",
    "id"     :1,
    "method" :"avm.getTxStatus",
    "params" :{
        "txID":"uMeKJU25XxY6wzJfzvoaf3HpW2sxRtVbQ1ms1grF2371LQCay"
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
        "address":"X-fuji1ds7436xy6xuuehv7tjmt4x7gld5rl23k7pm920",
        "assetID":"Fv3diDMhP4nFaPxUhQXkayVqKbzgVa8ks9KAz3qCyLgwRmxjF"
    }
}' -H 'content-type:application/json;' 127.0.0.1:9650/ext/bc/X
```

``` {.hljs}
•> Response 
{"jsonrpc":"2.0","result":{"balance":"777","utxoIDs":[{"txID":"uMeKJU25XxY6wzJfzvoaf3HpW2sxRtVbQ1ms1grF2371LQCay","outputIndex":0}]},"id":1}
```

### What has been done?:

-   Called createFixedCapAsset to create a fixed cap asset

-   Called getBalance to check address balances

-   Called send to transfer a quantity of asset

-   

    Prof. Screen Shoot [wbrother](./ss/term-result2.png)


