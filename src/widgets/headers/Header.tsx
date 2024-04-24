import { IBarHeader } from "../types";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import '../styles.scss'

function Header() {
  const navigate = useNavigate()
  return <Box
    sx={{
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      background: "#2A4858",
      height: '250px'
    }}
  >
    <div onClick={() => {
      navigate('/enter')
    }}
         className='logo__bar logo__bar_header'
    ></div>
  </Box>

}

export { Header }