import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteProduct, toggleAvailability } from "./productsSlice";
import { EditProductForm } from "./EditProductForm";
import "./products.css";
import { Button } from "@mui/material";

export function ProductsList() {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  const [editingProductId, setEditingProductId] = useState(null);

  const handleEditClick = (productId) => {
    setEditingProductId(productId);
  };

  const handleCloseEditForm = () => {
    setEditingProductId(null);
  };

  return (
    <div>
      {editingProductId && (
        <EditProductForm
          productId={editingProductId}
          onClose={handleCloseEditForm}
        />
      )}
      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id} className="product-item">
            <div>
              {product.name} - {product.description} - ${product.price} -{" "}
              {product.available ? "Доступный" : "Не доступный"}
            </div>
            <div className="product-actions">
              <Button variant="contained" className="button" onClick={() => dispatch(toggleAvailability(product.id))} >
                Переключить доступность
              </Button>
              <Button variant="contained" className="button" onClick={() => handleEditClick(product.id)} >
                Редактировать
              </Button>
              <Button variant="contained" className="button" onClick={() => dispatch(deleteProduct(product.id))} >
                Удалить
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
