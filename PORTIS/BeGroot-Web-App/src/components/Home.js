import React from "react";
import { Icon } from 'semantic-ui-react'

const TwbHome = () => (
  <div className="home-base">
    <div className="basic-title">
      <h2>Hi, My name is BeGroot</h2>
      <h1>FullStack Developer</h1>
      <p className="p-base-title">
        Crafting web applications from front to back - every aspect considered.
        Whether it's designing
        <span> highly-interactive </span>
        user interfaces our
        <span> scalable reliable </span>
        back-end solutions.
        <span> BeGroot BeGood </span>
      </p>
    </div>
    <div className="navbar-right">
      <ul>
        <li>
        <a href="https://twitter.com/agin_webdev" target="_blank" rel="noopener noreferrer">
          <Icon.Group>
          <Icon name='twitter' size="large" />
          <Icon corner name='add' />
          </Icon.Group>
          </a>
        </li>
        <li>
        <a href="https://github.com/Agin-DropDisco" target="_blank" rel="noopener noreferrer">
          <Icon.Group>
          <Icon name='github alternate' size="large"  />
          <Icon corner name='add' />
          </Icon.Group>
        </a>
        </li>
        <li>
        <a href="https://www.facebook.com/Agin.Lee.park.Jin" target="_blank" rel="noopener noreferrer">
          <Icon.Group>
          <Icon name='facebook' size="large" />
          <Icon corner name='add' />
          </Icon.Group>
          </a>
        </li>
        <li>
        <a href="https://www.linkedin.com/in/agin-dropdisco-5555b7171/" target="_blank" rel="noopener noreferrer">
          <Icon.Group>
          <Icon name='linkedin' size="large" />
          <Icon corner name='add' />
          </Icon.Group>
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default TwbHome;
