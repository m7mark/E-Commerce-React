import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from 'recharts';

import {
  ChartContainer,
  ChartTitle,
} from './ChartElements';

export const Chart = ({ title, data, dataKey, grid, margin }) => {


  return (
    <>
      <ChartContainer margin={margin}>
        <ChartTitle>{title}</ChartTitle>
        <ResponsiveContainer width='100%' aspect={4 / 1}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey='name' stroke="#5550bd" />
            <Tooltip />
            <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
            {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
          </LineChart>
        </ResponsiveContainer>
      </ChartContainer>
    </>
  )
}