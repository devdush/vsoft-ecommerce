import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import ShopHeader from "./header";

const ShopLayout = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", background: "white" }}>
      <ShopHeader />
      <main style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <Outlet />
      </main>
    </Box>
  );
};

export default ShopLayout;
