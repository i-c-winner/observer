import { IBarHeader } from "../types";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../styles.scss";

function BarHeader(props: { type: string }) {
  const navigate = useNavigate();

  const pagesTypes = {
    oee: "OEE",
    quota: "Фактические квоты",
    productivity: "Продуктивность",
    status: "Статус заказов",
    complexity: "Трудоёмкость"
  };

  return <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      height: "100px"

    }}
  >

    <Box sx={{
      width: "100vw"
    }}>
      <Box sx={{
        height: "100px",
        width: "100%",
        background: "#2A4858",
      }}>
        <Typography style={{textTransform: "uppercase"}} sx={{
          fontSize: "3rem",
          padding: "25px"
        }} color="white">{pagesTypes[props.type]}</Typography>

      </Box>
    </Box>
    <div onClick={() => {
      navigate("/enter");
    }}
         className="logo__bar logo__bar_bar-header"
    ></div>


  </Box>;

}

export { BarHeader };