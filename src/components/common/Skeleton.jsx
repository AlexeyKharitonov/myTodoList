import { ListItem, Skeleton as SkeletonMUI } from "@mui/material";
import React from "react";

const Skeleton = () => {
  return (
    <ListItem divider>
      <SkeletonMUI width={35} />
      <SkeletonMUI width="70%" sx={{ ml: 3, mr: 1 }} />
      <SkeletonMUI width="15%" sx={{ mx: 1 }} />
      <SkeletonMUI width={35} sx={{ mx: 1 }} />
      <SkeletonMUI width={35} sx={{ mx: 1 }} />
    </ListItem>
  );
};

export default Skeleton;
