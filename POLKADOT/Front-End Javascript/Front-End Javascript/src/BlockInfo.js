import React, { useEffect, useState } from 'react';
import { Grid, Label, Table,} from 'semantic-ui-react';
import { useSubstrate } from './substrate-lib';

function Main(props) {
  const { api } = useSubstrate();
  const [blockInfo, setBlockInfo] = useState();

  useEffect(() => {
    const unsubscribeAll = null;
    const getInfo = async () => {
      try {
        api.rpc.chain.subscribeNewHeads((header) => {
          setBlockInfo(header);
        });
      } catch (e) {
        console.error(e);
      }
    };
    getInfo();
    return () => unsubscribeAll && unsubscribeAll();
  }, [api.derive.chain, api.rpc.chain, blockInfo]);

  return (
    <Grid.Column>
      {blockInfo && (
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Item</Table.HeaderCell>
              <Table.HeaderCell>Data</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>
                <Label pointing='right'>CURRENT BLOCK</Label>
              </Table.Cell>
              <Table.Cell>{blockInfo.number.toNumber()}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Label color='blue' tag>HASH</Label>
              </Table.Cell>
              <Table.Cell>{blockInfo.hash.toHuman()}</Table.Cell>
            </Table.Row>
            <Table.Row>
            <Table.Cell>
            <Label color='blue' tag>PARENT HASH</Label>
            </Table.Cell>
              <Table.Cell>{blockInfo.parentHash.toHuman()}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Label pointing='right'>EXTRINSICS ROOT</Label></Table.Cell>
              <Table.Cell>{blockInfo.extrinsicsRoot.toHuman()}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Label pointing='right'>STATE ROOT</Label></Table.Cell>
              <Table.Cell>{blockInfo.stateRoot.toHuman()}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      )}
    </Grid.Column>
  );
}

export default function BlockInfo(props) {
  const { api } = useSubstrate();
  return api.rpc &&
    api.rpc.system &&
    api.rpc.chain &&
    api.derive.chain &&
    api.derive.chain.bestNumber &&
    api.rpc.chain.getBlock &&
    api.rpc.chain.subscribeNewHeads ? (
    <Main {...props} />
  ) : null;
}
