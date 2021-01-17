import React from "react";
import Header from "./components/Header";
import PolkaOnboard from "./components/PolkadotOnboarding";
import AvaTutor from "./components/AvalancheTutor";
import TwbHome from "./components/Home";
import AvaxCfca from "./pages/FixedCapCompose";
import AvaxCVca from "./pages/VariableCapCompose";
import AvaxNFts from "./pages/NftsAvaxCompose";
import AvaxSubBlockchain from "./pages/SubBlockAvaxCompose";
import PolkaSubDev from "./pages/SubDevPolkaCompose";
import PolkaFrontEnd from "./pages/FrontendPolkaCompose";
import PolkaTelemetry from "./pages/TelemetryPolkaCompose";
import PolkaIdentity from "./pages/IdentityPolkaCompose";
import PolkaMultisig from "./pages/MultisigPolkaCompose";
import PolkaDevelopment from "./pages/DevelopmentPolkaCompose";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.scss";

function App() {

  return (
    <div>
      <Router>
        <div className="application">
          <main id="main">
            <Header />
            <div className="container">
              <div className="wrapper">
                <div className="home">
                  <Switch>
                    <Route exact path="/" component={TwbHome} />
                    <Route
                      exact
                      path="/polkadot-onboarding"
                      component={PolkaOnboard}
                    />
                    <Route
                      exact
                      path="/avalanche-tutorial"
                      component={AvaTutor}
                    />
                    <Route
                      exact
                      path="/portis-tutorial"
                      component={PortisTut}
                    />
                    <Route
                      exact
                      path="/moonbeam-tutorial"
                      component={MoonBeamTut}
                    />
                    <Route exact path="/subdev-polka" component={Polkadot1} />
                    <Route exact path="/frontend-polka" component={Polkadot2} />
                    <Route
                      exact
                      path="/telemetry-polka"
                      component={Polkadot3}
                    />
                    <Route exact path="/identity-polka" component={Polkadot4} />
                    <Route exact path="/multisig-polka" component={Polkadot5} />
                    <Route
                      exact
                      path="/development-polka"
                      component={Polkadot6}
                    />
                    <Route exact path="/CFCA" component={AvaC1} />
                    <Route exact path="/CVCA" component={AvaC2} />
                    <Route exact path="/CNFT" component={AvaC3} />
                    <Route exact path="/CASBLOCK" component={AvaC4} />
                  </Switch>
                </div>
              </div>
            </div>
          </main>
        </div>
      </Router>
    </div>
  );
}
function PortisTut() {
  return <p className="title-tutorial">Coming Soon</p>;
}
function MoonBeamTut() {
  return <p className="title-tutorial">Coming Soon</p>;
}
function AvaC1() {
  return (
    <div className="wrapper-ehc">
      <p className="title-tutorial">
        On this Section We will LEarn How to Create Fixed Cap Asset
      </p>
      <AvaxCfca />
    </div>
  );
}
function AvaC2() {
  return (
    <div className="wrapper-ehc">
      <p className="title-tutorial">
        On this Section We will LEarn How to Create Variable Cap-Asset
      </p>
      <AvaxCVca />
    </div>
  );
}
function AvaC3() {
  return (
    <div className="wrapper-ehc">
      <p className="title-tutorial">
        On this Section We will LEarn How to Create NFT Asset
      </p>
      <AvaxNFts />
    </div>
  );
}
function AvaC4() {
  return (
    <div className="wrapper-ehc">
      <p className="title-tutorial">
        On this Section We will LEarn How to Create Subnet & New Blockchain
      </p>
      <AvaxSubBlockchain />
    </div>
  );
}

function Polkadot1() {
  return (
    <div className="wrapper-ehc">
      <p className="title-tutorial">
        On this Section We will LEarn How to Launched Local SUbtrate Development
        Chain
      </p>
      <PolkaSubDev />
    </div>
  );
}
function Polkadot2() {
  return (
    <div className="wrapper-ehc">
      <p className="title-tutorial">
        On this Section We will LEarn How to Create Front-End Javascript
      </p>
      <PolkaFrontEnd />
    </div>
  );
}
function Polkadot3() {
  return (
    <div className="wrapper-ehc">
      <p className="title-tutorial">
        On this Section We will LEarn How to run Polkadot node & add it to the
        Telemetry
      </p>
      <PolkaTelemetry />
    </div>
  );
}
function Polkadot4() {
  return (
    <div className="wrapper-ehc">
      <p className="title-tutorial">
        On this Section We will LEarn How to Set Identity on Local Development Chain & Polkadot Development Chain
      </p>
      <PolkaIdentity />
    </div>
  );
}
function Polkadot5() {
  return (
    <div className="wrapper-ehc">
      <p className="title-tutorial">
        On this Section We will LEarn How to Create Multisig Pallet
      </p>
      <PolkaMultisig />
    </div>
  );
}
function Polkadot6() {
  return (
    <div className="wrapper-ehc">
      <p className="title-tutorial">
        On this Section We will LEarn How to Create FRAME Development
      </p>
      <PolkaDevelopment />
    </div>
  );
}
export default App;
