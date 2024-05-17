// @ts-ignore
import React from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../styles.scss";

function BarHeader(props: {
  type: "oee" | "quota" | "orders" | "status" | "complexity" | undefined;
}) {
  const navigate = useNavigate();
  const typePages: "oee" | "quota" | "orders" | "status" | "complexity" =
    props.type ?? "oee";

  const pagesTypes = {
    oee: "OEE",
    quota: "Трудоёмкость",
    orders: "Продуктивность",
    status: "Статус заказов",
    complexity: "Трудоёмкость",
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100px",
      }}
    >
      <Box
        sx={{
          width: "100vw",
        }}
      >
        <Box
          sx={{
            height: "100px",
            width: "100%",
            background: "#2A4858",
          }}
        >
          <Typography
            style={{ textTransform: "uppercase" }}
            sx={{
              fontSize: "3rem",
              padding: "25px",
            }}
            color="white"
          >
            {pagesTypes[typePages]}
          </Typography>
        </Box>
      </Box>
      <div
        onClick={() => {
          navigate("/enter");
        }}
        className="logo__bar logo__bar_bar-header"
      />
    </Box>
  );
}

export { BarHeader };
