import * as React from 'react';
import { Modal, Portal, Text, Provider } from 'react-native-paper';

const MyComponent = () => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);

  const hideModal = () => setVisible(false);

  return (
    <Provider>
      <Portal>
        <Modal visible={visible} onDismiss={hideModal}>
          <Text>Example Modal</Text>
        </Modal>
      </Portal>
    </Provider>
  );
};
