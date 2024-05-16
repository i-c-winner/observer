import * as echarts from "echarts";
import { EChartsResponsiveOption } from "echarts";
import { Box, Typography } from "@mui/material";
import { linearRegression, linearRegressionLine } from "simple-statistics";
// @ts-ignore
import React, { useEffect, useRef } from "react";
// import { getDays } from "../../widgets/utilites/getDays";
// import { getMonth } from "../../widgets/utilites/getMonth";
// import { getWeeks } from "../../widgets/utilites/getWeeks";
// import { TElement } from "../../widgets/types";

function BarGraph(props: any) {
  const refBox = useRef<HTMLDivElement | null>(null);
  const nameGraph = props.data[0]?.Section_Name ?? ("" as string);
  const worksMap: { [key: string]: string } = {
    Milling: "Фрезерный",
    "Turning-Milling": "Токарно-фрезерный",
    "Turning-Automatic": "Токарно-автоматный",
    Fitting: "Слесарный",
    Grinding: "Шлифовальный",
    "Overall Productivity": "Общая производительность",
  };
  // const elements: {name: string, value: string}[] = [];
  const names = props.data.reduce(
    (accum: any, element: any) => [...accum, element.Month],
    []
  );
  const lines: any = [];
  const treedValues: any[] = [];
  const values = props.data.reduce(
    (accum: any, element: any, currentIndex: number) => {
      treedValues.push([currentIndex, element.OEE]);
      return [...accum, element.OEE];
    },
    []
  );

  const regression = linearRegression(treedValues);
  const regressionLine = linearRegressionLine(regression);
  for (let i = 0; i <= values.length; i += 1) {
    lines.push(98);
  }
  // @ts-ignore
  const treedOeeValues: any = values.map((element: any, index: number) => {
    return regressionLine(index);
  });
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
        type: "line",
        itemStyle: {
          color: "red",
        },
        showSymbol: false,
      },
      {
        data: treedOeeValues,
        type: "line",
        showSymbol: false,
      },
    ],
    grid: {
      left: "10%", // отступ слева
      right: "10%", // отступ справа
      bottom: "10%", // отступ снизу
      top: "10%", // отступ сверху
      containLabel: true, // включает метки в область графика
    },
  };
  function getName() {
    return worksMap[nameGraph];
  }
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
      <Typography>{getName()} </Typography>
      <Box sx={{ height: "180px" }} ref={refBox} />
    </Box>
  );
}

export { BarGraph };
