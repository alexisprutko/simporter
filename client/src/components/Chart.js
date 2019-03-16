import React, { PureComponent } from 'react';
import {
  XAxis, YAxis, CartesianGrid, Tooltip, 
  AreaChart, Area,
} from 'recharts';
import Paper from '@material-ui/core/Paper'
import { Separator } from '../components/ui'

const data = [
  {
    name: 'SEP', uv: 10, pv: 0, amt: 2400,
  },
  {
    name: 'OCT', uv: 20, pv: 1, amt: 2210,
  },
  {
    name: 'NOV', uv: 2000, pv: 4, amt: 2290,
  },
  {
    name: 'DEC', uv: 2780, pv: 3, amt: 2000,
  },
  {
    name: 'JAN', uv: 1890, pv: 9, amt: 2181,
  },
  {
    name: 'DEB', uv: 2390, pv: 2, amt: 2500,
  },
  {
    name: 'MAR', uv: 3490, pv: 6, amt: 2100,
  },
  {
    name: 'APR', uv: 3490, pv: 3, amt: 2100,
  },
  {
    name: 'MAY', uv: 3490, pv: 8, amt: 2100,
  }, 
  
  
];

export default class Chart extends PureComponent {
//   static jsfiddleUrl = 'https://jsfiddle.net/alidingling/nskpgcrz/';

  render() {
    return (
      <Paper>
          <Separator vertical="20px" />
        <AreaChart
          width={640}
          height={300}
          data={data}
          syncId={this.props.id}
          margin={{
            top: 10, right: 30, left: 0, bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="pv" stroke={this.props.color} fill={this.props.color} />
        </AreaChart>
        <Separator vertical="20px" />
      </Paper>
    );
  }
}
