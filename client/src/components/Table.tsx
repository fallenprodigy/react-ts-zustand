import { useEffect } from "react";
import DataTable from "react-data-table-component";
import useStore from "../store";

const columns = [
  {
    name: "ID",
    selector: (row: any) => row.id,
    sortable: true,
  },
  {
    name: "Name",
    selector: (row: any) => row.name,
    sortable: true,
  },
  {
    name: "Email",
    selector: (row: any) => row.email,
    sortable: true,
  },
  {
    name: "Gender",
    selector: (row: any) => row.gender,
    sortable: true,
  },
  {
    name: "Address",
    selector: (row: any) => row.address.city,
    sortable: true,
  },
  {
    name: "Phone",
    selector: (row: any) => row.phone,
    sortable: true,
  },
];

interface Props {
  newFormData: any;
  setNewFormData: any;
}

const Table = ({ newFormData, setNewFormData }: Props) => {
  const tableData = useStore((state: any) => state.tableData);

  console.log("newww", newFormData);

  const newTableData = [...tableData, newFormData];

  useEffect(() => {}, [tableData]);
  // setNewFormData(newTableData);
  console.log(newTableData, "yes");

  //   const show = newTableData.unshift(newFormData);
  //   setTableData(newTableData);
  //   };
  //    <>
  //               <Modal isOpen={modal} toggle={toggle}>
  //                 <ModalBody>
  //                   <h1>this is your chance</h1>
  //                 </ModalBody>
  //               </Modal>
  //               ;
  //             </>

  return (
    <div>
      <DataTable
        onRowDoubleClicked={(row, event) => {
          console.log(row, "axaxa");
          // setModalInfo(row);
        }}
        //    onRowDoubleClicked={(row, event) => {}}
        pointerOnHover={true}
        highlightOnHover={true}
        theme="dark"
        columns={columns}
        data={newTableData}
        //    selectableRows
      />
    </div>
  );
};

export default Table;
