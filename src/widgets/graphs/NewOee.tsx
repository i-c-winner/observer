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

// @ts-ignore
function NewOee(props: any) {
  function getData() {
    const data = [];
    data.push(fitting);
    data.push(milling);
    data.push(grinding);
    data.push(others);
    data.push(turrAut);
    data.push(turrMill);
    return data;
  }
  const data = getData();
  return (
    <Grid container spacing={3}>
      {data.map((element, index) => (
        <Grid key={index} item xs={6}>
          <BarGraph data={element} />
        </Grid>
      ))}
    </Grid>
  );
}

export { NewOee };
