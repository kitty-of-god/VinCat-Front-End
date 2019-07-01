import React, { Component } from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

const data = [
    {name: 'Week 1', lastM: 10, CurrentM: 5,},
    {name: 'Week 2', lastM: 1, CurrentM: 12,},
    {name: 'Week 3', lastM: 5, CurrentM: 17,},
    {name: 'Week 4', lastM: 0, CurrentM: 25,}
];

class ScoreByMountUser extends Component {
    render() {
        return (
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5, right: 30, left: 20, bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="lastM" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="CurrentM" stroke="#82ca9d" />
          </LineChart>
        );
    }
}

export default ScoreByMountUser;


