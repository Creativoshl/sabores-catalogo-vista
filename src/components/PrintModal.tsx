
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

interface PrintModalProps {
  isOpen: boolean;
  onClose: () => void;
  showDescription: boolean;
  showPrice: boolean;
  onToggleDescription: () => void;
  onTogglePrice: () => void;
  onPrint: () => void;
}

const PrintModal: React.FC<PrintModalProps> = ({
  isOpen,
  onClose,
  showDescription,
  showPrice,
  onToggleDescription,
  onTogglePrice,
  onPrint
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-sabores-primary">Opciones de impresión</DialogTitle>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <h3 className="text-sm font-medium">Selecciona los campos a mostrar:</h3>
            
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="print-description" 
                checked={showDescription}
                onCheckedChange={onToggleDescription}
              />
              <Label htmlFor="print-description">Mostrar descripción</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="print-price" 
                checked={showPrice}
                onCheckedChange={onTogglePrice}
              />
              <Label htmlFor="print-price">Mostrar precio</Label>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-medium">Configuración de página:</h3>
            <p className="text-xs text-muted-foreground">
              El catálogo se imprimirá en formato horizontal (landscape). 
              Asegúrate de seleccionar esta orientación en las opciones de tu impresora.
            </p>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancelar
          </Button>
          <Button onClick={onPrint} className="bg-sabores-primary hover:bg-sabores-primary/90">
            Imprimir
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PrintModal;
