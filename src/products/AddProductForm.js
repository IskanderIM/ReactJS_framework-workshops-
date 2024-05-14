import React, { useState } from "react";
import { addProduct } from "./productsSlice";
import "./products.css";
import { useDispatch } from "react-redux";
import { Box, Button, TextField } from "@mui/material";

export function AddProductForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [available, setAvailable] = useState(false);
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    if (name && description && price) {
      dispatch(addProduct(name, description, price, available));
      setName("");
      setDescription("");
      setPrice("");
      setAvailable(false);
    }
  };

  return (
    <Box
      className="form-adding-products"
      onSubmit={onSubmit}
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      {/* <form onSubmit={onSubmit}> */}
      {/* <input
        type="text"
        placeholder="Название товара"
        value={name}
        onChange={(e) => setName(e.target.value)}
      /> */}
      <TextField id="outlined-basic" label="Название товара" variant="outlined"
        type="text"
        placeholder="Название товара"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField id="outlined-basic" label="Описание" variant="outlined"
        placeholder="Описание"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      {/* <input
        type="number"
        placeholder="Цена"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      /> */}

      <TextField id="outlined-basic" label="Цена" variant="outlined"
        type="number"
        placeholder="Цена"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          checked={available}
          onChange={(e) => setAvailable(e.target.checked)}
        />
        Доступный
      </label>

      <Button variant="contained" className="button" type="submit">
        Добавить товар
      </Button>
      {/* </form> */}
    </Box>
  );
}
