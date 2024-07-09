/* eslint-disable react-hooks/rules-of-hooks */
// components/RoleTable.js

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

const index = () => {
  const [roles, setRoles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [open, setOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);
  const [roleForm, setRoleForm] = useState({
    name: "",
    commission: "",
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const getRoles = async () => {
    try {
      const res = await axios.get(`https://api-neiko.site/api/roles`, {
        params: { page, limit: 10 },
      });
      const rolesData = res.data;
      setRoles(rolesData.roles);
      setTotalPages(rolesData.totalPages);
    } catch (error) {
      console.error("Error fetching roles:", error);
    }
  };

  useEffect(() => {
    getRoles();
  }, [page]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleOpen = (role = null) => {
    setSelectedRole(role);
    if (role) {
      setRoleForm(role);
    } else {
      setRoleForm({ name: "", commission: "" });
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    setRoleForm({ ...roleForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      if (selectedRole) {
        await axios.put(
          `https://api-neiko.site/api/roles/${selectedRole._id}`,
          roleForm
        );
      } else {
        await axios.post("https://api-neiko.site/api/roles/create", roleForm);
      }
      setSnackbarSeverity("success");
      setSnackbarMessage(
        selectedRole ? "Vai trò đã được cập nhật" : "Vai trò đã được thêm"
      );
      setOpenSnackbar(true);
      getRoles();
      handleClose();
    } catch (error) {
      setSnackbarSeverity("error");
      setSnackbarMessage(error.response?.data?.message || "Có lỗi xảy ra");
      setOpenSnackbar(true);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://api-neiko.site/api/roles/${id}`);
      setSnackbarSeverity("success");
      setSnackbarMessage("Vai trò đã được xóa");
      setOpenSnackbar(true);
      getRoles();
    } catch (error) {
      setSnackbarSeverity("error");
      setSnackbarMessage(error.response?.data?.message || "Có lỗi xảy ra");
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={() => handleOpen()}>
        Thêm vai trò
      </Button>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Tên vai trò</TableCell>
              <TableCell align="center">Commission</TableCell>
              <TableCell align="center">Hành động</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {roles.map((role) => (
              <TableRow key={role._id}>
                <TableCell align="center" component="th" scope="row">
                  {role.name}
                </TableCell>
                <TableCell align="center">{role.commission}%</TableCell>
                <TableCell align="center">
                  <Button color="primary" onClick={() => handleOpen(role)}>
                    Sửa
                  </Button>
                  <Button
                    color="secondary"
                    onClick={() => handleDelete(role._id)}
                  >
                    Xoá
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
            {selectedRole ? "Sửa vai trò" : "Thêm vai trò"}
          </Typography>
          <TextField
            fullWidth
            margin="normal"
            label="Tên vai trò"
            name="name"
            value={roleForm.name}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Commission"
            name="commission"
            value={roleForm.commission}
            onChange={handleChange}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            sx={{ mt: 2 }}
          >
            {selectedRole ? "Cập nhật" : "Thêm"}
          </Button>
        </Box>
      </Modal>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default index;
