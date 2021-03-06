import React, { useEffect, useState } from 'react';
import { Table, Grid, Button, Icon} from 'semantic-ui-react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useSubstrate } from './substrate-lib';

export default function Main (props) {
  const { api, keyring } = useSubstrate();
  const accounts = keyring.getPairs();
  const [balances, setBalances] = useState({});

  useEffect(() => {
    const addresses = keyring.getPairs().map(account => account.address);
    let unsubscribeAll = null;

    api.query.system.account
      .multi(addresses, balances => {
        const balancesMap = addresses.reduce((acc, address, index) => ({
          ...acc, [address]: balances[index].data.free.toHuman()
        }), {});
        setBalances(balancesMap);
      }).then(unsub => {
        unsubscribeAll = unsub;
      }).catch(console.error);

    return () => unsubscribeAll && unsubscribeAll();
  }, [api, keyring, setBalances]);

  return (
    <Grid.Column width={8}>
       <h1>Address</h1>
      <Table celled striped size='small'>
      <Table.Header>
      <Table.Row>
        <Table.HeaderCell style={{ textAlign: 'center'}}>Name</Table.HeaderCell>
        <Table.HeaderCell style={{ textAlign: 'center'}}>Address</Table.HeaderCell>
        <Table.HeaderCell style={{ textAlign: 'center'}}><Icon name='deaf'/></Table.HeaderCell>
      </Table.Row>
    </Table.Header>
        <Table.Body>{accounts.map(account =>
          <Table.Row key={account.address}>
            <Table.Cell style={{ textAlign: 'center', textTransform: 'Uppercase' }}>{account.meta.name}</Table.Cell>
            <Table.Cell>
              <span style={{ display: 'inline-block', minWidth: '31em' }}>
                {account.address}
              </span>
              </Table.Cell>
            <Table.Cell>
              <CopyToClipboard text={account.address}>
                <Button
                  basic
                  circular
                  compact
                  size='mini'
                  color='orange'
                  icon='copy outline'
                />
              </CopyToClipboard>
            </Table.Cell>
          </Table.Row>
        )}
        </Table.Body>
      </Table>
    </Grid.Column>
  );
}
