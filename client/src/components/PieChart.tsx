import Chart from "react-apexcharts";
import useStore from "../store";

const PieChart = () => {
  const tableData = useStore((state: any) => state.tableData);

  console.log(tableData);

  return (
    <div>
      <Chart
        type="pie"
        width={1349}
        height={550}
        series={[44, 55, 13, 43, 22]}
        options={{
          noData: { text: "Empty Data" },
          // labels: tableData.map((table: any) => table.address.city),
          // ...new Set(array)
        }}
      ></Chart>
    </div>
  );
};

export default PieChart;
