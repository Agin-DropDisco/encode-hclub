import React from 'react';
import { Form,  Button,  Spin, message } from 'antd';
import { toast, Zoom } from "react-toastify";
import './Login.css';
import {
  moonbeamInit,
} from "../backend/MoonbeamWeb3";
class LoginForm extends React.Component {

  state = {

    loading: false

  };
  
  handleSubmit = async (e) => {
    

    e.preventDefault();
    toast.configure();

    const { userLogin, closeModal } = this.props;
  
      this.setState({
        visible: false,
        loading: true,
      });

      moonbeamInit.eth
        .getAccounts()
        .then((accounts) => {
          userLogin();
          closeModal();
          message.success("Login successfully.");
          console.log(accounts);
        }).catch((error) => {
          toast.dark("⛔️ You need to Run Moonbeam Node",  {
            position: "top-center",
            toastId: "Tcenter",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            textAlign: "center",
            transition: Zoom
            });
          console.log(error);
        });
  };
  
  
  render() {

    const { loading } = this.state;



    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button"
          block={true}
        >
          {loading ? <Spin tip="FETCHING DATA ..."></Spin> : "ENTER"}
        </Button>
        {/*Or <a href="">register now!</a>*/}
      </Form>
    );
  }
}

const WrappedLoginForm = Form.create()(LoginForm);

export { WrappedLoginForm };