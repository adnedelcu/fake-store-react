export const CartProductCard = ({ product, decreaseQuantity, increaseQuantity }) => {
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
        {product.quantity > 0 && (
          <div className="join">
            <button className="join-item btn btn-primary" onClick={() => decreaseQuantity(product)}>-</button>
            <button className="join-item btn btn-disabled">{product.quantity}</button>
            <button className="join-item btn btn-primary" onClick={() => increaseQuantity(product)}>+</button>
          </div>
        )}
      </div>
    </article>
  )
}
