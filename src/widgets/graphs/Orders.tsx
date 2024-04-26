import { Box } from "@mui/material";
import { OrderGraph } from "../../entities/graphs/OrderGraph";
import {MyData as options} from "../../shared/assets/data/myData";


function Orders() {
  return <Box sx={{
    width: "100%"
  }}>
    <OrderGraph options={options}/>
  </Box>;
}

export { Orders };