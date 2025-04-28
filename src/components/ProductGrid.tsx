
import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '@/data/products';

interface ProductGridProps {
  products: Product[];
  showDescription: boolean;
  showPrice: boolean;
}

const ProductGrid: React.FC<ProductGridProps> = ({ 
  products,
  showDescription,
  showPrice 
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 print:grid-cols-3">
      {products.map((product, index) => (
        <ProductCard
          key={`${product.name}-${index}`}
          product={product}
          showDescription={showDescription}
          showPrice={showPrice}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
