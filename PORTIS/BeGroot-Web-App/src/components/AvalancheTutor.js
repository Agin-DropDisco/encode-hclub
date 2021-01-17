import React from 'react';
import { Link } from "react-router-dom";


const AvalancheTutor = () => (
  <div>
    <Link className="fixed-ca to-fca" to="/CFCA">
    <span className="text-fca">CREATED FIXED-CAP ASSET</span></Link>
    <Link className="fixed-ca to-var-ca" to="/CVCA">
    <span className="text-fca">CREATED VARIABLE-CAP ASSET</span></Link>
    <Link className="fixed-ca to-NFT-ca" to="/CNFT">
    <span className="text-fca">CREATED NFT ASSET</span></Link>
    <Link className="fixed-ca to-sbb" to="/CASBLOCK">
    <span className="text-fca">CREATED SUBNET & NEW BLOCKCHAIN</span></Link>
  </div>
);

export default AvalancheTutor;