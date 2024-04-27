import { getDays } from "../utilites/getDays";
import { getWeeks } from "../utilites/getWeeks";
import { getMonth } from "../utilites/getMonth";
import { Box } from "@mui/material";
import { useEffect, useRef } from "react";
import * as echarts from "echarts";
import "./styles.scss";
import { IDatesItem } from "../types";

function Quot(props: { type: "days" | "month" | "weeks" }) {
  console.log(getData())
  const option = {
    series: [
      {
        type: 'pie',
        data: getData()
      },
    ],
    // legend: {
    //   bottom: 10,
    //   left: 'center',
    //   data: getData().reduce((accum:any, element)=>{
    //
    //       return accum.push(element.name)
    //
    //
    //   }, [])
    // },
  }
  function getData(): IDatesItem[] {
    switch (props.type) {
      case "days":
        return getDays().TTarget
      case "weeks":
        return getWeeks().TTarget
      default:
        return getMonth().TTarget
    }
  }

  const refBox = useRef<HTMLDivElement>();
  useEffect(() => {
    if (refBox.current) {
      refBox.current.id = "chart-container";
      if (refBox.current.style) {
        refBox.current.style.height = "100%";
        refBox.current.style.width = "100%";
      }
    }
    const myChart = echarts.init(refBox.current, null, {
      renderer: "canvas",
      useDirtyRect: false
    });
    myChart.setOption(option);
    return ()=>{
      myChart.dispose()
    }
    },[props.type]);
  return <Box ref={refBox}>
  </Box>;
}

export { Quot };