import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import {TBarGraphData} from "../types";
interface IProps {
  data: TBarGraphData
}

function LineGraph(props: IProps) {
 return  <LineChart width={730} height={250} data={props.data}
             margin={{top: 5, right: 30, left: 20, bottom: 5}}>
    <CartesianGrid strokeDasharray="3 3"/>
    <XAxis dataKey="name"/>
    <YAxis/>
    <Tooltip/>
    <Legend/>
    <Line type="monotone" dataKey="alfa" stroke="#8884d8"/>
    <Line type="monotone" dataKey="beta" stroke="#82ca9d"/>
    <Line type="monotone" dataKey="charly" stroke="blue"/>
  </LineChart>
}

export { LineGraph }