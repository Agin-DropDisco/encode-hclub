import React  from 'react';

import {
  Menu,
  Container,
  Image,
  Label
} from 'semantic-ui-react';

export default function SelectMove() {
  return (
    <Menu attached='top' tabular
      style={{
        borderColor: 'transparent',
        background: '#2b2d3c',
        paddingTop: '1em',
        paddingBottom: '1em', }}>
      <Container>
        <Menu.Menu>
          <Image
            src={`${process.env.PUBLIC_URL}/assets/substrate-logo.png`}
            size='mini' style={{ background: '#FFF' }} />
        </Menu.Menu>
        <Menu.Menu position='right' style={{ alignItems: 'center' }}>
      <Label as='a' color='blue' 
      href ='https://github.com/TheWeirdBrother/secretEHC/tree/main/POLKADOT/Frontend-Javascript'
      target='_blank' >
         <Image
            src={`${process.env.PUBLIC_URL}/assets/veronika.jpg`}
            size='mini' floated='left'/> The Weird Brother
    </Label>
        </Menu.Menu>
      </Container>
    </Menu>
  );
}
