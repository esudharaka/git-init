import React, { useState } from 'react';
import { MenuCategories } from './MenuCategories';
import { ProductsView } from './ProductsView';
import { CartSummary } from './CartSummary';


export function OrderLandingPage() {
 

  return (
    <div id="main">
      <MenuCategories />
      <ProductsView />
      <CartSummary />
    </div>

  );
}
