// @ts-ignore
import React from "react";
import { Grid } from "@mui/material";
import { getWeeks } from "../utilites/getWeeks";
import { BarGraph } from "../../entities/graphs/BarGraph";
import { getMonth } from "../utilites/getMonth";
import { getDays } from "../utilites/getDays";
import { TElement } from "../types";
import "./styles.scss";

function Oee(props: { type: "month" | "days" | "weeks" }) {
  function getData(): {
    FTarget: any;
    FOee: any;
    TTarget: any;
    TOee: any;
    ATarget: any;
    AOee: any;
    } {
    switch (props.type) {
      case "days":
        return getDays();
      case "weeks":
        return getWeeks();
      default:
        return getMonth();
    }
  }
  const data = Object.keys(getData()) as TElement[];
  return (
    <Grid container spacing={3}>
      {data.map((element) => (
        <Grid key={element} item xs={6}>
          <BarGraph type={props.type} element={element} />
        </Grid>
      ))}
      ;
    </Grid>
  );
}

export { Oee };
