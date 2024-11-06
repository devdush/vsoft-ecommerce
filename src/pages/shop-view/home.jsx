import { Box } from "@mui/material";
import React from "react";
import { logoutUser } from "../../services/auth/logout";

const ShopHome = () => {
  const onclick = async () => {
    const response = await logoutUser();
    console.log(response);
    
  };
  return (
    <div>
      <Box>ShopHome</Box>
      <button onClick={onclick}>Clic</button>
    </div>
  );
};

export default ShopHome;
