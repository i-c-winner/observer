import * as echarts from "echarts";
import { Box } from "@mui/material";
import { useEffect, useRef } from "react";
import { getDays } from "../../widgets/utilites/getDays";
import { getMonth } from "../../widgets/utilites/getMonth";
import { getWeeks } from "../../widgets/utilites/getWeeks";
import { EChartsResponsiveOption } from "echarts";
import { TElement } from "../../widgets/types";

const myData = {
  "month": getMonth(),
  "days": getDays(),
  "weeks": getWeeks()
};

function BarGraph(props: { type: "month" | "days" | "weeks", element: TElement }) {
  const refBox = useRef<HTMLDivElement>(null);
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

function getHeight() {
  return (window.innerHeight-322)/3
}
  useEffect(() => {
    const myChart = echarts.init(refBox.current, null, {
      renderer: "canvas",
      useDirtyRect: false
    });
    myChart.setOption(options);
    return ()=>{
      myChart.dispose()
    }
  }, [props.type]);

  return <Box sx={
    {width: "100%",
    height: getHeight()}

  } ref={refBox}>
  </Box>;

}

export { BarGraph };