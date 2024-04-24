import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import {TBarGraphData} from "../types";
interface IProps {
  data: TBarGraphData,
  width:()=> number,

}
function getWidth() {
  return window.innerWidth*0.75
}
function LineGraph(props: IProps) {
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