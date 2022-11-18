import { useEffect } from "react";
import PieChart from "./components/PieChart";
import useStore from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import { Text, Wrapper, Container } from "./StyledApp";
import AntTable from "./components/AntTable";

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
      <Container>
        <PieChart />
      </Container>
      <AntTable />
      {/* <Table newFormData={formData} setNewFormData={setFormData} /> */}
    </Wrapper>
  );
}

export default App;
