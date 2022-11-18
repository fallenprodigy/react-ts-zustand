import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Form,
} from "reactstrap";
import { InputWrapper } from "../StyledApp";

interface Props {
  formData: any;
  setFormData: any;
}

function AmazingModal({ formData, setFormData }: Props) {
  // const [data, setData] = useState(formData);
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   gender: "",
  //   address: "",
  //   phone: "",
  // });
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
    // data.unshift(formData.name);
    // setFormData({
    //   id: "",
    //   name: "",
    //   email: "",
    //   gender: "",
    //   address: "",
    //   phone: "",
    // });
  };

  // console.log(formData);
  return (
    <div>
      <Button color="primary" onClick={toggle}>
        Add Your Info
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader style={{ color: "#000" }} toggle={toggle}>
          Enter Your Info
        </ModalHeader>
        <ModalBody>
          <Form>
            <InputWrapper>
              <Input
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                value={formData.name}
                placeholder="Name"
                type="text"
              />
              <Input
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                value={formData.email}
                placeholder="Email"
                type="email"
              />
              <Input
                onChange={(e) =>
                  setFormData({ ...formData, gender: e.target.value })
                }
                value={formData.gender}
                id="exampleSelect"
                name="select"
                type="select"
              >
                <option hidden>Select Gender</option>
                <option>male</option>
                <option>female</option>
              </Input>

              <Input
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
                value={formData.address}
                placeholder="Address"
                type="text"
              />
              <Input
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                value={formData.phone}
                placeholder="Phone"
                type="text"
              />
            </InputWrapper>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            //   onSubmit={handleFormSubmit}
            type="submit"
            color="primary"
            onClick={toggle}
          >
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
