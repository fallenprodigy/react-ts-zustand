import Chart from "react-apexcharts";
import useStore from "../store";

const PieChart = () => {
  const tableData = useStore((state: any) => state.tableData);

  console.log(tableData);

  return (
    <div>
      <Chart
        type="pie"
        width={500}
        height={550}
        series={[44, 55, 13, 43]}
        options={{
          noData: { text: "Empty Data" },
          labels: ["Chicago", "New York", "Los Angeles", "San Diego"],
          // labels: new Set(tableData.map((table: any) => table.address.city)),
        }}
      ></Chart>
    </div>
  );
};

export default PieChart;
