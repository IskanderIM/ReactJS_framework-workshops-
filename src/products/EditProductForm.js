import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct } from "./productsSlice";
import "./products.css";
import { Button } from "@mui/material";


export function EditProductForm({ productId, onClose }) {
  const product = useSelector((state) =>
    state.products.products.find((product) => product.id === productId)
  );
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [available, setAvailable] = useState(false);

  useEffect(() => {
    if (product) {
      setName(product.name);
      setDescription(product.description);
      setPrice(product.price);
      setAvailable(product.available);
    }
  }, [product]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateProduct({ id: productId, name, description, price, available })
    );
    onClose();
  };

  if (!product) return null;

  return (
    <div className="edit-product-form">
      <h2>Редактировать товар</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          className="textarea"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          className="input"
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <div className="form-changing-products">
          <label>
            <input
              type="checkbox"
              checked={available}
              onChange={(e) => setAvailable(e.target.checked)}
            />
            Доступный
          </label>
          <Button variant="contained" className="button" type="submit">
            Изменить товар
          </Button>
          <Button variant="outlined" className="button button-close" onClick={onClose}>
            Отмена
          </Button>
        </div>
      </form>
    </div>
  );
}
