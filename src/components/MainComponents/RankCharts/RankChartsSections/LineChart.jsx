/* eslint-disable import/newline-after-import */
/* eslint-disable react/prop-types */
import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';

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

const dayjs = require('dayjs');
dayjs().format();

const jsonData = require('../../../../actions/data/pedals.json');

const RanksLineChart = ({ data }) => {
  // const dispatch = useDispatch();
  // const productRanks = useSelector((state) => state.ranks);

  // const data = productRanks.products[0];
  console.log('datassssssssssssssssss', data);

  return (
    <>
      <ResponsiveContainer width="99%" aspect={2}>
        <LineChart
          width="99%"
          height={300}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis
            type="number"
            dataKey="time"
            domain={['auto', 'auto']}
            tick={{ fill: 'black' }}
            tickFormatter={(unixTime) => dayjs(unixTime).format('MMM YYYY')}
          />
          <YAxis type="number" dataKey="rank" />
          <CartesianGrid horizontal="true" vertical="" stroke="lightgray" />
          <Tooltip
            contentStyle={{ backgroundColor: '#8884d8', color: '#fff' }}
            itemStyle={{ color: '#fff' }}
            cursor={false}
          />
          <Legend />
          <Line
            type="monotone"
            data={jsonData.data[0].rank}
            dataKey="rank"
            stroke="#8884d8"
            strokeWidth="3"
            dot={{ fill: '#2e4355', stroke: '#8884d8', strokeWidth: 1, r: 1 }}
            activeDot={{
              fill: '#2e4355',
              stroke: '#8884d8',
              strokeWidth: 5,
              r: 10,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default RanksLineChart;
