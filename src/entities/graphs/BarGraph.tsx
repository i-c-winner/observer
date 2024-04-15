import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts";
import { TBarGraphData } from "../types";
// @ts-ignore
import randomColor from 'randomcolor'

interface IProps {
  data: TBarGraphData,

}

function BarGraph(props: IProps) {
  console.log(props.data)

  function getColor() {
    return randomColor()
  }

  function getWidth() {
    return window.innerWidth
  }

  return <BarChart width={getWidth()} height={250} data={props.data}>
    <CartesianGrid strokeDasharray="3 3"/>
    <XAxis dataKey="month"/>
    <YAxis/>
    <Tooltip/>
    {/*<Legend/>*/}
    <Bar  barSize={20} dataKey='value' fill='red'/>
  </BarChart>
}

export { BarGraph }