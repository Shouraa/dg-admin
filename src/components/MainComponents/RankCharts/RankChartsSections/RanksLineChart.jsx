import React, { PureComponent } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import DatabasesPieChart from '../../Dashboard/DashboardSections/DatabasesPieChart';

const jsonData = require('../../../../actions/data/pedals.json');

const data1 = [
  { name: 10, pv: 2400, amt: 2400 },
  { name: 20, pv: 1398, amt: 2210 },
  { name: 30, pv: 9800, amt: 2290 },
  { name: 40, pv: 3908, amt: 2000 },
  { name: 50, pv: 4800, amt: 2181 },
  { name: 60, pv: 3800, amt: 2500 },
  { name: 70, pv: 4300, amt: 2100 },
];

const data2 = [
  { name: 10, uv: 4000, amt: 2400 },
  { name: 45, uv: 3490, amt: 2100 },
];

const RanksLineChart = () => {
  const dispatch = useDispatch();
  const productRanks = useSelector((state) => state.ranks);

  // const data = productRanks.products[0];
  console.log('data', jsonData.data[0].rank);
  return (
    <div style={{ width: '99%', height: 300 }}>
      <ResponsiveContainer>
        <LineChart
          width="99%"
          height={300}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis type="number" dataKey="time" domain={['auto', 'auto']} />
          <YAxis type="number" dataKey="rank" />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            data={jsonData.data[0].rank}
            dataKey="rank"
            stroke="red"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RanksLineChart;
