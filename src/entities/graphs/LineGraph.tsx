import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
function LineGraph(props: any) {
 return  <LineChart width={props.width()} height={250} data={props.data}
             margin={{top: 5, right: 30, left: 20, bottom: 5}}>
    <CartesianGrid strokeDasharray="3 3"/>
    <XAxis dataKey="month"/>
    <YAxis/>
    <Tooltip/>
    <Legend/>
    <Line dataKey="value" stroke="#8884d8"/>
  </LineChart>
}

export { LineGraph }