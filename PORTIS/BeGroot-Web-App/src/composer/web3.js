import Portis from "@portis/web3";
import Web3 from "web3";



export const portis = new Portis(
  "7e779bc7-a772-40c4-ac95-30be427d39d5",
  "rinkeby"
);

export const web3 = new Web3(portis.provider);

export const transferTo = "0xBfBa42de8147de1B20731bD8150531c50cd10803";

export const thisamount = 0.005;



export const txScan = "https://rinkeby.etherscan.io/tx/ ";


portis.onLogin(() => {
  const butcha = document.getElementById("butcha");
  const butcha3 = document.getElementById("butcha3");
  butcha.innerHTML = ``;
  butcha3.innerHTML = ` LOGOUT`;
  butcha3.classList.add("border-yes");
  console.log(
    "%c%s",
    "color: green; background: yellow; font-size: 20px;",
    "⚡ Congratz You've been Loggin Now"
  );
});

portis.onLogout(() => {
  const butcha = document.getElementById("butcha");
  const butcha3 = document.getElementById("butcha3");
  butcha.innerHTML = ` LOGIN `;
  butcha3.innerHTML = ``;
  butcha3.classList.remove("border-yes");
  console.log(
    "%c%s",
    "color: white; background: red; font-size: 20px;",
    "⭕ You've been Logged Out Now"
  );
});

export const logoutPortis = () => {
  portis.logout();
};

export const loginPortis = () => {
  portis.showPortis();
};

export const web3networks = {
    "1": {
        name: "Ethereum (rinkeby)",
        explorerTx: "https://rinkeby.etherscan.io/tx/",
        explorerAddress: "https://rinkeby.etherscan.io/address"
    }
};