import { Grid } from "@mui/material";
import { BarGraph } from "../../entities/barGraph/BarGraph";

const data = [
  {
    name: 'FirstPoint',
    alfa: 10,
    beta: 20
  },
  {
    name: 'SecondPoint',
    alfa: 20,
    beta: 40
  }
]:

function OEE() {
  return <Grid container spacing={2}>
    <Grid item xs={6}>
      <BarGraph data={data}/>
    </Grid>
    <Grid item xs={6}>
      <BarGraph data={data}/>
    </Grid>
    <Grid item xs={6}>
      <BarGraph data={data}/>
    </Grid>
    <Grid item xs={6}>
      <BarGraph data={data}/>
    </Grid>
  </Grid>


  // return <Box sx={{
  //   display: 'flex'
  // }}>
  //   <BarGraph data={data}/>
  //   <BarGraph data={data}/>
  // </Box>
}

export { OEE }