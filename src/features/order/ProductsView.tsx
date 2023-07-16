import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import PropTypes from 'prop-types';


import  './styles/ProductsView.scss';
import { MenuCategory } from './models/MenuCategory';

export function ProductsView() {
  const categories: MenuCategory []  = [
    {
      id: '1',
      name: 'Popular'
    },
    {
      id: '1',
      name: 'Household'
    },
    {
      id: '1',
      name: 'Meat & Seafood'
    },
    {
      id: '1',
      name: 'Ice cream'
    },
    {
      id: '1',
      name: 'Seasonal fruits'
    },
    {
      id: '1',
      name: 'Breads & Bakery'
    },
    {
      id: '1',
      name: 'Frozen Food'
    },
    {
      id: '1',
      name: 'Snacks'
    },
    {
      id: '1',
      name: 'Organic dairy'
    },
    {
      id: '1',
      name: 'Fruits'
    },
    {
      id: '1',
      name: 'Vegetable'
    },
  ];

  const products = [
    {
      image: "https://www.teenaagnel.com/wp-content/uploads/2019/12/food-photography-in-dubai.jpg",
      name: "PRODUCT ITEM NUMBER 1",
      description: "Description for product item number 1",
      price: 5.99,
      quantity: 2
    },
    {
      image: "https://media.istockphoto.com/id/1403973419/photo/table-top-of-food-spread-on-table.jpg?s=1024x1024&w=is&k=20&c=MUzQiekBfW_aJnHk-Q0oGwyJyz6K1XUwq-_UZCf1tMM=",
      name: "PRODUCT ITEM NUMBER 2",
      description: "Description for product item number 1",
      price: 9.99,
      quantity: 1
    },
    {
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      name: "PRODUCT ITEM NUMBER 2",
      description: "Description for product item number 1",
      price: 9.99,
      quantity: 1
    },
    {
      image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      name: "PRODUCT ITEM NUMBER 2",
      description: "Description for product item number 1",
      price: 9.99,
      quantity: 1
    },
    {
      image: "https://cdn.pixabay.com/photo/2015/12/09/17/11/vegetables-1085063_1280.jpg",
      name: "PRODUCT ITEM NUMBER 2",
      description: "Description for product item number 1",
      price: 9.99,
      quantity: 1
    },
    {
      image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      name: "PRODUCT ITEM NUMBER 2",
      description: "Description for product item number 1",
      price: 9.99,
      quantity: 1
    },
    {
      image: "https://cdn.pixabay.com/photo/2015/12/09/17/11/vegetables-1085063_1280.jpg",
      name: "PRODUCT ITEM NUMBER 2",
      description: "Description for product item number 1",
      price: 9.99,
      quantity: 1
    }
  ];

  return (
    <article>
          <section className="container">
      <ul className="products">
        {products.map((product, index) => {
          return (
            <li className="row" key={index}>
              <div className="col left">
                <div className="thumbnail">
                  <a href="#">
                    <img src={product.image} alt={product.name} />
                  </a>
                </div>
                <div className="detail">
                  <div className="name">
                    <a href="#">{product.name}</a>
                  </div>
                  <div className="description">{product.description}</div>
                  <div className="price"> $ {product.price}</div>
                </div>
              </div>

              <div className="col right">
                <div className="quantity">
                  <input
                    type="text"
                    className="quantity"
                    step="1"
                    value={product.quantity}
                    onChange={(event) => {}}
                  />
                </div>

                <div className="remove">
                  <svg
                    onClick={() => {}}
                    version="1.1"
                    className="close"
                    x="0px"
                    y="0px"
                    viewBox="0 0 60 60"
                    enableBackground="new 0 0 60 60"
                  >
                    <polygon points="38.936,23.561 36.814,21.439 30.562,27.691 24.311,21.439 22.189,23.561 28.441,29.812 22.189,36.064 24.311,38.186 30.562,31.934 36.814,38.186 38.936,36.064 32.684,29.812" />
                  </svg>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
    </article>
  );
}
// #eaeded
