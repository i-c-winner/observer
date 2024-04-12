import { Box, Grid, Typography } from "@mui/material";
import { BarGraph } from "../../entities/graphs/BarGraph";
import { BarHeader } from "../../widgets/headers";
import { useAuth } from "../../app/context/auth-context";
import februaryJSON from '../../shared/assets/data/february.json'
import januaryJSON from '../../shared/assets/data/january.json'
import marchJSON from '../../shared/assets/data/march.json'
import monthlyJSON from '../../shared/assets/data/monthly.json'



// const february= JSON.parse(februaryJSON)
// const january=JSON.parse(januaryJSON)
// const march=JSON.parse(marchJSON)
// const monthly=JSON.parse(monthlyJSON)



function floorData(data: any) {
  data.forEach((day: any) => {
    for (const key in day) {
      if (key !== 'Day') {
        day[key] = Math.floor(day[key])
      }
    }
  })
}
floorData(januaryJSON)
floorData(februaryJSON)
floorData(marchJSON)


console.log(januaryJSON)

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

// const keys=Object.keys(data[0])
const keys = Object.keys(januaryJSON[0])


function OEE() {
  const {user} = useAuth()
  if (user) {
    return <Box>
      <BarHeader name="OEE" titles={['Годовой обзор по неделям', 'Годовой обзор по месяцам']}/>
      <h2>Январь</h2>
      <BarGraph keys={keys} data={januaryJSON}/>
      <h2>Февраль</h2>
      <BarGraph keys={keys} data={februaryJSON}/>
      <h3>Март</h3>
      <BarGraph keys={keys} data={marchJSON}/>

    </Box>
  } else {
    return <Typography>не аутентифицирован</Typography>
  }


}

export { OEE }