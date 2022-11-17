import { useEffect } from "react";
import AmazingModal from "./components/Modal";
import PieChart from "./components/PieChart";
import Table from "./components/Table";
import useStore from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import { Text, Wrapper } from "./StyledApp";
import { Button } from "reactstrap";

function App() {
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

  return (
    <Wrapper>
      <Text>the best react table in the world (no joke)</Text>
      <AmazingModal />
      <Button color="danger">Delete</Button>
      <PieChart />
      <Table />
    </Wrapper>
  );
}

export default App;
