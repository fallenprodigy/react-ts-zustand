import { useEffect } from "react";
import useStore from "../store";

function Home() {
  const tableData = useStore((state: any) => state.tableData);
  const setTableData = useStore((state: any) => state.setTableData);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:4000/data");
      const json = await response.json();

      if (response.ok) {
        setTableData(json);
      }
    };
    fetchData();
  }, [setTableData]);

  console.log(tableData, "Axaxa");
  return (
    <div>
      <h1>giorgi</h1>
    </div>
  );
}

export default Home;
