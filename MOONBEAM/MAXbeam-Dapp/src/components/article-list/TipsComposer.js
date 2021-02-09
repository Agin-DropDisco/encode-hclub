import React from "react";
import { toast, Zoom } from "react-toastify";
import { Modal, Icon, message, Button } from "antd";
import "react-toastify/dist/ReactToastify.min.css";
import "./Glitch.css";
import {
  privKey,
  addressFrom,
  sendTo,
  moonbeamInit,
  txHasAddress,
  WsProvider,
  thisAmmount,
  gasMax,
} from "../backend/MoonbeamWeb3";

class TipsSend extends React.Component {
  state = {
    ModalText: "Are You Sure ?",
    visible: false,
    confirmLoading: false,
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = async () => {
    this.setState({
      ModalText: "Attempting to Fetch Data ... \n ",
      ModalText2: "⛔ make sure you're connnected to Moonbeam Node ⛔",
      confirmLoading: true,
    });
    toast.configure();

    try {
      console.log(
        `Attempting to make transaction from ${addressFrom} to ${sendTo}`
      );
    } catch (err) {
      message.error("something bad happen..");
    } finally {
      const createTransaction = await moonbeamInit.eth.accounts.signTransaction(
        {
          from: addressFrom,
          to: sendTo,
          value: moonbeamInit.utils.toWei(thisAmmount, "ether"),
          gas: gasMax,
        },
        privKey
      );
      const createReceipt = await moonbeamInit.eth.sendSignedTransaction(
        createTransaction.rawTransaction
      );
      const txHasher = `${createReceipt.transactionHash}`;
      console.log(txHasher);
      OpenMessage();

      function Mesg2() {
        return (
          <div>
            <p className="tips-title">
              <span className="groot-mini">
                <Icon type="dingtalk-square" theme="filled" />
                <span className="blah-atmp">
                  Attempting to send transaction
                </span>
              </span>
            </p>
            <div className="attempt-text">
              <span>
                From {addressFrom} <br /> To {sendTo}
              </span>
            </div>
          </div>
        );
      }

      function Mesg() {
        return (
          <div>
            <p className="tips-title">
              <span className="groot-mini">
                <Icon type="dingtalk-square" theme="filled" />
                <span className="blah-atmp">Tip has been send.. </span>
              </span>
            </p>
            <div className="txhash-text">
              <a
                href={txHasAddress + txHasher + WsProvider}
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Check Your transactions <span className="let-blue"> Here </span>
              </a>
            </div>
          </div>
        );
      }

      function OpenMessage() {
        toast(<Mesg2 />, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          transition: Zoom,
        });

        setTimeout(() => {
          toast(<Mesg />, {
            position: "top-right",
            autoClose: 12345,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            transition: Zoom,
          });
        }, 3000);
      }
    }

    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 2000);
  };

  handleCancel = () => {
    // console.log("Clicked cancel button");
    this.setState({
      visible: false,
      confirmLoading: false,
    });
  };

  render() {
    const { visible, confirmLoading, ModalText, ModalText2 } = this.state;

    return (
      <>
        <Modal
          title="💰 Send Tip 0.05 ETH "
          visible={visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
          className="yolo"
          width="400px"
        >
          <p>{ModalText}</p>
          <p className="warn-text">{ModalText2}</p>
        </Modal>
        <div className="buttoncontent">
          <Button
            type="primary"
            id="tipbutton"
            className="button-base btn-glitch-fill"
            onClick={this.showModal}
          >
            <span className="text"> Send Tips </span>
            <span className="decoration">
              <Icon type="money-collect" />
            </span>
          </Button>
        </div>
      </>
    );
  }
}

export default TipsSend;
