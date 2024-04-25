import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts";

// @ts-ignore
import randomColor from 'randomcolor'



function BarGraph(props) {
  function getColor() {
    return randomColor()
  }

  function getWidth() {
    return (window.innerWidth-50) / 2
  }

  function getHeight() {
    return (window.innerHeight - 650) / 3
  }

  return <BarChart width={getWidth()} height={getHeight()} data={props.data}>
    <CartesianGrid strokeDasharray="3 3"/>
    <XAxis dataKey={props.data.week}/>
    <YAxis/>
    <Tooltip/>
    {/*<Legend/>*/}
    <Bar barSize={20} dataKey="value" fill='red'/>
  </BarChart>
}

export { BarGraph }