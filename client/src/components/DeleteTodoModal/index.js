import React from 'react';

import { Button, Header, Icon, Modal } from 'semantic-ui-react';

export default (props) => (
  <Modal
    trigger={ <Button color='red' content='Delete' size='small'/> }
    basic
    style={{ width: '450px'}}
  >
    <Header icon='archive' content='Delete old Todo'/>
    <Modal.Content>
      <p>Are you sure you want to delete this todo?</p>
      <p>{props.text}</p>
    </Modal.Content>
    <Modal.Actions>
      <Button
        fluid
        negative
        onClick={ () => props.handleDelete(props.id)}
      >
        <Icon name='remove'/> Are you sure you want to delete?
      </Button>
    </Modal.Actions>
  </Modal>
);
