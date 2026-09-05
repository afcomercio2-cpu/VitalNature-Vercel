import { describe, expect, it } from 'vitest';
import { FALLBACK_PRODUCT_IMAGE, resolveProductImage } from './productImage';

describe('resolveProductImage', () => {
  it('preserves absolute image URLs', () => {
    expect(resolveProductImage('https://images.example.com/item.jpg')).toBe(
      'https://images.example.com/item.jpg',
    );
  });

  it('preserves already published paths', () => {
    expect(resolveProductImage('/images/item.png')).toBe('/images/item.png');
  });

  it('normalizes legacy file names into the deployment storage path', () => {
    expect(resolveProductImage('item.png')).toBe('/api/manus-storage/item.png');
  });

  it('uses a valid local fallback for missing values', () => {
    expect(resolveProductImage('')).toBe(FALLBACK_PRODUCT_IMAGE);
    expect(resolveProductImage(null)).toBe(FALLBACK_PRODUCT_IMAGE);
  });
});
