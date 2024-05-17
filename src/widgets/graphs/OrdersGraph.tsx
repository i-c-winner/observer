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

function OrdersGraph(props: any) {
  const refBox = useRef<HTMLDivElement | null>(null);
  const nameGraph = props.data[0]?.Workshop_Name ?? ("" as string);
  const worksMap: { [key: string]: string } = {
    Milling: "Фрезерный",
    "Turning-Milling": "Токарно-фрезерный",
    "Turning-Automatic": "Токарно-автоматный",
    Fitting: "Слесарный",
    Grinding: "Шлифовальный",
    "Overall Productivity": "Общая производительность",
    Others: "Другие",
  };
  // const elements: {name: string, value: string}[] = [];
  const names = props.data.reduce(
    (accum: any, element: any) => [
      ...accum,
      { month: element.Month, year: element.Year },
    ],
    []
  );
  console.log(names);
  const lines: any = [];
  const treedValues: any[] = [];
  const values = props.data.reduce(
    (accum: any, element: any, currentIndex: number) => {
      console.log(element, "Productivivnt");
      const production = element.Productivity ?? 0;
      treedValues.push([currentIndex, production]);
      return [...accum, production];
    },
    []
  );
  console.log(values, "VALUES");

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
    title: {
      text: `${getName()} производительность`,
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
      right: 0,
      top: 30,
      data: [
        "производительность",
        "Плановая производительность",
        "Тренд производительности",
      ],
    },
    xAxis: {
      type: "category",
      data: names.map(
        ({ month, year }: { month: string; year: string }) => `${year}/${month}`
      ),
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "производительность",
        data: values,
        type: "bar",
      },
      {
        name: "Плановая производительность",
        data: lines,
        type: "line",
        itemStyle: {
          color: "red",
        },
        showSymbol: false,
      },
      {
        name: "Тренд производительности",
        data: treedOeeValues,
        type: "line",
        showSymbol: false,
      },
    ],
    grid: {
      left: "10%", // отступ слева
      right: "10%", // отступ справа
      bottom: "10%", // отступ снизу
      top: "30%", // отступ сверху
      containLabel: true, // включает метки в область графика
    },
  };
  function getName() {
    return worksMap[nameGraph] ?? "Данные отсутсвуют";
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
  });

  return (
    <Box>
      <Typography> </Typography>
      <Box sx={{ height: "180px" }} ref={refBox} />
    </Box>
  );
}

export { OrdersGraph };
