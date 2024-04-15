import { Box, Grid, Typography } from "@mui/material";
import { BarGraph } from "../../entities/graphs/BarGraph";
import { BarHeader } from "../../widgets/headers";
import { useAuth } from "../../app/context/auth-context";
import february from '../../shared/assets/data/february.json'
import january from '../../shared/assets/data/january.json'
import march from '../../shared/assets/data/march.json'
import monthlyJSON from '../../shared/assets/data/monthly.json'


// const february= JSON.parse(february)
// const january=JSON.parse(january)
// const march=JSON.parse(march)
// const monthly=JSON.parse(monthlyJSON)


function floorData(data: any, type: string) {
  data.forEach((day: any) => {
    for (const key in day) {
      if (key !== type) {
        day[key] = Math.floor(day[key])
      }
    }
  })
}

floorData(january, 'Day')
floorData(february, 'Day')
floorData(march, 'Day')
floorData(monthlyJSON, 'Month')

const keys = Object.keys(monthlyJSON[0]).filter((month) => {
  return month !== 'Mounth'
})

const data = []


// const data = [
//   {
//     name: 'FirstPoint',
//     alfa: 10,
//     beta: 20
//   },
//   {
//     name: 'SecondPoint',
//     alfa: 20,
//     beta: 3
//   }
// ]

// const keys=Object.keys(data[0])
const types = Object.keys(monthlyJSON[0])


function OEE() {
  const {user} = useAuth()
  if (true) {
    return <Box>
      <BarHeader name="Годовой обзор" titles={[]}/>

      {keys.map((key: any) => {
        if (key !== 'Month') {
          const values = monthlyJSON.reduce((accum: any, month: any) => {

            accum.push({
              month: month.Month,
              value: month[key]
            })
            return accum
          }, [])
          console.log(values)
          return <Box>
            <h2>{key}</h2>
            <BarGraph data={values}/>
          </Box>
        }

      })
      }
    </Box>


  } else {
    return <Typography>не аутентифицирован</Typography>
  }


  }

  export {
    OEE
  }