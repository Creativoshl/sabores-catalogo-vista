import React from 'react';
import { Product } from '@/data/products';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface ProductCardProps {
  product: Product;
  showDescription: boolean;
  showPrice: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  showDescription,
  showPrice 
}) => {
  const { name, description, presentation, image, price } = product;
  
  return (
    <Card className="overflow-hidden border border-sabores-secondary/20 h-full flex flex-col transition-all hover:shadow-md card print:block">
      <AspectRatio ratio={1} className="bg-gray-100">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover print:object-contain print:block"
          onError={(e) => {
            e.currentTarget.src = "/placeholder.svg";
          }}
        />
        {presentation && (
          <div className="absolute bottom-2 right-2 bg-sabores-primary text-white px-2 py-1 text-xs rounded-md print:bg-gray-700">
            {presentation}
          </div>
        )}
      </AspectRatio>
      <CardContent className="flex-grow p-4 print:p-2 print:block card-content">
        <h3 className="text-lg font-medium text-sabores-text mb-1 print:text-sm">{name}</h3>
        {showDescription && (
          <p className="text-sm text-gray-500 line-clamp-3 print:text-xs print:line-clamp-2">{description}</p>
        )}
      </CardContent>
      {showPrice && (
        <CardFooter className="pt-0 pb-4 px-4 print:p-2 print:block card-footer">
          <p className="text-sabores-accent font-bold print:text-sm">
            ${price.toFixed(2)}
          </p>
        </CardFooter>
      )}
    </Card>
  );
};

export default ProductCard;
