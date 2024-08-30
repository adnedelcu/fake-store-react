import { useState, useEffect } from 'react';
import { Layout } from './Layout.jsx';
import { CartProductCard } from './CartProductCard.jsx';
import { getCart, isInCart, updateCart } from '../utils/storage.js';

export const Cart = () => {
  const [products, setProducts] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    // Load the JSON data
    setProducts(getCart());
  }, []);

  useEffect(() => {
    setCartTotal(products.reduce((prev, product) => product.quantity * product.price + prev, 0));
  }, [products]);

  const increaseQuantity = (product) => {
    const cart = getCart();
    if (!isInCart(product)) return;
    const index = cart.findIndex(cartProduct => cartProduct.id === product.id);
    product.quantity++;
    cart[index] = product;
    updateCart(cart);
    setProducts(cart);
  };

  const decreaseQuantity = (product) => {
    const cart = getCart();
    if (!isInCart(product)) return;
    const index = cart.findIndex(cartProduct => cartProduct.id === product.id);
    product.quantity--;
    if (product.quantity === 0) {
      cart.splice(index, 1);
      updateCart(cart);
      setProducts(cart);
      return;
    }
    cart[index] = product;
    updateCart(cart);
    setProducts(cart);
  };

  return (
    <Layout>
      <section className="grid grid-cols-3">
        {products.map(product => <CartProductCard key={product.id} product={product} decreaseQuantity={decreaseQuantity} increaseQuantity={increaseQuantity} />)}
      </section>
      <section>
        <h3>Total: {cartTotal}</h3>
      </section>
    </Layout>
  );
};
