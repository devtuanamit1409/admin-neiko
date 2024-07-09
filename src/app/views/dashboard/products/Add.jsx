import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Container,
  CircularProgress,
  Snackbar,
  Alert,
} from "@mui/material";
import axios from "axios";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [sizes, setSizes] = useState([
    { size: "", retailPrice: "", wholesalePrice: "" },
  ]);
  const [colors, setColors] = useState([""]);
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [loading, setLoading] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const handleAddSize = () => {
    setSizes([...sizes, { size: "", retailPrice: "", wholesalePrice: "" }]);
  };

  const handleRemoveSize = (index) => {
    const newSizes = sizes.filter((_, i) => i !== index);
    setSizes(newSizes);
  };

  const handleAddColor = () => {
    setColors([...colors, ""]);
  };

  const handleRemoveColor = (index) => {
    const newColors = colors.filter((_, i) => i !== index);
    setColors(newColors);
  };

  const handleSizeChange = (index, event) => {
    const { name, value } = event.target;
    const newSizes = sizes.map((size, i) =>
      i === index ? { ...size, [name]: value } : size
    );
    setSizes(newSizes);
  };

  const handleColorChange = (index, event) => {
    const newColors = colors.map((color, i) =>
      i === index ? event.target.value : color
    );
    setColors(newColors);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("sizes", JSON.stringify(sizes));
    formData.append("colors", JSON.stringify(colors));
    if (image) {
      formData.append("image", image);
    }

    try {
      const response = await axios.post(
        "https://api-neiko.site/api/products/create",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setSnackbarSeverity("success");
      setSnackbarMessage(response.data.message);
      setOpenSnackbar(true);
      setName("");
      setDescription("");
      setSizes([{ size: "", retailPrice: "", wholesalePrice: "" }]);
      setColors([""]);
      setImage(null);
      setImagePreview("");
    } catch (error) {
      setSnackbarSeverity("error");
      setSnackbarMessage(
        error.response?.data?.message || "Có lỗi xảy ra khi tạo sản phẩm"
      );
      setOpenSnackbar(true);
    } finally {
      setLoading(false);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Thêm sản phẩm
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Tên sản phẩm"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <TextField
          label="Mô tả"
          fullWidth
          margin="normal"
          multiline
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Typography variant="h6" component="h2" gutterBottom>
          Kích thước và Giá
        </Typography>
        {sizes.map((size, index) => (
          <Box key={index} display="flex" alignItems="center" mb={2}>
            <TextField
              label="Kích thước"
              name="size"
              margin="normal"
              value={size.size}
              onChange={(e) => handleSizeChange(index, e)}
              required
            />
            <TextField
              label="Giá bán lẻ"
              name="retailPrice"
              margin="normal"
              value={size.retailPrice}
              onChange={(e) => handleSizeChange(index, e)}
              required
            />
            <TextField
              label="Giá bán sỉ"
              name="wholesalePrice"
              margin="normal"
              value={size.wholesalePrice}
              onChange={(e) => handleSizeChange(index, e)}
              required
            />
            <Button onClick={() => handleRemoveSize(index)}>Xóa</Button>
          </Box>
        ))}
        <Button onClick={handleAddSize} variant="outlined" sx={{ mb: 2 }}>
          Thêm kích thước
        </Button>

        <Typography variant="h6" component="h2" gutterBottom>
          Màu sắc
        </Typography>
        {colors.map((color, index) => (
          <Box key={index} display="flex" alignItems="center" mb={2}>
            <TextField
              label="Màu sắc"
              margin="normal"
              value={color}
              onChange={(e) => handleColorChange(index, e)}
              required
            />
            <Button onClick={() => handleRemoveColor(index)}>Xóa</Button>
          </Box>
        ))}
        <Button onClick={handleAddColor} variant="outlined" sx={{ mb: 2 }}>
          Thêm màu sắc
        </Button>

        <Typography variant="h6" component="h2" gutterBottom>
          Hình ảnh
        </Typography>
        <input type="file" onChange={handleImageChange} />
        {imagePreview && (
          <Box mt={2}>
            <Typography variant="body1">Ảnh xem trước:</Typography>
            <img src={imagePreview} alt="Preview" width="100px" />
          </Box>
        )}

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 3 }}
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} /> : "Thêm sản phẩm"}
        </Button>
      </form>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default AddProduct;
