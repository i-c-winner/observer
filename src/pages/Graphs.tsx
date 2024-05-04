// @ts-ignore
import React, { useState, ReactNode, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import Stack from "@mui/material/Stack";
import { Footer } from "../widgets/footer/Footer";
import { BarHeader } from "../widgets/headers";
import { MyButton } from "../widgets/UI/Button/MyButton";
import { Oee } from "../widgets/graphs/Oee";
import { Quot } from "../widgets/graphs/Quots";
import { Orders } from "../widgets/graphs/Orders";

function Graphs() {
  const { type }: any = useParams<"oee" | "quota" | "orders" | string>();
  const [currentType, setCurrentType] = useState<"days" | "weeks" | "month">(
    "days"
  );
  const [children, setChildren] = useState<ReactNode | null>(null);

  function getStyles(type: "days" | "weeks" | "month") {
    const styles = {
      width: "200px",
      onClick: () => {
        console.log("MyButton");
      },
    };
    return type === currentType
      ? styles
      : { ...styles, backgroundColor: "rgba(0, 0, 0, 0.2)" };
  }

  useEffect(() => {
    switch (type) {
      case "oee":
        setChildren(<Oee type={currentType} />);
        break;
      case "quota":
        setChildren(<Quot type={currentType} />);
        break;
      case "orders":
        setChildren(<Orders />);
        break;
      default:
        break;
    }
  }, [currentType]);

  return (
    <Box
      sx={{
        display: "flex",
        flexFlow: "column",
        justifyContent: "space-between",
        height: "100vh",
      }}
    >
      <BarHeader type={type} />
      {(type === "oee" || type === "quota") && (
        <Box
          sx={{
            height: "50px",
            display: "flex",
            alignItems: "center",
            paddingLeft: "10px",
            boxSizing: "border-box",
          }}
        >
          <Typography
            sx={{
              marginRight: "100px",
            }}
          >
            Сортировать по:
          </Typography>
          <Stack spacing={3} direction="row">
            <MyButton
              wrapperProps={{ text: "Дням" }}
              actions={{ click: () => setCurrentType("days") }}
              buttonProps={getStyles("days")}
            />
            <MyButton
              wrapperProps={{ text: "Неделям" }}
              actions={{ click: () => setCurrentType("weeks") }}
              buttonProps={getStyles("weeks")}
            />
            <MyButton
              wrapperProps={{ text: "Месяцам" }}
              actions={{ click: () => setCurrentType("month") }}
              buttonProps={getStyles("month")}
            />
          </Stack>
        </Box>
      )}
      <Box
        sx={{
          flexGrow: "1",
          display: "flex",
        }}
      >
        {children}

        {(type === "oee" || type === "quota") && (
          <Box
            sx={{
              width: "20%",
              border: "1px solid black",
              margin: "0 30px",
              boxSizing: "border-box",
              padding: "10px",
            }}
          >
            <Typography>Дополнительная информация</Typography>
          </Box>
        )}
      </Box>
      <Footer />
    </Box>
  );
}

export { Graphs };
