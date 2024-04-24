import { Box, Grid, Typography } from "@mui/material";
import { BarHeader } from "../../widgets/headers";
import { LineGraph } from "../../entities/graphs/LineGraph";
import montlyJson from '../../shared/assets/data/monthly.json'
import { getData } from "../functions/getData";
import monthlyJSON from "../../shared/assets/data/monthly.json";
import { Footer } from "../../widgets/footer/Footer";

function Productivity() {
  return <Box sx={{
    height: '100vh',
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'space-between'
  }}>
    <BarHeader person="Пользователь: исполнительный деректор" title="Производительность"/>
    <Box sx={{
      background: "#e9e9e9",
      width: '80%',
      padding: "50px",
      boxSizing: 'border-box',
      marginLeft: "150px"
    }}>
      <Typography >График склада полуфобрикатов и готовой продукции</Typography>
      <Grid sx={
        {
          background: 'white',
          margin: '0',

        }
      } container spacing={2} p={5}>
        {getData(monthlyJSON).slice(0, 2).map((key: any) => {
          if (key !== 'Month') {
            const values = monthlyJSON.reduce((accum: any, month: any) => {
              accum.push({
                month: month.Month,
                value: month[key]
              })
              return accum
            }, [])
            return <Grid key={key} item xs={6}>
              <h2>{key}</h2>
              <LineGraph width={() => window.innerWidth * 0.8 - 200} data={values}/>
            </Grid>
          }
        })}
      </Grid>
    </Box>
    <Footer />
  </Box>
}

export { Productivity }