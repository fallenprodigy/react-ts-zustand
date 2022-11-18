import { Button, Input, Modal, Select, Table } from "antd";
import { useEffect, useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import useStore from "../store";
import { StyledButtons } from "../StyledApp";

const AntTable = () => {
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
  const tableData = useStore((state: any) => state.tableData);
  const [data, setData] = useState(tableData);

  useEffect(() => {
    setData(tableData);
  }, [tableData]);

  const onAddYourInfo = () => {
    const randomNumber = Math.floor(Math.random() * 1000);
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

  return (
    <div>
      <Button style={{ margin: "1rem 0" }} onClick={onAddYourInfo}>
        Add Your Info
      </Button>
      <Table
        rowKey={(r) => r.id}
        bordered={true}
        columns={columns}
        // pagination={false}
        dataSource={data}
      />
      <Modal
        title="Edit User"
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
