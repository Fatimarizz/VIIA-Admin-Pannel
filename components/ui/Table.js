import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
const Table = ({ columns, rows }) => {
  return (
    <div className="pt-3 rounded-lg overflow-auto">
      <Box
        sx={{

          width: '98%',
          '& .super-app-theme--header': {
            backgroundColor: 'rgb(229 231 235 / var(--tw-bg-opacity))',
          },
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}

          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          style={{ fontSize: "13px" }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          className="custom-data-grid" // Add your custom class name

        />
      </Box>

    </div>
  );
};

export default Table;
