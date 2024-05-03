import * as echarts from "echarts";
import { EChartsResponsiveOption } from "echarts";
import { Box, Typography } from "@mui/material";
import { useEffect, useRef } from "react";
import { getDays } from "../../widgets/utilites/getDays";
import { getMonth } from "../../widgets/utilites/getMonth";
import { getWeeks } from "../../widgets/utilites/getWeeks";
import { TElement } from "../../widgets/types";

const myData = {
  "month": getMonth(),
  "days": getDays(),
  "weeks": getWeeks()
};

function BarGraph(props: { type: "month" | "days" | "weeks", element: TElement }) {

  const refBox = useRef<HTMLDivElement | null>(null);
  const elements = myData[props.type][props.element] as unknown as { name: string, value: number }[];
  const names = elements.reduce<string[]>((accum, element) => {
    return [...accum, element.name];
  }, []);
  const values = elements.reduce<number[]>((accum, element) => {
    return [...accum, element.value];
  }, []);
  const options: echarts.EChartOption | EChartsResponsiveOption = {
    xAxis: {
      type: "category",
      data: names
    },
    yAxis: {
      type: "value"
    },
    series: [
      {
        data: values,
        type: "bar"
      }
    ]
  };

  useEffect(() => {
    if (refBox.current !== null) {
      refBox.current!.id = "chart-container"
      const myChart = echarts.init(refBox.current!, {}, {
        renderer: "canvas",
        useDirtyRect: false
      });
      myChart.setOption(options);
      return () => {
        myChart.dispose()
      }
    }
  }, [props.type]);


  return <Box >
    <Typography>График: </Typography>
    <Box sx={{height: "180px"}} ref={refBox}>
    </Box>
  </Box>



}

export { BarGraph };