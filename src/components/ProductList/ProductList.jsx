import React, { useEffect, useState, useRef } from "react";

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
  const dragItem = useRef();
  const dragOverItem = useRef();
  const [list, setList] = useState([Products]);
  const dispatch = useDispatch();

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dragStart = (e, position) => {
    dragItem.current = position;
  };

  const dragEnter = (e, position) => {
    dragOverItem.current = position;
  };

  const drop = (e) => {
    const copyListItems = [...list];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setList(copyListItems);
  };

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

  useEffect(() => {
    if (!!Products) {
      setList(Products);
    }
  }, [Products]);

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
      <div className="productList_container">
        {list?.map((item, index) => (
          <div
            onDragStart={(e) => dragStart(e, index)}
            onDragEnter={(e) => dragEnter(e, index)}
            onDragEnd={drop}
            draggable
            key={index}
          >
            <Product item={item} key={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
