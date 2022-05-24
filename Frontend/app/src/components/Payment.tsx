import {
  Modal,
  Button,
  ScrollView,
  Text,
  Center,
  VStack,
  NativeBaseProvider,
  Checkbox,
} from "native-base";
import React from "react";

type paymentProps = {
  visible: boolean;
};

const PaymentModal = ({ visible }: paymentProps) => {
  const [modalVisible, setModalVisible] = React.useState(visible);
  return (
    <>
      <Modal isOpen={modalVisible} onClose={setModalVisible}>
        <Modal.Content
          w="100%"
          style={{ marginBottom: 0, marginTop: "auto" }}
          h="xs"
        >
          <Modal.CloseButton />
          <Modal.Header
            style={{
              backgroundColor: "#1D2A3A",
              alignItems: "center",
            }}
          >
            <Text color="white">Choose Payment Option</Text>
          </Modal.Header>
          <Modal.Body>
            <VStack space="7">
              <Checkbox isChecked colorScheme="blue" value="Something">
                Google Pay
              </Checkbox>
              <Checkbox colorScheme="green" value="Something">
                UPI
              </Checkbox>
              <Checkbox colorScheme="green" value="Something">
                Net Banking
              </Checkbox>
              <Checkbox colorScheme="green" value="Something">
                Debit Card
              </Checkbox>
            </VStack>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </>
  );
};
export default PaymentModal;
