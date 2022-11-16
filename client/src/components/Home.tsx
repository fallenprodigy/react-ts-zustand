import { useEffect, useState } from "react";

function Home() {
  const [data, setData] = useState<any[]>();

  const fetchData = async () => {
    const response = await fetch("http://localhost:4000/data");
    const json = await response.json();

    if (response.ok) {
      setData(json);
    }
  };

  console.log(data);

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h1>giorgi</h1>
    </div>
  );
}

export default Home;
