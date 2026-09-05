const FALLBACK_PRODUCT_IMAGE = '/images/product-placeholder.svg';

export function resolveProductImage(image: unknown): string {
  if (typeof image !== 'string' || image.trim() === '') return FALLBACK_PRODUCT_IMAGE;
  const normalized = image.trim();
  if (/^https?:\/\//i.test(normalized) || normalized.startsWith('/')) return normalized;
  const storageBase = (import.meta.env.VITE_STORAGE_BASE_URL || '/api/manus-storage').replace(/\/$/, '');
  return `${storageBase}/${normalized}`;
}

export { FALLBACK_PRODUCT_IMAGE };
