export const addToCart = (product) => {
  const cart = getCart();
  if (!isInCart(product)) {
    product.quantity = 1;
    cart.push(product);
  } else {
    const index = cart.findIndex(cartProduct => cartProduct.id === product.id);
    product.quantity++;
    cart[index] = product;
  }
  updateCart(cart);
};

export const removeFromCart = (product) => {
  const cart = getCart();
  if (!isInCart(product)) return;
  const index = cart.findIndex(cartProduct => cartProduct.id === product.id);
  cart.splice(index, 1);
  updateCart(cart);
};

export const getCart = () => {
  return JSON.parse(localStorage.getItem('cart') || '[]');
};

export function updateCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

export const isInCart = (product) => {
  const cart = getCart();
  return cart.find(cartProduct => product.id == cartProduct.id) !== undefined;
}
