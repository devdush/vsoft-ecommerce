import React from "react";
import HomeHeader from "./header";
import { Box } from "@mui/material";
const HomeView = () => {
  return (
    <Box
     sx={{ display: "flex", flex: "1", flexDirection: "column" }}>
      <HomeHeader />
      <main>
        <div>Home Content</div>
      </main>
    </Box>
  );
};

export default HomeView;
