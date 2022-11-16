import DataTable from "react-data-table-component";
import useStore from "../store";

const columns = [
  {
    name: "ID",
    selector: (row: any) => row.id,
  },
  {
    name: "Name",
    selector: (row: any) => row.name,
  },
  {
    name: "Email",
    selector: (row: any) => row.email,
  },
  {
    name: "Gender",
    selector: (row: any) => row.gender,
  },
  {
    name: "Address",
    selector: (row: any) => row.address.city,
  },
  {
    name: "Phone",
    selector: (row: any) => row.phone,
  },
];

// const data = [
//   {
//     id: 1,
//     title: "Beetlejuice",
//     year: "1988",
//   },
//   {
//     id: 2,
//     title: "Ghostbusters",
//     year: "1984",
//   },
// ];

const Table = () => {
  const tableData = useStore((state: any) => state.tableData);

  console.log(tableData);

  //   const dd = tableData.map(())

  return (
    <div>
      <DataTable columns={columns} data={tableData} selectableRows />
    </div>
  );
};

export default Table;
