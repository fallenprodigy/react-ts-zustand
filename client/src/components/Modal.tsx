import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Form,
  FormGroup,
  Label,
} from "reactstrap";
import { InputWrapper } from "../StyledApp";

function AmazingModal(args: any) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="primary" onClick={toggle}>
        Add
      </Button>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Enter Your Info</ModalHeader>
        <ModalBody>
          <Form>
            <InputWrapper>
              <Input placeholder="Name" type="text" />
              <Input placeholder="Email" type="email" />
              <Input id="exampleSelect" name="select" type="select">
                <option hidden>Select Gender</option>
                <option>male</option>
                <option>female</option>
              </Input>

              <Input placeholder="Address" type="text" />
              <Input placeholder="Phone" type="text" />
            </InputWrapper>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Add Info
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default AmazingModal;
