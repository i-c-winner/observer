
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts";
import {TBarGraphData} from "../types";
// @ts-ignore
import randomColor from 'randomcolor'

interface IProps {
  data: TBarGraphData,
  keys:string[]
}

function BarGraph (props: IProps) {
  function getColor() {
    return randomColor()
  }
console.log(props.data)
  function getWidth() {
    return  window.innerWidth
  }
  return <BarChart width={getWidth()} height={250} data={props.data}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="Day" />
  <YAxis />
  <Tooltip />
  <Legend />
    {props.keys.map((value, index)=>{
      console.log(value)
      if (value!=='Day'){
        return <Bar
          key={index}
          barSize={2} dataKey={value} fill={getColor()}/>
      }

    })}
    </BarChart>
}
export {BarGraph}