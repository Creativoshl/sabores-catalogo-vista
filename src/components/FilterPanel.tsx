
import React from 'react';
import { ProductCategory } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

interface FilterPanelProps {
  selectedCategory: ProductCategory | 'todos';
  onCategoryChange: (category: ProductCategory | 'todos') => void;
  showDescription: boolean;
  showPrice: boolean;
  onToggleDescription: () => void;
  onTogglePrice: () => void;
}

const FilterPanel: React.FC<FilterPanelProps> = ({
  selectedCategory,
  onCategoryChange,
  showDescription,
  showPrice,
  onToggleDescription,
  onTogglePrice
}) => {
  const categories: Array<ProductCategory | 'todos'> = ['todos', 'vinagres', 'salsas', 'esencias'];
  const categoryLabels = {
    todos: 'Todos los productos',
    vinagres: 'Vinagres',
    salsas: 'Salsas',
    esencias: 'Esencias'
  };
  
  return (
    <div className="bg-sabores-background p-4 rounded-md border border-sabores-secondary/20 mb-6">
      <h3 className="text-lg font-medium mb-3 text-sabores-primary">Filtros</h3>
      
      <div className="mb-4">
        <h4 className="text-sm font-medium mb-2 text-sabores-text">Categorías</h4>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              className={selectedCategory === category 
                ? "bg-sabores-primary text-white hover:bg-sabores-primary/90" 
                : "border-sabores-secondary/30 text-sabores-text"}
              onClick={() => onCategoryChange(category)}
            >
              {categoryLabels[category]}
            </Button>
          ))}
        </div>
      </div>
      
      <div className="mb-2">
        <h4 className="text-sm font-medium mb-2 text-sabores-text">Opciones de visualización</h4>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="show-description" 
              checked={showDescription}
              onCheckedChange={onToggleDescription}
            />
            <Label htmlFor="show-description">Mostrar descripción</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="show-price" 
              checked={showPrice}
              onCheckedChange={onTogglePrice}
            />
            <Label htmlFor="show-price">Mostrar precio</Label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;
