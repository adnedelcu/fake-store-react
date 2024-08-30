export const ProductCardSkeleton = () => {
  return (
    <article className='card shadow-xl flex flex-col gap-4 m-4 h-96 '>
      <div className='skeleton h-36 w-full rounded-t-2xl rounded-b-none '></div>
      <div className='flex flex-col gap-4 m-8'>
        <div className='skeleton h-4 w-28'></div>
        <div className='skeleton h-4 w-full'></div>
        <div className='skeleton h-4 w-full'></div>
        <div className='skeleton h-4 w-full'></div>
        <div className='skeleton h-4 w-full'></div>
      </div>
    </article>
  )
}
