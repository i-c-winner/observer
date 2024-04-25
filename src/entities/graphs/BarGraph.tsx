import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts";

import randomColor from 'randomcolor'



function BarGraph(props: any) {
  console.log(props.data)
  function getColor() {
    return randomColor()
  }

  function getWidth() {
    return (window.innerWidth*.8) / 2
  }

  function getHeight() {
    return (window.innerHeight - 400) / 3
  }

  return <BarChart width={getWidth()} height={getHeight()} data={props.data}>
    <CartesianGrid strokeDasharray="3 3"/>
    <XAxis dataKey="week"/>
    <YAxis/>
    <Tooltip/>
    {/*<Legend/>*/}
    <Bar barSize={20} dataKey="value" fill='red'/>
  </BarChart>
}

export { BarGraph }