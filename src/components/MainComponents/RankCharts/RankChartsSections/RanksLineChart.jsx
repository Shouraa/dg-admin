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

const randomColors = [
  '#5e4fa2',
  '#d53e4f',
  '#f46d43',
  '#e7298a',
  '#7570b3',
  '#9e0142',
  '#fee08b',
  '#abdda4',
  '#9e0142',
  '#e6f598',
  '#d62728',
];

// const jsonData = require('../../../../actions/data/pedals.json');

const RanksLineChart = ({ data }) => {
  return (
    <>
      <ResponsiveContainer width="99%" aspect={2}>
        <LineChart
          data={data}
          width="99%"
          height={800}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis
            type="number"
            dataKey="time"
            domain={['auto', 'auto']}
            tick={{ fill: 'black' }}
            tickFormatter={(unixTime) => dayjs(unixTime).format('MMM YYYY')}
            // label={{ value: 'Pages', position: 'insideBottom', dy: 30 }}
          />

          <YAxis
            type="number"
            // dataKey="rank"
            domain={[0, 30000]}
            label={{
              value: 'Rank',
              angle: -90,
              position: 'insideLeft',
              dy: 30,
            }}
          />
          <CartesianGrid horizontal="true" vertical="" stroke="#ccc" />
          <Tooltip
            contentStyle={{ backgroundColor: '#8884d8', color: '#fff' }}
            itemStyle={{ color: '#fff' }}
            cursor={false}
            labelFormatter={(unixTime) => dayjs(unixTime).format('MMM DD')}
          />

          <Legend
            payload={data.map((p, index) => ({
              id: p.name,
              type: 'square',
              value: p.name,
              color: randomColors[index % 20],
            }))}
          />
          {data.map((p, index) => {
            return (
              <Line
                key={p.name}
                type="monotone"
                data={p.rank}
                dataKey="rank"
                stroke={randomColors[index % 20]}
                strokeWidth="2"
                dot={{
                  fill: '#2e4355',
                  stroke: '#8884d8',
                  strokeWidth: 1,
                  r: 1,
                }}
                activeDot={{
                  fill: 'white',
                  stroke: '#8884d8',
                  strokeWidth: 5,
                  r: 5,
                }}
              />
            );
          })}
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default RanksLineChart;
