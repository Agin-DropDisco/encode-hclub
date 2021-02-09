const Web3 = require('web3');

// Variables definition
export const privKey =
   '99b3c12287537e38c90a9219d4cb074a89a16e9cdb20bf85728ebd97c343e342'; // Genesis private key
export const addressFrom = '0x6Be02d1d3665660d22FF9624b7BE0551ee1Ac91b';
export const sendTo = '0xce5783B241F27F786579cB4F26cD0a2E4fD15318'; // Change sendTo
export const moonbeamInit = new Web3('http://localhost:9933');
export const txHasAddress = "https://expedition.dev/tx/";
export const WsProvider = "?rpcUrl=http://127.0.0.1:9933";
export const thisAmmount = '0.05';
export const gasMax = 21234;
