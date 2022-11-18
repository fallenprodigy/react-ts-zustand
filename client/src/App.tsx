import { useState, useEffect } from "react";
import AmazingModal from "./components/Modal";
import PieChart from "./components/PieChart";
import Table from "./components/Table";
import useStore from "./store";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Text, Wrapper, Container, StyledButtons } from "./StyledApp";
import { Button } from "reactstrap";
import AntTable from "./components/AntTable";

function App() {
  const setTableData = useStore((state: any) => state.setTableData);

  const [formData, setFormData] = useState({
    id: Math.floor(Math.random() * 100),
    name: "",
    email: "",
    gender: "",
    address: "",
    phone: "",
  });

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
        <StyledButtons>
          <AmazingModal formData={formData} setFormData={setFormData} />
          <Button color="danger">Delete</Button>
        </StyledButtons>
      </Container>
      <AntTable />
      {/* <Table newFormData={formData} setNewFormData={setFormData} /> */}
    </Wrapper>
  );
}

export default App;
