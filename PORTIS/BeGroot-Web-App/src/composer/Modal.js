import React from "react";
import { Button, Icon, Modal, Image } from "semantic-ui-react";
import { web3, portis, transferTo, thisamount } from "./web3";
import { toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function exampleReducer(state, action) {
  switch (action.type) {
    case "CONFIG_CLOSE_ON_DIMMER_CLICK":
      return { ...state, closeOnDimmerClick: action.value };
    case "CONFIG_CLOSE_ON_ESCAPE":
      return { ...state, closeOnEscape: action.value };
    case "OPEN_MODAL":
      return { ...state, open: true };
    case "CLOSE_MODAL":
      return { ...state, open: false };
    default:
      throw new Error();
  }
}

const ModalExampleSize = () => {

  const [state, dispatch] = React.useReducer(exampleReducer, {
    closeOnEscape: true,
    closeOnDimmerClick: true,
    open: false,
    dimmer: undefined,
    size: undefined,
  });

  const { open, closeOnEscape, closeOnDimmerClick} = state;

  async function sendTips() {

    toast.configure();
    portis.showPortis();

    try {


    } catch (error) {
      console.log(`Error: ${error}`);
    } finally {
      const accounts = await portis.provider.enable();
      const txHasher = await sendEther(transferTo, accounts[0], etherToHexWei(thisamount));
      const txScan = "https://rinkeby.etherscan.io/tx/";

      function Mesg() {

          return (
            <div>
            <p className="tips-title">
            <Image src={`${process.env.PUBLIC_URL}/groot.png`} size='mini' className="groot-mini"/>
            Tips has been send 
            </p>
            <div className="txhash-text">
            <a href= {txScan  +  txHasher} target="_blank"  rel="noopener noreferrer"> Check Your transactions <span className="let-blue"> Here </span></a>
            </div>
          </div>
          );
    };
      toast(<Mesg />, {
        position: "top-right",
        autoClose: 12345,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        transition: Zoom
        });
      console.log(
        "%c%s",
        "color: green; background: yellow; font-size: 15px;",
        "Tip Send 💸"
      );
      console.log(
        "%c%s",
        "color: green; background: yellow; font-size: 20px;",
        "🍀 Thank you for everything"
      );
      dispatch({ type: "CLOSE_MODAL"});
    }
  }

  function sendEther(transferTo, transferFrom, value) {
    return web3.currentProvider.send("eth_sendTransaction", [
      {
        from: transferFrom,
        to: transferTo,
        value: value,
      },
    ]);
  }

  function etherToHexWei(value) {
    const wei = value * 10 ** 18;
    const hexWei = wei.toString(16);
    return `0x${hexWei}`;
  }


  return (
    <>
      <Button
        style={{
          position: "absolute",
          bottom: 0,
          padding: "10px",
          backgroundColor: "#0bb0d8",
          right: "0px",
          float: "right"
        }}
        onClick={() => dispatch({ type: "OPEN_MODAL", size: "mini" })}
      >
        <span role="img" aria-label="money">
          💰
        </span>
        Send Tip for me yayy?
      </Button>

      <Modal
        closeOnEscape={closeOnEscape}
        closeOnDimmerClick={closeOnDimmerClick}
        open={open}
        size="mini"
        onClose={() => dispatch({ type: "CONFIG_CLOSE_ON_ESCAPE" })}
      >
        <Modal.Header>
          <span role="img" aria-label="money">
            💰
          </span>
          Send Tip || 0.005 ETH ||
        </Modal.Header>
        <Modal.Content>
          <p>Are you sure you want to send tip for meh ?</p>
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={() => dispatch({ type: "CLOSE_MODAL" })}>
            <Icon name="reply all" /> CLOSE
          </Button>
          <Button positive onClick={sendTips}>
            PROCEED <Icon name="sign-out alternate" />
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  );
};

export default ModalExampleSize;
