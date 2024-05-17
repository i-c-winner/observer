// @ts-ignore
import React, { useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import {linearRegression, linearRegressionLine} from "simple-statistics";
// import { OrderGraph } from "../../entities/graphs/OrderGraph";
// import { myData } from "../../shared/assets/data/myData";
// import { myMonth } from "../../shared/assets/data/myMonth";
import productive from "../../shared/assets/data/data/productivity.json"
import * as echarts from "echarts";
import { EChartsResponsiveOption } from "echarts";


function Orders() {
  const refBox = useRef<HTMLDivElement | null>(null);

  const names = productive.reduce(
    (accum: any, element: any) => [...accum, {month: element.Month, year: element.Year}],
    []
  );
  const lines: any = [];
  const treedValues: any[] = [];
  const values = productive.reduce(
    (accum: any, element: any, currentIndex: number) => {
      treedValues.push([currentIndex, element.Productivity]);
      const value=element.Productivity??0
      return [...accum, value];
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
      data: names.map(({ month, year}:{month: string, year: string}) => `${year}/${month}`),
    },
    yAxis: {
      type: "value",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // @ts-ignore
        formatter: (params: any) => {
          const { month, year } = params[0].value;
          return `${year}/${month}`;
        },
      },
    },
    legend: {
      data: ["Продуктивность", "Плановая продуктивность", "Тренд продуктивности"],
    },
    series: [
      {
        name: "Продуктивность",
        data: values,
        type: "bar",
      },
      {
        name: "Плановая продуктивность",
        data: lines,
        type: "line",
        itemStyle: {
          color: "red",
        },
        showSymbol: false,
      },
      {
        name: "Тренд продуктивности",
        data: treedOeeValues,
        type: "line",
        showSymbol: false,
      },
    ],
    grid: {
      left: "10%", // отступ слева
      right: "10%", // отступ справа
      bottom: "10%", // отступ снизу
      top: "20%", // отступ сверху
      containLabel: true, // включает метки в область графика
    },
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
      console.log(options, "OPTIONS")
      myChart.setOption(options);
      return () => {
        myChart.dispose();
      };
    }
  });
  return (
    <Box sx={{width: "100%", height: "50vh"}}>
      <Typography>Продуктивность </Typography>
      <Box sx={{ height: "100%" }} ref={refBox} />
    </Box>
  );
}

export { Orders };
