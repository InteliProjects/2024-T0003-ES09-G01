import { Doughnut } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const data = {
  labels: ["Red", "Green", "Yellow"],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
    },
  ],
};

const DoughnutGraph = () => {
  return <Doughnut data={data} width={400} height={400} />;
};

export default DoughnutGraph;
