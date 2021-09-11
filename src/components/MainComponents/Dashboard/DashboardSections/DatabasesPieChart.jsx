import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const fakeData = [
  { name: 'Comp', value: 45, color: '#3DCC91' },
  { name: 'API', value: 45, color: '#FFB366' },
  { name: 'Others', value: 10, color: '#FF7373' },
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const DatabasesPieChart = () => {
  return (
    <div style={{ width: '99%', height: 300 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={fakeData}
            // cx={200}
            // cy={200}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {fakeData.map((entry) => (
              <Cell key={entry.name} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DatabasesPieChart;
