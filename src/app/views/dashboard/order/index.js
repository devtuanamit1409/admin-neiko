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
  Typography,
  Snackbar,
  Alert,
  FormControlLabel,
  Switch,
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

const OrderTable = () => {
  const [orders, setOrders] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const getOrders = async () => {
    try {
      const res = await axios.get(`https://api-neiko.site/api/orders`, {
        params: { page, limit: 10 },
      });
      const ordersData = res.data;
      setOrders(ordersData.orders);
      setTotalPages(ordersData.totalPages);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  useEffect(() => {
    getOrders();
  }, [page]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleOpen = (order) => {
    setSelectedOrder(order);
  };

  const handleClose = () => {
    setSelectedOrder(null);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://api-neiko.site/api/orders/${id}`);
      setSnackbarSeverity("success");
      setSnackbarMessage("Order deleted successfully");
      setOpenSnackbar(true);
      getOrders();
    } catch (error) {
      setSnackbarSeverity("error");
      setSnackbarMessage(
        error.response?.data?.message || "Error deleting order"
      );
      setOpenSnackbar(true);
    }
  };

  const handleUpdateStatus = async (id, isDelivered) => {
    try {
      const res = await axios.put(`https://api-neiko.site/api/orders/${id}`, {
        isDelivered,
      });
      setSnackbarSeverity("success");
      setSnackbarMessage("Order status updated successfully");
      setOpenSnackbar(true);
      setSelectedOrder(res.data);
      getOrders();
    } catch (error) {
      setSnackbarSeverity("error");
      setSnackbarMessage(
        error.response?.data?.message || "Error updating order status"
      );
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Tên khách hàng</TableCell>
              <TableCell align="center">Điện thoại</TableCell>
              <TableCell align="center">Địa chỉ</TableCell>
              <TableCell align="center">Tổng giá trị</TableCell>
              <TableCell align="center">Trạng thái</TableCell>
              <TableCell align="center">Ngày tạo</TableCell>
              <TableCell align="center">Hành động</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order._id}>
                <TableCell align="center">{order.user.name}</TableCell>
                <TableCell align="center">{order.phone}</TableCell>
                <TableCell align="center">{order.shippingAddress}</TableCell>
                <TableCell align="center">
                  {order.totalPrice.toLocaleString()} đ
                </TableCell>
                <TableCell align="center">
                  {order.isDelivered ? "Đã giao" : "Đang xử lý"}
                </TableCell>
                <TableCell align="center">
                  {new Date(order.createdAt).toLocaleDateString()}
                </TableCell>
                <TableCell align="center">
                  <Button color="primary" onClick={() => handleOpen(order)}>
                    Xem
                  </Button>
                  <Button
                    color="secondary"
                    onClick={() => handleDelete(order._id)}
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

      <Modal open={!!selectedOrder} onClose={handleClose}>
        <Box sx={style}>
          {selectedOrder && (
            <>
              <Typography variant="h6" component="h2">
                Chi tiết đơn hàng
              </Typography>
              <Typography variant="body1">
                Tên khách hàng: {selectedOrder.user.name}
              </Typography>
              <Typography variant="body1">
                Điện thoại: {selectedOrder.phone}
              </Typography>
              <Typography variant="body1">
                Địa chỉ: {selectedOrder.shippingAddress}
              </Typography>
              <Typography variant="body1">
                Tổng giá trị: {selectedOrder.totalPrice.toLocaleString()} đ
              </Typography>
              <Typography variant="body1">
                Trạng thái:{" "}
                {selectedOrder.isDelivered ? "Đã giao" : "Đang xử lý"}
              </Typography>
              <FormControlLabel
                control={
                  <Switch
                    checked={selectedOrder.isDelivered}
                    onChange={(e) =>
                      handleUpdateStatus(selectedOrder._id, e.target.checked)
                    }
                    color="primary"
                  />
                }
                label="Đã giao"
              />
              <Typography variant="body1">
                Ngày tạo:{" "}
                {new Date(selectedOrder.createdAt).toLocaleDateString()}
              </Typography>
              <Typography variant="body1">Sản phẩm:</Typography>
              {selectedOrder.orderItems.map((item) => (
                <Box key={item._id} mb={2}>
                  <Typography variant="body2">
                    Tên sản phẩm: {item.product.name}
                  </Typography>
                  <Typography variant="body2">Số lượng: {item.qty}</Typography>
                  <Typography variant="body2">Mã: {item.size}</Typography>
                  {/* <Typography variant="body2">Màu sắc: {item.color}</Typography> */}
                </Box>
              ))}
            </>
          )}
          <Button onClick={handleClose} sx={{ mt: 2 }}>
            Đóng
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

export default OrderTable;
