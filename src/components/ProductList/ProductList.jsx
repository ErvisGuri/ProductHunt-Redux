import React, { useEffect, useState } from "react";

import "./ProductList.css";
import "antd/dist/antd.css";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

//Importing Components
import Product from "../Product/Product";
import ProductModal from "../ProductModal/ProductModal";
import { useSelector, useDispatch } from "react-redux";
import { selectProduct, sortProducts } from "../../features/productsSlice";
import ProductStore from "../DataStore/ProductStore";

//Material UI
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const ProductList = () => {
  const Products = useSelector(selectProduct);
  const [prodDrog, updateProdDrog] = useState(ProductStore);
  const [direction, setDirection] = useState("none");
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(Products);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateProdDrog(items);
  }

  const dispatch = useDispatch();

  function sortAsc() {
    if (direction === "NONE") {
      dispatch(sortProducts("ASC"));
      setDirection("ASC");
    } else {
      dispatch(sortProducts("NONE"));
      setDirection("NONE");
    }
  }

  function sortDesc() {
    if (direction === "NONE") {
      dispatch(sortProducts("DESC"));
      setDirection("DESC");
    } else {
      dispatch(sortProducts("NONE"));
      setDirection("NONE");
    }
  }

  return (
    <div className="main_container">
      <div className="addProduct_container">
        <div className="productModal">
          <ProductModal />
        </div>
        <div className="sort">
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            Sort By: Featured
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={sortAsc}>Price: Low to High</MenuItem>
            <MenuItem onClick={sortDesc}>Price: High to Low</MenuItem>
          </Menu>
        </div>
      </div>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="product">
          {(provided) => (
            <div
              className="productList_container"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {Products?.map((item, { id }, index) => (
                <Draggable key={id} draggableId={id} index={index}>
                  {(provided) => (
                    <Product
                      item={item}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    />
                  )}
                </Draggable>
              ))}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      {/*
        <div className="productList_container">
        {Products?.map((item, i) => (
            <Product item={item} key={i} />
          ))} */}
    </div>
  );
};

export default ProductList;
