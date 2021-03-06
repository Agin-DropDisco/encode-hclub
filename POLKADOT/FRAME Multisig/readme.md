FRAME Multisig
--------------

##### [Substrate Node Template File](.//substrate-node-template)

##### [Front-End Template File](./front-end-template)

##### [Step by step how to add pallet to the runtime](https://palletruntime-6541c.web.app/)

### Requirement

-   [Subtrate](https://github.com/paritytech/substrate)
-   [Rust](https://rustup.rs/)
-   [Node Js](https://nodejs.org)
-   [LLVM](https://llvm.org/)
-   [Yarn](https://yarnpkg.com/)
-   [Substrate Node
    Template](https://github.com/substrate-developer-hub/substrate-node-template)
-   [Substrate Front-End
    Template](https://github.com/substrate-developer-hub/substrate-front-end-template)

##### Follow the commands below to prepare the environment. Some can be skipped if already installed. {#follow-the-commands-below-to-prepare-the-environment-some-can-be-skipped-if-already-installed}

``` {.hljs}
$ sudo apt update
$ sudo apt install -y build-essential ocaml ocamlbuild automake autoconf libtool wget python libssl-dev git cmake perl pkg-config curl llvm-10 clang-10 libclang-10-dev
$ curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
$ source ~/.cargo/env
$ curl -sL https://deb.nodesource.com/setup_current.x | sudo -E bash -
$ sudo apt-get install -y nodejs
```

##### Test the installation by running the following commands

``` {.hljs}
$ rustup --version
$ cargo --version
$ llvm-ar-10 --version
$ node --version
$ yarn --version
```

#### Clone Substrate and Frontend Template and run the initialization script

``` {.hljs}
$ git clone https://github.com/substrate-developer-hub/substrate-node-template.git
$ cd substrate-node-template
$ make init
$ make build

$ git clone https://github.com/substrate-developer-hub/substrate-front-end-template.git
$ cd substrate-front-end-template
$ yarn install
```

#### connect to Local Node

``` {.hljs}
./target/release/node-template --name TheWeirdBrother --dev --tmp
```

#### running frontend template

``` {.hljs}
$ yarn start
```

#### Now Configure the Apps

##### todo:

-   go to the : [Polkadot apps](https://polkadot.js.org/apps/#/accounts)
-   Click Multisig, Chose address & create name of your Multisig
-   next: Interact with Front-End Template

##### eg:

### Interact with Frontend Template & Polkadotjs Apps {#interact-with-frontend-template--polkadotjs-apps}

![](./ss/app1.png) ![](./ss/app2.png) ![](./ss/app3.png)

### What has been done?:

-   Add the Multisig Pallet

##### Resources

-   [Polkadot
    Wiki](https://wiki.polkadot.network/docs/en/learn-identity)
-   [PolkadotJS Apps](https://polkadot.js.org/apps/#/explorer)
-   [Polkadot-JS API](https://polkadot.js.org/apps/#/explorer)
-   [Substrate Node Template](https://polkadot.js.org/apps/#/explorer)
-   [Substrate Front-End
    Template](https://github.com/substrate-developer-hub/substrate-front-end-template)
-   [Frame Multisig
    Pallet](https://substrate.dev/rustdocs/v2.0.0-rc6/pallet_multisig/index.html)
-   [How to Add Frame Pallet to a Substrate Node
    Template](https://polkadot.js.org/apps/#/explorer)

