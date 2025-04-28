
export interface Product {
  name: string;
  description: string;
  presentation?: string;
  image: string;
  price: number;
}

export interface ProductCatalog {
  vinagres: Product[];
  salsas: Product[];
  esencias: Product[];
}

export type ProductCategory = keyof ProductCatalog;

export const products: ProductCatalog = {
  "vinagres": [
    {
      "name": "Vinagre Blanco 5000ml",
      "description": "Vinagre blanco destilado de alta pureza, perfecto para conservas y limpieza.",
      "presentation": "5000ml",
      "image": "https://images.unsplash.com/photo-1528750717929-32abb73d3bd9?ixlib=rb-4.0.3",
      "price": 60.00
    },
    {
      "name": "Vinagre Blanco 3000ml",
      "description": "Vinagre blanco destilado de alta pureza, perfecto para conservas y limpieza.",
      "presentation": "3000ml",
      "image": "https://images.unsplash.com/photo-1528750717929-32abb73d3bd9?ixlib=rb-4.0.3",
      "price": 40.00
    },
    {
      "name": "Vinagre Blanco 500ml",
      "description": "Vinagre blanco destilado de alta pureza, perfecto para conservas y limpieza.",
      "presentation": "500ml",
      "image": "https://images.unsplash.com/photo-1528750717929-32abb73d3bd9?ixlib=rb-4.0.3",
      "price": 15.00
    },
    {
      "name": "Vinagre de Manzana 500ml",
      "description": "Vinagre de manzana natural, rico en probióticos y beneficios para la salud.",
      "presentation": "500ml",
      "image": "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-4.0.3",
      "price": 15.00
    }
  ],
  "salsas": [
    {
      "name": "Salsa de Soya 160ml",
      "description": "Salsa de soya tradicional, perfecta para condimentar y dar sabor.",
      "presentation": "160ml",
      "image": "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?ixlib=rb-4.0.3",
      "price": 10.00
    },
    {
      "name": "Salsa de Soya 900ml",
      "description": "Salsa de soya tradicional, perfecta para condimentar y dar sabor.",
      "presentation": "900ml",
      "image": "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?ixlib=rb-4.0.3",
      "price": 25.00
    },
    {
      "name": "Salsa Negra 160ml",
      "description": "Salsa negra especial, ideal para realzar el sabor de tus platillos.",
      "presentation": "160ml",
      "image": "https://images.unsplash.com/photo-1614113072653-8f2390d3ae4a?ixlib=rb-4.0.3",
      "price": 10.00
    },
    {
      "name": "Salsa Negra 900ml",
      "description": "Salsa negra especial, ideal para realzar el sabor de tus platillos.",
      "presentation": "900ml",
      "image": "https://images.unsplash.com/photo-1614113072653-8f2390d3ae4a?ixlib=rb-4.0.3",
      "price": 25.00
    },
    {
      "name": "Salsa Negra 3000ml",
      "description": "Salsa negra especial, ideal para realzar el sabor de tus platillos.",
      "presentation": "3000ml",
      "image": "https://images.unsplash.com/photo-1614113072653-8f2390d3ae4a?ixlib=rb-4.0.3",
      "price": 50.00
    },
    {
      "name": "Salsa de Ajo 160ml",
      "description": "Salsa de ajo concentrada, perfecta para sazonar y marinar.",
      "presentation": "160ml",
      "image": "https://images.unsplash.com/photo-1614113072653-8f2390d3ae4a?ixlib=rb-4.0.3",
      "price": 10.00
    },
    {
      "name": "Salsa de Ajo 900ml",
      "description": "Salsa de ajo concentrada, perfecta para sazonar y marinar.",
      "presentation": "900ml",
      "image": "https://images.unsplash.com/photo-1614113072653-8f2390d3ae4a?ixlib=rb-4.0.3",
      "price": 25.00
    },
    {
      "name": "Salsa para Carnes 160ml",
      "description": "Salsa especial para realzar el sabor de todo tipo de carnes.",
      "presentation": "160ml",
      "image": "https://images.unsplash.com/photo-1614113072653-8f2390d3ae4a?ixlib=rb-4.0.3",
      "price": 10.00
    },
    {
      "name": "Salsa Inglesa 160ml",
      "description": "Salsa inglesa clásica, ideal para condimentar y marinar.",
      "presentation": "160ml",
      "image": "https://images.unsplash.com/photo-1614113072653-8f2390d3ae4a?ixlib=rb-4.0.3",
      "price": 10.00
    }
  ],
  "esencias": [
    {
      "name": "Esencia de Kola",
      "description": "Esencia de kola para bebidas y postres.",
      "image": "https://images.unsplash.com/photo-1599021456807-02ba4657df99?ixlib=rb-4.0.3",
      "price": 8.00
    },
    {
      "name": "Esencia de Vainilla",
      "description": "Esencia natural de vainilla, perfecta para repostería.",
      "image": "https://images.unsplash.com/photo-1599021456807-02ba4657df99?ixlib=rb-4.0.3",
      "price": 8.00
    },
    {
      "name": "Esencia de Coco",
      "description": "Esencia de coco natural para postres y bebidas.",
      "image": "https://images.unsplash.com/photo-1599021456807-02ba4657df99?ixlib=rb-4.0.3",
      "price": 8.00
    },
    {
      "name": "Esencia de Mantecado",
      "description": "Esencia de mantecado para helados y postres.",
      "image": "https://images.unsplash.com/photo-1599021456807-02ba4657df99?ixlib=rb-4.0.3",
      "price": 8.00
    },
    {
      "name": "Esencia de Chicle",
      "description": "Esencia de chicle para dulces y bebidas.",
      "image": "https://images.unsplash.com/photo-1599021456807-02ba4657df99?ixlib=rb-4.0.3",
      "price": 8.00
    },
    {
      "name": "Esencia de Limón",
      "description": "Esencia de limón natural para repostería y bebidas.",
      "image": "https://images.unsplash.com/photo-1599021456807-02ba4657df99?ixlib=rb-4.0.3",
      "price": 8.00
    },
    {
      "name": "Esencia de Piña Amarilla",
      "description": "Esencia de piña amarilla para postres y bebidas.",
      "image": "https://images.unsplash.com/photo-1599021456807-02ba4657df99?ixlib=rb-4.0.3",
      "price": 8.00
    },
    {
      "name": "Esencia de Piña Roja",
      "description": "Esencia de piña roja para postres y bebidas.",
      "image": "https://images.unsplash.com/photo-1599021456807-02ba4657df99?ixlib=rb-4.0.3",
      "price": 8.00
    },
    {
      "name": "Esencia de Fresa",
      "description": "Esencia de fresa natural para postres y bebidas.",
      "image": "https://images.unsplash.com/photo-1599021456807-02ba4657df99?ixlib=rb-4.0.3",
      "price": 8.00
    },
    {
      "name": "Esencia de Maracuyá",
      "description": "Esencia de maracuyá para postres y bebidas.",
      "image": "https://images.unsplash.com/photo-1599021456807-02ba4657df99?ixlib=rb-4.0.3",
      "price": 8.00
    },
    {
      "name": "Esencia de Leche Condensada",
      "description": "Esencia de leche condensada para postres y bebidas.",
      "image": "https://images.unsplash.com/photo-1599021456807-02ba4657df99?ixlib=rb-4.0.3",
      "price": 8.00
    }
  ]
};
