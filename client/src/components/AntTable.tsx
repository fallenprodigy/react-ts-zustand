import { Button, Modal, Table } from "antd";
import { useEffect, useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import useStore from "../store";

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
                // onEditStudent(record);
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
    setData((pre: any) => {
      return pre.filter((user: any) => user.id !== record.id);
    });
    // Modal.confirm({
    //   title: "Are you sure, you want to delete this student record?",
    //   okText: "Yes",
    //   okType: "danger",
    //   onOk: () => {
    //     setDataSource((pre) => {
    //       return pre.filter((student) => student.id !== record.id);
    //     });
    //   },
    // });
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
    </div>
  );
};

export default AntTable;
