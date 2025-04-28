
import React, { useState, useRef } from 'react';
import Header from '@/components/Header';
import ProductGrid from '@/components/ProductGrid';
import ProductList from '@/components/ProductList';
import FilterPanel from '@/components/FilterPanel';
import PrintModal from '@/components/PrintModal';
import { products, ProductCatalog, ProductCategory } from '@/data/products';
import { useReactToPrint } from 'react-to-print';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Index = () => {
  // State variables
  const [currentView, setCurrentView] = useState<'grid' | 'list'>('grid');
  const [showFilterPanel, setShowFilterPanel] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'todos'>('todos');
  const [showDescription, setShowDescription] = useState(true);
  const [showPrice, setShowPrice] = useState(true);
  const [isPrintModalOpen, setIsPrintModalOpen] = useState(false);
  
  // Print functionality
  const printRef = useRef<HTMLDivElement>(null);
  
  const handlePrint = useReactToPrint({
    content: () => printRef.current,
    documentTitle: 'Sabores del Valle - Catálogo',
    onBeforeGetContent: () => {
      document.body.classList.add('print-landscape');
    },
    onAfterPrint: () => {
      document.body.classList.remove('print-landscape');
      setIsPrintModalOpen(false);
    }
  });

  // Filter products based on selected category
  const getFilteredProducts = () => {
    if (selectedCategory === 'todos') {
      return Object.entries(products).flatMap(([_, categoryProducts]) => categoryProducts);
    }
    return products[selectedCategory];
  };
  
  // Handle category tabs
  const handleCategoryChange = (category: ProductCategory | 'todos') => {
    setSelectedCategory(category);
  };

  // Toggle filter panel
  const handleFilterToggle = () => {
    setShowFilterPanel(!showFilterPanel);
  };

  // Print modal handlers
  const handlePrintClick = () => {
    setIsPrintModalOpen(true);
  };
  
  const handlePrintConfirm = () => {
    handlePrint();
  };

  const filteredProducts = getFilteredProducts();
  
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header 
        onViewChange={setCurrentView}
        onPrintClick={handlePrintClick}
        currentView={currentView}
        onFilterToggle={handleFilterToggle}
      />
      
      <main className="flex-grow p-4 sm:p-6 md:p-8 max-w-7xl mx-auto w-full">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-sabores-primary">Nuestros Productos</h2>
          <p className="text-gray-600">Descubre nuestra selección de productos de alta calidad</p>
        </div>

        {showFilterPanel && (
          <FilterPanel 
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
            showDescription={showDescription}
            showPrice={showPrice}
            onToggleDescription={() => setShowDescription(!showDescription)}
            onTogglePrice={() => setShowPrice(!showPrice)}
          />
        )}
        
        <Tabs defaultValue="todos" value={selectedCategory} className="mb-6">
          <TabsList className="bg-sabores-background">
            <TabsTrigger 
              value="todos" 
              onClick={() => handleCategoryChange('todos')}
              className="data-[state=active]:bg-sabores-primary data-[state=active]:text-white"
            >
              Todos
            </TabsTrigger>
            <TabsTrigger 
              value="vinagres" 
              onClick={() => handleCategoryChange('vinagres')}
              className="data-[state=active]:bg-sabores-primary data-[state=active]:text-white"
            >
              Vinagres
            </TabsTrigger>
            <TabsTrigger 
              value="salsas" 
              onClick={() => handleCategoryChange('salsas')}
              className="data-[state=active]:bg-sabores-primary data-[state=active]:text-white"
            >
              Salsas
            </TabsTrigger>
            <TabsTrigger 
              value="esencias" 
              onClick={() => handleCategoryChange('esencias')}
              className="data-[state=active]:bg-sabores-primary data-[state=active]:text-white"
            >
              Esencias
            </TabsTrigger>
          </TabsList>
        </Tabs>
        
        <div ref={printRef} className="print:p-4">
          <div className="print:mb-6 print:block hidden">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold text-sabores-primary">Sabores del Valle</h1>
                <p className="text-gray-600">Catálogo de Productos</p>
              </div>
              <div className="text-right text-sm text-gray-500">
                <p>www.saboresdelvalledominicano.com</p>
                <p>Tel: (809) 555-1234</p>
              </div>
            </div>
          </div>
          
          {currentView === 'grid' ? (
            <ProductGrid 
              products={filteredProducts} 
              showDescription={showDescription}
              showPrice={showPrice}
            />
          ) : (
            <ProductList 
              products={filteredProducts}
              showDescription={showDescription}
              showPrice={showPrice}
            />
          )}
        </div>
      </main>
      
      <footer className="py-4 px-8 bg-sabores-background border-t border-sabores-secondary/20 text-center text-sm text-gray-600">
        <p>© {new Date().getFullYear()} Sabores del Valle. Todos los derechos reservados.</p>
      </footer>
      
      <PrintModal 
        isOpen={isPrintModalOpen}
        onClose={() => setIsPrintModalOpen(false)}
        showDescription={showDescription}
        showPrice={showPrice}
        onToggleDescription={() => setShowDescription(!showDescription)}
        onTogglePrice={() => setShowPrice(!showPrice)}
        onPrint={handlePrintConfirm}
      />
    </div>
  );
};

export default Index;
