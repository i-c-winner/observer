import { getDays } from "../utilites/getDays";
import { getWeeks } from "../utilites/getWeeks";
import { getMonth } from "../utilites/getMonth";
import { PieChart, Pie, Legend, CartesianGrid, ResponsiveContainer } from "recharts";


function getDimensions() {
  return {
    width: window.innerWidth * .8,
    height: window.innerHeight - 400
  };
}

function Quot(props: { type: "days" | "month" | "weeks" }) {
  const data=props.type=="days"? getDays().TTarget:props.type==="month"? getMonth().TTarget:getWeeks().TTarget
  return <ResponsiveContainer>
    <PieChart width={getDimensions().width} height={getDimensions().height}>
      <Pie data={data} dataKey={"value"} nameKey={"week"} cx="50%"
           cy="50%" innerRadius={20} outerRadius={200} fill="#ff0000" label/>
    </PieChart>
  </ResponsiveContainer>;
}

export { Quot };