
import { Product } from './types';

export const CATALOG: Product[] = [
  {
    id: 'silk-shirt-001',
    name: 'Atelier Silk Blouse',
    category: 'Top',
    description: 'A luxurious 100% mulberry silk blouse with an elegant drape.',
    price: '€185.00',
    thumbnail: 'https://images.unsplash.com/photo-1598554747436-c9293d6a588f?auto=format&fit=crop&q=80&w=400',
    colors: [
      { name: 'Ivory', hex: '#FFFFF0' },
      { name: 'Midnight', hex: '#191970' },
      { name: 'Champagne', hex: '#F7E7CE' }
    ],
    sizes: ['XS', 'S', 'M', 'L']
  },
  {
    id: 'cashmere-coat-002',
    name: 'Savoy Wool-Cashmere Coat',
    category: 'Outerwear',
    description: 'Structured tailoring meets soft cashmere in this timeless overcoat.',
    price: '€640.00',
    thumbnail: 'https://images.unsplash.com/photo-1539533113208-f6df81452942?auto=format&fit=crop&q=80&w=400',
    colors: [
      { name: 'Camel', hex: '#C19A6B' },
      { name: 'Slate', hex: '#708090' },
      { name: 'Noir', hex: '#000000' }
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'velvet-blazer-003',
    name: 'Velvet Evening Blazer',
    category: 'Top',
    description: 'A plush velvet blazer designed for sharp evening silhouettes.',
    price: '€320.00',
    thumbnail: 'https://images.unsplash.com/photo-1594932224440-9469f32a1019?auto=format&fit=crop&q=80&w=400',
    colors: [
      { name: 'Emerald', hex: '#50C878' },
      { name: 'Burgundy', hex: '#800020' },
      { name: 'Classic Black', hex: '#1A1A1A' }
    ],
    sizes: ['S', 'M', 'L']
  },
  {
    id: 'linen-trousers-004',
    name: 'Riviera Linen Trousers',
    category: 'Bottom',
    description: 'High-waisted, wide-leg trousers crafted from breathable Italian linen.',
    price: '€145.00',
    thumbnail: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=400',
    colors: [
      { name: 'Sand', hex: '#C2B280' },
      { name: 'White', hex: '#FFFFFF' }
    ],
    sizes: ['34', '36', '38', '40', '42']
  }
];
