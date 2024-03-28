import { Box, Grid } from "@mui/material";
import { BarHeader } from "../../widgets/headers";
import { LineGraph } from "../../entities/graphs/LineGraph";
import './styles.scss'


const data = [
  {
    name: 'FirstPoint',
    alfa: 10,
    beta: 7,
    charly: 12
  },
  {
    name: 'SecondPoint',
    alfa: 20,
    beta: 3,
    charly: 8
  },
  {
    name: 'SecondPoint',
    alfa: 18,
    beta: 8,
    charly: 12
  },
  {
    name: 'SecondPoint',
    alfa: 11,
    beta: 9,
    charly: 18
  }
]

function Workering() {
  return <Box>
    <BarHeader name="Трудоёмкость" titles={['Годовой обзор по неделям', 'Месячный обзор по дням']}/>
    <Grid container spacing={2} p={5}>
      <Grid classes={{
        root: 'line-graph'
      }} item xs={6}>
        <LineGraph data={data}/>
      </Grid>
      <Grid classes={{
        root: 'line-graph'
      }} item xs={6}>
        <LineGraph data={data}/>
      </Grid>
      <Grid classes={{
        root: 'line-graph'
      }} item xs={6}>
        <LineGraph data={data}/>
      </Grid>
      <Grid classes={{
        root: 'line-graph'
      }} item xs={6}>
        <LineGraph data={data}/>
      </Grid>
      <Grid classes={{
        root: 'line-graph'
      }} item xs={6}>
        <LineGraph data={data}/>
      </Grid>
      <Grid classes={{
        root: 'line-graph'
      }} item xs={6}>
        <LineGraph data={data}/>
      </Grid>
    </Grid>
  </Box>
}

export { Workering }