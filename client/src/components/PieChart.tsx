import Chart from "react-apexcharts";
import useStore from "../store";

const PieChart = () => {
  const tableData = useStore((state: any) => state.tableData);

  const findCity = tableData.filter((candidate: any) =>
    candidate.city.includes("New York")
  );
  const findCity2 = tableData.filter((candidate: any) =>
    candidate.city.includes("Chicago")
  );
  const findCity3 = tableData.filter((candidate: any) =>
    candidate.city.includes("Los Angeles")
  );
  const findCity4 = tableData.filter((candidate: any) =>
    candidate.city.includes("San Diego")
  );

  const newYork = findCity.length;
  const chiacgo = findCity2.length;
  const losangeles = findCity3.length;
  const sandiego = findCity4.length;

  return (
    <div>
      <Chart
        type="pie"
        width={500}
        height={550}
        series={[newYork, chiacgo, losangeles, sandiego]}
        options={{
          noData: { text: "Empty Data" },
          labels: ["Chicago", "New York", "Los Angeles", "San Diego"],
        }}
      ></Chart>
    </div>
  );
};

export default PieChart;
