import React, { useEffect, useState } from "react";

import "./ProductList.css";
import "antd/dist/antd.css";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

//Importing Components
import { DownOutlined } from "@ant-design/icons";
import Product from "../Product/Product";
import ProductModal from "../ProductModal/ProductModal";
import { Provider, useSelector } from "react-redux";
import { selectProduct } from "../../features/productsSlice";
import ProductStore from "../DataStore/ProductStore";

const ProductList = () => {
  const Products = useSelector(selectProduct);
  const [prodDrog, updateProdDrog] = useState(ProductStore);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(Products);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateProdDrog(items);
  }

  let arrayPrice = [];

  Products?.forEach((prod) => {
    arrayPrice?.push(prod.price);
  });

  const sortAsc = arrayPrice.sort((a, b) => {
    return a - b;
  });

  // const sortDesc = arrayPrice.sort((a, b) => {
  //   return b - a;
  // });

  return (
    <div className="main_container">
      <div className="addProduct_container">
        <div className="productModal">
          <ProductModal />
        </div>
        <div className="sort" onClick={() => console.log(sortAsc)}>
          <h3>Sort by: Price</h3>
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
