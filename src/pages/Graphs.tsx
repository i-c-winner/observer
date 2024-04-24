import { BarHeader } from "../widgets/headers";
import { Footer } from "../widgets/footer/Footer";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";

function Graphs() {
  const {type} = useParams();
  console.log(type)
  return <Box sx={{
    display: "flex",
    flexFlow: "column",
    justifyContent: "space-between",
    height: "100vh"
  }}>
    <BarHeader type={type}/>
    <Box sx={{
      flexGrow: "1"
    }}>
    </Box>

    <Footer/>
  </Box>;

}

export { Graphs };