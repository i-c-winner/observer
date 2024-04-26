import React  from "react";
import { getWeeks } from "../utilites/getWeeks";
import { Grid} from "@mui/material";
import { BarGraph } from "../../entities/graphs/BarGraph";
import { getMonth } from "../utilites/getMonth";
import { getDays } from "../utilites/getDays";



function Oee(props: { type: string }) {


  function getData() {
    switch (props.type) {
      case "days":
        return getDays();
      case "weeks":
        return getWeeks();
      default:
        return getMonth();
    }
  }


  return <Grid container spacing={3}>
    <React.Fragment>
      {Object.keys(getData()).map((element) => {

        return <Grid key={element[0]} item xs={6}>
          <BarGraph/>
        </Grid>;
      })};
    </React.Fragment>;
  </Grid>;
}

export { Oee };
