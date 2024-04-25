import { getWeeks } from "../utilites/getWeeks";
import { Box } from "@mui/material";
import { BarGraph } from "../../entities/graphs/BarGraph";

function Oee(props: { type: string }) {
  if (props.type === "weeks") {
 return Object.entries(getWeeks()).map((element)=>{
   return <BarGraph key={element[0]} data={element[1]} name={element[0]} />
 })
    return <p>dddd</p>
  } return <p>нет графика</p>
}
export {Oee}
