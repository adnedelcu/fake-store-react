import { useEffect, useState } from 'react';
import { Layout } from './Layout.jsx';
import { ProductCard } from './ProductCard.jsx';
import { ProductCardSkeleton } from './ProductCardSkeleton.jsx';
import { useParams } from 'react-router-dom';

export const Category = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load the JSON data
    const fetchProducts = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
        const products = await response.json();
        setProducts(products);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching restaurant data:', error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <Layout>
      <section className="grid grid-cols-3">
        {isLoading ? (
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
