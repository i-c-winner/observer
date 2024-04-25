import React, { Fragment } from "react";
import { getWeeks } from "../utilites/getWeeks";
import { Box, Grid, Typography } from "@mui/material";
import { BarGraph } from "../../entities/graphs/BarGraph";
import { getMonth } from "../utilites/getMonth";
import { getDays } from "../utilites/getDays";


function Oee(props: { type: string }) {
  if (props.type === "weeks") {
    return <Grid container spacing={3}>
      <React.Fragment>
        {Object.entries(getWeeks()).map((element) => {
          return <Grid  key={element[0]} item xs={6}>
            <Typography ml={5}>{element[0]}</Typography>
            <BarGraph  data={element[1]} name={element[0]}/>
          </Grid>;
        })};
      </React.Fragment>;
    </Grid>;


  } else if (props.type === "month") {
    return <Grid container spacing={3} >
      <Fragment>
        {Object.entries(getMonth()).map((element) => {
          return <Grid key={element[0]} item xs={6}>
            <Typography ml={5}>{element[0]}</Typography>
            <BarGraph data={element[1]} name={element[0]}/>
          </Grid>;
        })};
      </Fragment>;
    </Grid>;
  }
  return <Grid container spacing={3}>
    <Fragment>
      {Object.entries(getDays()).map((element) => {
        return <Grid key={element[0]} item xs={6}>
          <Typography ml={5}>{element[0]}</Typography>
          <BarGraph data={element[1]} name={element[0]}/>
        </Grid>;
      })};
    </Fragment>;
  </Grid>;


}

export { Oee };
