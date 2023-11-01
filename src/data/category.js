import { crabs } from './crab';
import { fish } from './fish';
import { lobsters } from './lobster';
import { shrimps } from './shrimp';

export const categories = [
  {
    slug: 'shrimp',
    nameEn: 'Shrimp',
    nameId: 'Udang',
    icon: '/images/product/shrimp.svg',
    products: shrimps
  },
  {
    slug: 'lobster',
    nameEn: 'Lobster',
    nameId: 'Lobster',
    icon: '/images/product/lobster.svg',
    products: lobsters
  },
  {
    slug: 'crab',
    nameEn: 'Crab',
    nameId: 'Kepiting',
    icon: '/images/product/crab.svg',
    products: crabs
  },
  {
    slug: 'fish',
    nameEn: 'Fish',
    nameId: 'Ikan',
    icon: '/images/product/fish.svg',
    products: fish
  }
];
