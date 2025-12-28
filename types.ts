
export interface Product {
  id: string;
  name: string;
  category: 'Top' | 'Bottom' | 'Outerwear' | 'Full';
  description: string;
  price: string;
  thumbnail: string;
  colors: { name: string; hex: string }[];
  sizes: string[];
}

export interface TryOnResult {
  id: string;
  imageUrl: string;
  timestamp: number;
  productId: string;
  color: string;
}

export type AppState = 'upload' | 'catalog' | 'fitting' | 'result';
