import React, { Component } from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

const data = [
  {name: 'Product1', uv: 4000, likes: 10, amt: 2400,},
  {name: 'Product2', uv: 3000, likes: 12, amt: 2210,},
  {name: 'Product3', uv: 2000, likes: 8, amt: 2290,},
  {name: 'Product4', uv: 2780, likes: 35, amt: 2000,},
  {name: 'Product5', uv: 1890, likes: 44, amt: 2181,}
];


const getIntroOfPage = (label) => {
  if (label === 'Product1') {
    return "Checkered trousers";
  } 
  if (label === 'Product2') {
    return "Red shirt";
  } 
  if (label === 'Product3') {
    return "Mocasin shoes";
  } 
  if (label === 'Product4') {
    return 'Jean boot bell';
  } 
  if (label === 'Product5') {
    return 'Hat';
  }
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label} : ${payload[0].value}`}</p>
        <p className="intro">{getIntroOfPage(label)}</p>
        <p className="desc">Anything you want can be displayed here.</p>
      </div>
    );
  }

  return null;
};

class ProductReputation extends Component {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/vxq4ep63/';

  render() {
    return (
      <BarChart
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
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Bar dataKey="likes" barSize={20} fill="#8884d8" />
      </BarChart>
    );
  }
}

export default ProductReputation;













