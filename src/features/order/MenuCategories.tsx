import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import  './styles/MenuCategories.scss';
import { MenuCategory } from './models/MenuCategory';

export function MenuCategories() {
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

  return (
    <nav>
      <div className="menu-category">
        <div className='category-header'>
            <div className='category-header__title'>Our Servings</div>
          </div>
          <div className='category-list'>
            <List className='category-list__item'>
              {
                categories.map((cat: MenuCategory)=> {
                  return (
                    <div className='category-list__item'>
                      <ListItem disablePadding key={cat.id}>
                        <ListItemButton>
                          <ListItemText primary={cat.name} />
                        </ListItemButton>
                  </ListItem>
                    </div>
                    
                  );
                })
              }
            </List>
          </div>
      </div>
       

    </nav>

  );
}
// #eaeded
