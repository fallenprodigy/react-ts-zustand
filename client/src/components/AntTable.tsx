import { Button, Input, Modal, Select, Table } from "antd";
import { useEffect, useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import useStore from "../store";
import { StyledButtons } from "../StyledApp";

const AntTable = () => {
  const randomNumber = Math.floor(Math.random() * 1000);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "1",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "2",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "3",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "4",
    },
    {
      title: "Address",
      dataIndex: "city",
      key: "5",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "6",
    },
    {
      key: "7",
      title: "Actions",
      render: (record: any) => {
        return (
          <>
            <EditOutlined
              onClick={() => {
                onEditUser(record);
              }}
            />
            <DeleteOutlined
              onClick={() => {
                onDeleteUser(record);
              }}
              style={{ color: "red", marginLeft: 12 }}
            />
          </>
        );
      },
    },
  ];
  const [isEditing, setIsEditing] = useState(false);
  const [editingUser, seteditingUser] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const tableData = useStore((state: any) => state.tableData);
  const [data, setData] = useState(tableData);
  const [addUser, setAddUser] = useState({
    id: randomNumber,
    name: "",
    email: "",
    gender: "",
    city: "",
    phone: "",
  });

  useEffect(() => {
    setData(tableData);
  }, [tableData]);

  const onAddYourInfo = () => {
    const newAddedInfo = {
      id: randomNumber,
      name: "Giorgi",
      email: "giorgi@.gmail.com",
      gender: "male",
      city: "Tbilisi",
      phone: "597062423",
    };
    setData((pre: any) => {
      return [...pre, newAddedInfo];
    });
  };

  const onDeleteUser = (record: any) => {
    Modal.confirm({
      title: "Are you sure, you want to delete this user record?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        setData((pre: any) => {
          return pre.filter((user: any) => user.id !== record.id);
        });
      },
    });
  };

  const onEditUser = (record: any) => {
    setIsEditing(true);
    seteditingUser({ ...record });
  };

  const resetEditing = () => {
    setIsEditing(false);
    seteditingUser(null);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setData((pre: any) => {
      return [...pre, addUser];
    });
    setAddUser({
      id: randomNumber,
      name: "",
      email: "",
      gender: "",
      city: "",
      phone: "",
    });
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Button style={{ margin: "1rem 0" }} onClick={showModal}>
        Add Your Info
      </Button>
      <Modal
        title="Add User Info"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <StyledButtons>
          <Input
            value={addUser.name}
            onChange={(e) => {
              setAddUser((pre: any) => {
                return { ...pre, name: e.target.value };
              });
            }}
            type="text"
            placeholder="Name"
          />
          <Input
            value={addUser.email}
            onChange={(e) => {
              setAddUser((pre: any) => {
                return { ...pre, email: e.target.value };
              });
            }}
            type="email"
            placeholder="Email"
          />
          <Select
            defaultValue={"select gender"}
            options={[
              { value: "male", label: "male" },
              { value: "female", label: "female" },
            ]}
            onChange={(e) => {
              setAddUser((pre: any) => {
                return { ...pre, gender: e };
              });
            }}
          />
          <Input
            value={addUser.city}
            onChange={(e) => {
              setAddUser((pre: any) => {
                return { ...pre, city: e.target.value };
              });
            }}
            type="text"
            placeholder="Address"
          />
          <Input
            value={addUser.phone}
            onChange={(e) => {
              setAddUser((pre: any) => {
                return { ...pre, phone: e.target.value };
              });
            }}
            type="text"
            placeholder="Phone"
          />
        </StyledButtons>
      </Modal>
      <Table
        rowKey={(r) => r.id}
        bordered={true}
        columns={columns}
        // pagination={false}
        dataSource={data}
      />
      <Modal
        title="Edit User Info"
        open={isEditing}
        okText="Save"
        onCancel={() => {
          resetEditing();
        }}
        onOk={() => {
          setData((pre: any) => {
            return pre.map((user: any) => {
              if (user.id === editingUser.id) {
                return editingUser;
              } else {
                return user;
              }
            });
          });
          resetEditing();
        }}
      >
        <StyledButtons>
          <Input
            value={editingUser?.name}
            onChange={(e) => {
              seteditingUser((pre: any) => {
                return { ...pre, name: e.target.value };
              });
            }}
          />
          <Input
            value={editingUser?.email}
            onChange={(e) => {
              seteditingUser((pre: any) => {
                return { ...pre, email: e.target.value };
              });
            }}
          />

          <Input
            value={editingUser?.city}
            onChange={(e) => {
              seteditingUser((pre: any) => {
                return { ...pre, city: e.target.value };
              });
            }}
          />
          <Select
            style={{ width: "100%" }}
            value={editingUser?.gender}
            options={[
              { value: "male", label: "male" },
              { value: "female", label: "female" },
            ]}
            onChange={(e) => {
              seteditingUser((pre: any) => {
                return { ...pre, gender: e };
              });
            }}
          />
          <Input
            value={editingUser?.phone}
            onChange={(e) => {
              seteditingUser((pre: any) => {
                return { ...pre, phone: e.target.value };
              });
            }}
          />
        </StyledButtons>
      </Modal>
    </div>
  );
};

export default AntTable;
