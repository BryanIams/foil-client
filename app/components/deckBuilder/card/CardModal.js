import React from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';

const CardModal = (props) => (
  <div>
    <Modal trigger={<Button>Bigger</Button>} basic size="small">
      <Header icon="archive" content="Archive Old Messages" />
      <Modal.Content>
        <p>{props.card.title}</p>
      </Modal.Content>
      <Modal.Actions>
        <Button basic color="red" inverted>
          <Icon name="remove" /> No
        </Button>
        <Button color="green" inverted>
          <Icon name="checkmark" /> Yes
        </Button>
      </Modal.Actions>
    </Modal>
  </div>
);

export default CardModal;
