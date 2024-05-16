import * as echarts from "echarts";
import { EChartsResponsiveOption } from "echarts";
import { Box, Typography } from "@mui/material";
// @ts-ignore
import React, { useEffect, useRef } from "react";
// import { getDays } from "../../widgets/utilites/getDays";
// import { getMonth } from "../../widgets/utilites/getMonth";
// import { getWeeks } from "../../widgets/utilites/getWeeks";
// import { TElement } from "../../widgets/types";



function BarGraph(props: any) {
  const refBox = useRef<HTMLDivElement | null>(null);
  // const elements: {name: string, value: string}[] = [];
  const names =props.data.reduce(
    (accum: any, element: any) => [...accum, element.Month],
    []
  );
  const values = props.data.reduce(
    (accum: any, element: any) => [...accum, element.OEE],
    []
  );
  const lines: any=[]
  for (let i=0; i<=values.length; i+=1) {
    lines.push(98)
  }
  const options: echarts.EChartOption | EChartsResponsiveOption = {
    xAxis: {
      type: "category",
      data: names,
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: values,
        type: "bar",
      },
      {
        data: lines,
        type: "line"

      }
    ],
  };

  useEffect(() => {
    if (refBox.current !== null) {
      refBox.current!.id = "chart-container";
      const myChart = echarts.init(
        refBox.current!,
        {},
        {
          renderer: "canvas",
          // useDirtyRect: false
        }
      );
      myChart.setOption(options);
      return () => {
        myChart.dispose();
      };
    }
  }, [props.type]);

  return (
    <Box>
      <Typography>График: </Typography>
      <Box sx={{ height: "180px" }} ref={refBox} />
    </Box>
  );
}

export { BarGraph };
