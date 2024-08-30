import { useEffect, useState } from "react";
import { addToCart, isInCart } from "../utils/storage.js";

export const ProductCard = ({ product }) => {
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    setIsAdded(isInCart(product));
  }, []);

  return (
    <article className='card shadow-xl flex flex-col gap-4 m-4 min-h-96 '>
      <figure>
        <img className='w-full min-h-48 object-cover aspect-square' src={product.image} alt={product.title} />
      </figure>
      <div className='card-body flex flex-col gap-4'>
        <div className='card-title text-white'>{product.title}</div>
        <div className='h-4 w-full'>{product.category}</div>
        <div className='h-4 w-full'>{product.price}</div>
        <div className='h-4 w-full'>{product.rating.rate}</div>
        <div className='h-4 w-full'>{product.rating.count} reviews</div>
      </div>
      <div className="card-footer">
        {!isAdded && <button className="add-to-cart btn btn-primary" onClick={() => { setIsAdded(true); addToCart(product)}}>Add to cart</button>}
      </div>
    </article>
  )
}
