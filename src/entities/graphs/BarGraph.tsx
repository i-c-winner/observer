
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts";
import {TBarGraphData} from "../types";
interface IProps {
  data: TBarGraphData,
}

function BarGraph (props: IProps) {
  return <BarChart width={700} height={250} data={props.data}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
 <Bar barSize={10} dataKey='alfa' fill={'red'} />
 <Bar barSize={10} dataKey='beta' fill={'green'} />
    </BarChart>
}
export {BarGraph}