import PropTypes from 'prop-types';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
);

const Chart = ({ data = [6.6, 5.2, 9.1, 5.6, 5.5] }) => {
  const chartData = {
    labels: ['리더십', '독립성', '적극성', '긍정성', '적응성'],
    datasets: [
      {
        label: '점수',
        data: data,
        backgroundColor: 'rgba(87, 137, 238, 0.4)',
      },
    ],
  };
  const chartOptions = {
    elements: {
      line: {
        borderWidth: 3,
      },
    },
    scales: {
      r: {
        ticks: {
          stepSize: 2.5,
          display: false,
        },
        pointLabels: {
          font: {
            size: 13,
            weight: '700',
          },
        },
        angleLines: {
          display: true,
        },
        suggestedMin: 0,
        suggestedMax: 10,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="h-[230px]">
      <Radar data={chartData} options={chartOptions} />
    </div>
  );
};

Chart.propTypes = {
  data: PropTypes.array,
};

export default Chart;
