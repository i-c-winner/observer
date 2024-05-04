// @ts-ignore
import React from "react";
import { Box } from "@mui/material";
import { OrderGraph } from "../../entities/graphs/OrderGraph";
import { myData } from "../../shared/assets/data/myData";
import { myMonth } from "../../shared/assets/data/myMonth";

function Orders() {
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <OrderGraph options={{ days: myData, month: myMonth }} />
      <OrderGraph options={{ days: myData, month: myMonth }} />
    </Box>
  );
}

export { Orders };
