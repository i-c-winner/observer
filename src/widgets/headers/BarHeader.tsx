import { IBarHeader } from "../types";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import '../styles.scss'

function BarHeader(props: IBarHeader) {
  const navigate = useNavigate()
  return <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",

    }}
  >

    <Box sx={{
      width: '100vw'
    }}>
      <Box sx={{
        height: '150px',
        width: "100%",
        background: "#2A4858",

      }}>
        <Typography sx={{
          fontSize: "1.5rem",
          padding: "25px"
        }} color="white">{props.person}</Typography>
        <Typography sx={{
          margin: "0 10px 0 auto",
          width: '200px'
        }} color="white">{props.title}</Typography>

      </Box>
      <Box
        sx={{height: '100px'}}
      >


      </Box>
    </Box>
    <div onClick={() => {
      navigate('/enter')
    }}
         className='logo__bar logo__bar_bar-header'
    ></div>


  </Box>

}

export { BarHeader }