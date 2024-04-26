// import { options } from "../../shared/assets/data/myData";
import * as echarts from "echarts";
import { Box } from "@mui/material";
import { useEffect, useRef } from "react";
import { MyButton } from "../../widgets/UI/Button/MyButton";
import { EChartOption } from "echarts";
import { MyData } from "../../shared/assets/data/myData";

function OrderGraph(props: { options: typeof MyData }) {
  const refBox = useRef<HTMLDivElement>();
  const secondSourceData = props.options.second as EChartOption;

  function clickAction() {
    console.log("click");
  }

  function getHeight() {
    return (window.innerHeight - 322) / 2;
  }

  useEffect(() => {
    if (refBox.current) {
      refBox.current.id = "chart-container";
    }

    const myArts = echarts.init(refBox.current, null, {
      renderer: "canvas"
    });
    console.log(myArts, props.options);
    // myArts.setOption(firstSourceData);
    myArts.setOption(secondSourceData);
  });

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

      }} actions={clickAction}/>
  </Box>;
}

export { OrderGraph };