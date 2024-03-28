import { IBarHeader } from "../types";
import { Box, Typography } from "@mui/material";
import '../styles.scss'

function BarHeader(props: IBarHeader) {
  return <Box
    sx={{
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center"
    }}
  >
    <h3>{props.name}</h3>
    {props.titles.map((title) => <Typography classes={{
      root: 'bar-graphe bar-graphe__name'
    }} color='white'>{title}</Typography>)}
    <div
      className='logo__bar logo__bar_header'
    ></div>

  </Box>

}

export { BarHeader }