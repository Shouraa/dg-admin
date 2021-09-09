import React, { Component } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const fakeData = [
  {
    name: 'JAN',
    progress: 40,
  },
  {
    name: 'FEB',
    progress: 90,
  },
  {
    name: 'MAR',
    progress: 30,
  },
  {
    name: 'APR',
    progress: 20,
  },
  {
    name: 'MAY',
    progress: 80,
  },
  {
    name: 'JUN',
    progress: 40,
  },
  {
    name: 'JUL',
    progress: 15,
  },
  {
    name: 'AUG',
    progress: 20,
  },
  {
    name: 'SEP',
    progress: 10,
  },
  {
    name: 'OCT',
    progress: 25,
  },
  {
    name: 'NOV',
    progress: 29,
  },
  {
    name: 'DEC',
    progress: 30,
  },
];

const ProgressBarChart = () => {
  return (
    <div style={{ width: '99%', height: 300 }}>
      <ResponsiveContainer>
        <BarChart
          data={fakeData}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
          barSize={16}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="progress" fill="blue" background={{ fill: '#eee' }} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProgressBarChart;
