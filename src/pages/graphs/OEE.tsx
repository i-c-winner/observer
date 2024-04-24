import { Box, Grid, Typography } from "@mui/material";
import { BarGraph } from "../../entities/graphs/BarGraph";
import { BarHeader } from "../../widgets/headers";
import { useAuth } from "../../app/context/auth-context";
import february from '../../shared/assets/data/february.json'
import january from '../../shared/assets/data/january.json'
import march from '../../shared/assets/data/march.json'
import monthlyJSON from '../../shared/assets/data/monthly.json'
import { Footer } from "../../widgets/footer/Footer";
import { getData } from "../functions/getData";


function OEE() {
  const {user} = useAuth()
  if (true) {
    return <Box sx={{
      display: "flex",
      flexFlow: "column",
      justifyContent: "space-between",
      height: "100vh",
    }}>
      <BarHeader person="Пользователь: исполнительный директор" title="EEO"/>
     <Grid  container spacing={2}>

      {getData(monthlyJSON).slice(0,7).map((key: any) => {
        if (key !== 'Month') {
          const values = monthlyJSON.reduce((accum: any, month: any) => {
            accum.push({
              month: month.Month,
              value: month[key]
            })
            return accum
          }, [])
          console.log(values)
          return <Grid item xs={6}>
            <h2>{key}</h2>
            <BarGraph data={values}/>
          </Grid>
        }
      })}
    </Grid>
      <Footer />
    </Box>
  } else {
    return <Typography>не аутентифицирован</Typography>
  }
}

export { OEE }