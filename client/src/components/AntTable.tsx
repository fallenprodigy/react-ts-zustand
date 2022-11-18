import { Table } from "antd";
import useStore from "../store";

const columns = [
  {
    title: "ID",
    dataIndex: "id",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Gender",
    dataIndex: "gender",
  },
  {
    title: "Address",
    dataIndex: ["address", "city"],
  },
  {
    title: "Phone",
    dataIndex: "phone",
  },
];

const AntTable = () => {
  const tableData = useStore((state: any) => state.tableData);

  return (
    <div>
      <Table
        bordered={true}
        columns={columns}
        pagination={false}
        dataSource={tableData}
      />
    </div>
  );
};

export default AntTable;
