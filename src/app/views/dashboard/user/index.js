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
  Modal,
  Box,
  TextField,
  Typography,
  Snackbar,
  Alert,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [open, setOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [userForm, setUserForm] = useState({
    level: "",
    commission: "",
    balance: "",
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const getUsers = async () => {
    try {
      const res = await axios.get(`https://api-neiko.site/api/users`, {
        params: { page, limit: 10 },
      });
      const usersData = res.data;
      setUsers(usersData.users);
      setTotalPages(usersData.totalPages);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    getUsers();
  }, [page]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleOpen = (user = null) => {
    setSelectedUser(user);
    if (user) {
      setUserForm({
        level: user.level,
        commission: user.commission || "",
        balance: user.balance,
      });
    } else {
      setUserForm({
        level: "",
        commission: "",
        balance: "",
      });
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    setUserForm({ ...userForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      if (selectedUser) {
        await axios.put(
          `https://api-neiko.site/api/users/${selectedUser._id}`,
          userForm
        );
      } else {
        await axios.post("https://api-neiko.site/api/users", userForm);
      }
      setSnackbarSeverity("success");
      setSnackbarMessage(
        selectedUser ? "User đã được cập nhật" : "User đã được thêm"
      );
      setOpenSnackbar(true);
      getUsers();
      handleClose();
    } catch (error) {
      setSnackbarSeverity("error");
      setSnackbarMessage(error.response?.data?.message || "Có lỗi xảy ra");
      setOpenSnackbar(true);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://api-neiko.site/api/users/${id}`);
      setSnackbarSeverity("success");
      setSnackbarMessage("User đã được xóa");
      setOpenSnackbar(true);
      getUsers();
    } catch (error) {
      setSnackbarSeverity("error");
      setSnackbarMessage(error.response?.data?.message || "Có lỗi xảy ra");
      setOpenSnackbar(true);
    }
  };

  const handleResetBalance = async (id) => {
    try {
      await axios.put(`https://api-neiko.site/api/users/reset-balance/${id}/`);
      setSnackbarSeverity("success");
      setSnackbarMessage("Số dư đã được reset");
      setOpenSnackbar(true);
      getUsers();
    } catch (error) {
      setSnackbarSeverity("error");
      setSnackbarMessage(error.response?.data?.message || "Có lỗi xảy ra");
      setOpenSnackbar(true);
    }
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Tên tài khoản</TableCell>
              <TableCell align="center">Họ tên</TableCell>
              <TableCell align="center">Số điện thoại</TableCell>
              <TableCell align="center">Mã giới thiệu</TableCell>
              <TableCell align="center">Cấp độ</TableCell>
              <TableCell align="center">Hoa hồng</TableCell>
              <TableCell align="center">Số dư</TableCell>
              <TableCell align="center">Hành động</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user._id}>
                <TableCell align="center" component="th" scope="row">
                  {user.username}
                </TableCell>
                <TableCell align="center">{user.name}</TableCell>
                <TableCell align="center">{user.phone}</TableCell>
                <TableCell align="center">{user.code}</TableCell>
                <TableCell align="center">
                  {user.level === "default"
                    ? "Shop"
                    : user.level === "client"
                    ? "Khách hàng"
                    : "Đại lý"}
                </TableCell>
                <TableCell align="center">{user.commission}%</TableCell>
                <TableCell align="center">
                  {user.balance.toLocaleString()}
                </TableCell>
                <TableCell align="center">
                  <Button color="primary" onClick={() => handleOpen(user)}>
                    Sửa
                  </Button>
                  <Button
                    color="secondary"
                    onClick={() => handleDelete(user._id)}
                  >
                    Xoá
                  </Button>
                  <Button
                    color="secondary"
                    onClick={() => handleResetBalance(user._id)}
                  >
                    Reset số dư
                  </Button>
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
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography variant="h6" component="h2">
            {selectedUser ? "Sửa User" : "Thêm User"}
          </Typography>
          <FormControl fullWidth margin="normal">
            <InputLabel id="level-label">Cấp độ</InputLabel>
            <Select
              labelId="level-label"
              name="level"
              value={userForm.level}
              onChange={handleChange}
            >
              <MenuItem value="default">Shop</MenuItem>
              <MenuItem value="client">Khách hàng</MenuItem>
              <MenuItem value="agency">Đại lý</MenuItem>
            </Select>
          </FormControl>
          <TextField
            fullWidth
            margin="normal"
            label="Hoa hồng"
            name="commission"
            value={userForm.commission}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Số dư"
            name="balance"
            value={userForm.balance}
            onChange={handleChange}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            sx={{ mt: 2 }}
          >
            {selectedUser ? "Cập nhật" : "Thêm"}
          </Button>
        </Box>
      </Modal>
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
    </>
  );
};

export default UserTable;
