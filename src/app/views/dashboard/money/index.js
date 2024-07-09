import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Pagination,
  Button,
  Stack,
  TextField,
  Box,
  Snackbar,
  Alert,
} from "@mui/material";
import axios from "axios";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { vi } from "date-fns/locale";
import { format } from "date-fns";

const UserBalanceTable = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const getUsers = async () => {
    try {
      const res = await axios.get(
        `https://api-neiko.site/api/users/with-balance`,
        {
          params: {
            page,
            limit: 10,
            startDate: format(startDate, "dd/MM/yyyy"),
            endDate: format(endDate, "dd/MM/yyyy"),
          },
        }
      );
      const usersData = res.data;
      setUsers(usersData.users);
      setTotalPages(usersData.totalPages);
    } catch (error) {
      setSnackbarSeverity("error");
      setSnackbarMessage(error.response?.data?.message || "Có lỗi xảy ra");
      setOpenSnackbar(true);
    }
  };

  useEffect(() => {
    getUsers();
  }, [page, startDate, endDate]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Box>
      <Box display="flex" justifyContent="space-between" mb={2}>
        <LocalizationProvider dateAdapter={AdapterDateFns} locale={vi}>
          <DatePicker
            label="Ngày bắt đầu"
            value={startDate}
            onChange={(newValue) => setStartDate(newValue)}
            renderInput={(params) => <TextField {...params} />}
            inputFormat="dd/MM/yyyy"
          />
          <DatePicker
            label="Ngày kết thúc"
            value={endDate}
            onChange={(newValue) => setEndDate(newValue)}
            renderInput={(params) => <TextField {...params} />}
            inputFormat="dd/MM/yyyy"
          />
        </LocalizationProvider>
        <Button variant="contained" color="primary" onClick={getUsers}>
          Lấy danh sách
        </Button>
      </Box>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Tên người dùng</TableCell>
              <TableCell align="center">Tổng hoa hồng</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.name}>
                <TableCell align="center">{user.name}</TableCell>
                <TableCell align="center">
                  {user.totalCommission.toLocaleString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Stack
        sx={{ paddingTop: "15px", display: "flex", justifyContent: "center" }}
        spacing={2}
      >
        <Pagination
          count={totalPages}
          page={page}
          color="primary"
          onChange={handleChangePage}
        />
      </Stack>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity={snackbarSeverity}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default UserBalanceTable;
