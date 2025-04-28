
import React from 'react';
import { LayoutGrid, LayoutList, Printer, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  onViewChange: (view: 'grid' | 'list') => void;
  onPrintClick: () => void;
  currentView: 'grid' | 'list';
  onFilterToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ 
  onViewChange, 
  onPrintClick, 
  currentView,
  onFilterToggle
}) => {
  return (
    <header className="bg-sabores-primary py-3 px-4 sm:px-6 md:px-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="flex items-center">
          <img 
            src="/placeholder.svg" 
            alt="Sabores del Valle" 
            className="h-12 w-auto mr-4 bg-white rounded-full p-1"
          />
          <div>
            <h1 className="text-sabores-light text-xl sm:text-2xl font-bold">
              Sabores del Valle
            </h1>
            <p className="text-sabores-light/90 text-sm">
              Catálogo de productos
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="sm" 
            className={`text-sabores-light hover:bg-sabores-primary/80 ${
              currentView === 'grid' ? 'bg-sabores-primary/30' : ''
            }`}
            onClick={() => onViewChange('grid')}
          >
            <LayoutGrid className="h-5 w-5" />
          </Button>
          
          <Button 
            variant="ghost" 
            size="sm" 
            className={`text-sabores-light hover:bg-sabores-primary/80 ${
              currentView === 'list' ? 'bg-sabores-primary/30' : ''
            }`}
            onClick={() => onViewChange('list')}
          >
            <LayoutList className="h-5 w-5" />
          </Button>
          
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onFilterToggle}
            className="text-sabores-light hover:bg-sabores-primary/80"
          >
            <Filter className="h-5 w-5" />
          </Button>
          
          <Button 
            variant="outline" 
            size="sm" 
            onClick={onPrintClick}
            className="bg-sabores-light text-sabores-primary hover:bg-sabores-light/90 hover:text-sabores-primary"
          >
            <Printer className="h-4 w-4 mr-2" />
            Imprimir Catálogo
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
