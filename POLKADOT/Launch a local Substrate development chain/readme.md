Local Substarte Development Chain
---------------------------------

### Requirement

-   [Subtrate](https://github.com/paritytech/substrate)
-   [Rust](https://rustup.rs/)
-   [Node Js](https://nodejs.org)
-   [Yarn](https://yarnpkg.com)
-   [LLVM](https://llvm.org/)
-   [Substrate Node
    Template](https://github.com/substrate-developer-hub/substrate-node-template)
-   [Substrate Frontend
    Template](https://github.com/substrate-developer-hub/)

##### Follow the commands below to prepare the environment. Some can be skipped if already installed. {#follow-the-commands-below-to-prepare-the-environment-some-can-be-skipped-if-already-installed}

``` {.hljs}
$ sudo apt update
$ sudo apt install -y build-essential ocaml ocamlbuild automake autoconf libtool wget python libssl-dev git cmake perl pkg-config curl llvm-10 clang-10 libclang-10-dev
$ curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
$ source ~/.cargo/env
$ curl -sL https://deb.nodesource.com/setup_current.x | sudo -E bash -
$ sudo apt-get install -y nodejs
$ sudo npm install -g yarn
```

##### Test the installation by running the following commands

``` {.hljs}
$ rustup --version
$ cargo --version
$ llvm-ar-10 --version
$ node --version
$ yarn --version
```

#### Clone Substrate Node Template and Frontend Template and run the initialization script

``` {.hljs}
$ git clone https://github.com/substrate-developer-hub/substrate-node-template.git
$ cd substrate-node-template
$ make init
$ make build

$ git clone https://github.com/substrate-developer-hub/substrate-front-end-template.git
$ cd substrate-front-end-template
$ yarn install
```

#### Run Substrate Node Template by running:

``` {.hljs}
$ cd substrate-node-template
$ ./target/release/node-template --dev --tmp
```

#### Start Frontend Template

-   navigate to Frontend Template Directory

``` {.hljs}
$ cd substrate-front-end-template
$ yarn run start
```

#### Interact with Frontend Template

eg:

-   Transfer ammount from - to:

![](./app2.png)

-   Remarks

![](./app1.png)

### What has been done?:

-   Launch local substrate development chain

##### Resources

-   [Polkadot
    Wiki](https://wiki.polkadot.network/docs/en/learn-identity)
-   [Substrate Node
    Template](https://github.com/substrate-developer-hub/substrate-node-template)
-   [Substrate Front-End
    Template](https://github.com/substrate-developer-hub/substrate-front-end-template)
-   [On chain Remarks API
    Documentation](https://substrate.dev/rustdocs/v2.0.0-rc6/frame_system/enum.Call.html#variant.remark)

