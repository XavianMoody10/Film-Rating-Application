import React from "react";
import Pagination from "@mui/material/Pagination";

export const MediaPagination = ({ amoutOfPages, currentPage, onChange }) => {
  return (
    <Pagination
      count={amoutOfPages}
      size="large"
      page={Number(currentPage)}
      sx={{
        "& .Mui-selected": {
          bgcolor: "gray !Important",
        },

        "& .MuiPaginationItem-root": {
          color: "#fff",
        },
      }}
      onChange={onChange}
    />
  );
};
