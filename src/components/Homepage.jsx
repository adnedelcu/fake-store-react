import { useEffect, useState } from 'react';
import { Layout } from './Layout.jsx';
import { ProductCard } from './ProductCard.jsx';
import { ProductCardSkeleton } from './ProductCardSkeleton.jsx';
import { Link } from 'react-router-dom';

export const Homepage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoadingProducts, setIsLoadingProducts] = useState(true);
  const [isLoadingCategories, setIsLoadingCategories] = useState(true);

  useEffect(() => {
    // Load the JSON data
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();
        setProducts(products);
        setIsLoadingProducts(false);
      } catch (error) {
        console.error('Error fetching restaurant data:', error);
      }
    };
    fetchProducts();

    const fetchCategories = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products/categories');
        const categories = await response.json();
        setCategories(categories);
        setIsLoadingCategories(false);
      } catch (error) {
        console.error('Error fetching restaurant data:', error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <Layout>
      <section>
        {isLoadingCategories ? (
          <>
            <a nohref="true" className="btn skeleton w-16"></a>
            <a nohref="true" className="btn skeleton w-16"></a>
            <a nohref="true" className="btn skeleton w-16"></a>
          </>
        ) : (
          categories.map(category => (
            <Link key={category} to={`/categories/${category}`} className='btn btn-ghost capitalize mr-2'>
              {category}
            </Link>
          ))
        )}
      </section>
      <section className="grid grid-cols-3">
        {isLoadingProducts ? (
          <>
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
          </>
        ) : (
          products.map(product => <ProductCard key={product.id} product={product} />)
        )}
      </section>
    </Layout>
  );
};
