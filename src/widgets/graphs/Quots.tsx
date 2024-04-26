import { getDays } from "../utilites/getDays";
import { getWeeks } from "../utilites/getWeeks";
import { getMonth } from "../utilites/getMonth";
import { PieChart, Pie, Legend, CartesianGrid, ResponsiveContainer } from "recharts";
import { Box } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import * as echarts from "echarts";
import "./styles.scss";

const ROOT_PATH = "https://echarts.apache.org/examples";

const weatherIcons = {
  Sunny: ROOT_PATH + "/data/asset/img/weather/sunny_128.png",
  Cloudy: ROOT_PATH + "/data/asset/img/weather/cloudy_128.png",
  Showers: ROOT_PATH + "/data/asset/img/weather/showers_128.png"
};

function Quot(props: { type: "days" | "month" | "weeks" }) {
  const option = {
    legend: {
      bottom: 10,
      left: 'center',
      data: Object.keys(getData())
    },
    series: [
      {
        type: 'pie',
        data: getData()
      }
    ]
  }
  function getData() {
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
    myChart.resize();
    });
  return <Box key="ioll" ref={refBox}>
  </Box>;
}

export { Quot };