import React from "react";
import { Link } from "react-router-dom";

const PolkaOnboard = () => (
  <div>
    <Link className="fixed-ca to-subdev" to="/subdev-polka">
    <span className="text-fca">Local Substarte Development Chain</span></Link>
    <Link className="fixed-ca to-front-end" to="/frontend-polka">
    <span className="text-fca">Front-End Javascript</span></Link>
    <Link className="fixed-ca to-telemetry" to="/telemetry-polka">
    <span className="text-fca">Run A Polkadot Node And Add It To Telemetry</span></Link>
    <Link className="fixed-ca to-identity" to="/identity-polka">
    <span className="text-fca">Frame Identity</span></Link>
    <Link className="fixed-ca to-multisig" to="/multisig-polka">
    <span className="text-fca">Frame Multisig</span></Link>
    <Link className="fixed-ca to-development" to="/development-polka">
    <span className="text-fca">FRAME Development</span></Link>
  </div>
);

export default PolkaOnboard;
