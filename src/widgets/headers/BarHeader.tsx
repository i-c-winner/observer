import { IBarHeader } from "../types";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import '../styles.scss'

function BarHeader(props: IBarHeader) {
  const navigate = useNavigate()
  return <Box
    sx={{
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center"
    }}
  >
    <h3>{props.name}</h3>
    {props.titles.map((title) => <Typography key={title} classes={{
      root: 'bar-graphe bar-graphe__name'
    }} color='white'>{title}</Typography>)}
    <div onClick={() => {
      navigate('/enter')
    }}
      className='logo__bar logo__bar_header'
    ></div>

  </Box>

}

export { BarHeader }