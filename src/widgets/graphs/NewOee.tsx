// @ts-ignore
import React from "react";
import { Grid } from "@mui/material";
import { BarGraph } from "../../entities/graphs/BarGraph.tsx";
import fitting from "../../shared/assets/data/data/fitting.json";
import milling from "../../shared/assets/data/data/Milling.json";
import grinding from "../../shared/assets/data/data/Grinding.json";
import others from "../../shared/assets/data/data/Others.json";
import turrAut from "../../shared/assets/data/data/Turning-Automatic.json";
import turrMill from "../../shared/assets/data/data/Turning-Milling.json";
import "./styles.scss";

function NewOee(props: any) {
  console.log(props)
  milling.splice(0, 11);
  grinding.splice(0, 11);
  turrMill.splice(0, 11);
  function getData() {
    const data = [];
    data.push(fitting.splice(0, 11));
    data.push(milling.splice(0, 11));
    data.push(grinding.splice(0, 11));
    data.push(others);
    data.push(turrAut);
    data.push(turrMill.splice(0, 11));
    console.log(data, "DATA FIRST")
    return data
  }
  const data = getData();
  console.log(data, 'MY DARRT')
  return (
    <Grid container spacing={3}>
      {data.map((element, index) => (
        <Grid key={index} item xs={6}>
          <BarGraph data={element} />
        </Grid>
      ))}
      ;
    </Grid>
  );
}

export { NewOee };
