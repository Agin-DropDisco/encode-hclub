import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import Hamburger from "./Hamburger";
import { logoutPortis, loginPortis } from "../composer/web3";




const Header = ({ history }) => {
  // State of our Menu
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: "Menu",
  });
  // State of our button
  const [disabled, setDisabled] = useState(false);

  //Use Effect
  useEffect(() => {
    //Listening for page changes.
    history.listen(() => {
      setState({ clicked: false, menuName: "Menu" });
    });
  }, [history]);

  // Toggle menu
  const handleMenu = () => {
    disableMenu();
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: "Close"
      });
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: "Menu",
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: "Close",
      });
    }
  };

  //Determine if out menu button should be disabled
  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  return (
    <header>
      <div id="weirdbrother-logo">
        <div id="logo">
          <Link to="/">
            <div className="weirdbrother-icon">
              <span className="logo-name">BeGroot</span>
            </div>
          </Link>
        </div>
      </div>
      <div className="menu">
        <button disabled={disabled} onClick={handleMenu}>
          {state.menuName}
          <div className="nav-icon">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
      <div className="login">
        <button className="r155" id="butcha" onClick={loginPortis}>
        <span className="tLOGIN">LOGIN</span>
        </button>
        <button className="r225 border-none" id="butcha3" onClick={logoutPortis}>
        <span className="tLOGOUT"></span>
        </button>
      </div>
      <div id="lines">
        <div className="left-line line">
          <div className="s-line top"></div>
          <div className="g-line"></div>
          <div className="s-line bot"></div>
        </div>
        <div className="right-line line">
          <div className="s-line top"></div>
          <div className="g-line"></div>
          <div className="s-line bot"></div>
        </div>
      </div>
      <Hamburger state={state} />
    </header>
  );
};

export default withRouter(Header);
