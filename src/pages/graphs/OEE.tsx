import { Box, Grid, Typography } from "@mui/material";
import { BarGraph } from "../../entities/graphs/BarGraph";
import { BarHeader } from "../../widgets/headers";
import {useAuth} from "../../app/context/auth-context";

const data = [
  {
    name: 'FirstPoint',
    alfa: 10,
    beta: 20
  },
  {
    name: 'SecondPoint',
    alfa: 20,
    beta: 3
  }
]

function OEE() {
  const {user, login, logout}= useAuth()
  if (user) {
    return <Box>
      <BarHeader name="OEE" titles={['Годовой обзор по неделям', 'Годовой обзор по месяцам']} />
      <Grid container spacing={2} p={5}>
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
        <Grid item xs={6}>
          <BarGraph data={data}/>
        </Grid>
        <Grid item xs={6}>
          <BarGraph data={data}/>
        </Grid>
      </Grid>
    </Box>
  } else {
    return <Typography>не аутентифицирован</Typography>
  }



}

export { OEE }