
import React from 'react';
import { Product } from '@/data/products';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

interface ProductListProps {
  products: Product[];
  showDescription: boolean;
  showPrice: boolean;
}

const ProductList: React.FC<ProductListProps> = ({ 
  products,
  showDescription,
  showPrice 
}) => {
  return (
    <div className="overflow-x-auto">
      <Table className="w-full border-collapse">
        <TableHeader className="bg-sabores-background">
          <TableRow className="border-b border-sabores-secondary/20">
            <TableHead className="w-12">Imagen</TableHead>
            <TableHead>Nombre</TableHead>
            {showDescription && <TableHead>Descripción</TableHead>}
            <TableHead>Presentación</TableHead>
            {showPrice && <TableHead className="text-right">Precio</TableHead>}
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product, index) => (
            <TableRow 
              key={`${product.name}-${index}`}
              className="border-b border-sabores-secondary/10 hover:bg-sabores-background/50"
            >
              <TableCell className="p-2 align-middle">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-12 h-12 object-cover rounded"
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder.svg";
                  }}
                />
              </TableCell>
              <TableCell className="font-medium">{product.name}</TableCell>
              {showDescription && <TableCell className="text-sm text-gray-600 max-w-xs">{product.description}</TableCell>}
              <TableCell>{product.presentation || "-"}</TableCell>
              {showPrice && <TableCell className="text-right font-bold text-sabores-accent">${product.price.toFixed(2)}</TableCell>}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProductList;
