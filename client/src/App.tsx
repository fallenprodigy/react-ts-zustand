import { useEffect } from "react";
import PieChart from "./components/PieChart";
import Table from "./components/Table";
import useStore from "./store";
import { Text, Wrapper } from "./StyledApp";

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
      <Text>the best react table you will ever see (no joke)</Text>
      <PieChart />
      <Table />
    </Wrapper>
  );
}

export default App;
