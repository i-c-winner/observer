import * as echarts from "echarts";
import { Box } from "@mui/material";
// @ts-ignore
import React, { useEffect, useRef, useState } from "react";
import { MyButton } from "../../widgets/UI/Button/MyButton";
import { EChartOption } from "echarts";
import { myData } from "../../shared/assets/data/myData";
import { myMonth } from "../../shared/assets/data/myMonth";

function OrderGraph(props: { options: { days: typeof myData, month: typeof myMonth } }) {
  const refBox = useRef<HTMLDivElement>();
  const [type, setType] = useState<"days" | "month">("days");
  const sourceData = props.options[type] as EChartOption;

  function clickAction() {
    setType(type === "days" ? "month" : "days");
  }

  function getHeight() {
    // eslint-disable-next-line no-undef
    return (window.innerHeight - 322) / 2;
  }

  useEffect(() => {
    if (refBox.current) {
      refBox.current!.id = "chart-container";
    }

    const myArts = echarts.init(refBox.current!, {}, {
      renderer: "canvas",
      // useDirtyRect: false,
    });
    myArts.setOption(sourceData);
    return () => {
      myArts.dispose();
    };
  }, [type]);
  return <Box sx={{
    width: "100%",
    display: "flex",
    backgroundColor: "grey",
    padding: "20px 35px",
    boxSizing: "border-box"
  }}>
    <Box sx={
      {
        width: "80%",
        height: getHeight(),
        backgroundColor: "white",
      }
    } ref={refBox}>
    </Box>
    <MyButton
      buttonProps={{
        height: "50px",
        width: "220px",
        marginLeft: "100px"
      }}
      wrapperProps={{
        text: "Сутки / Месяц",
        flexgrow: "1",

      }} actions={{click: clickAction}}/>
  </Box>;
}

export { OrderGraph };