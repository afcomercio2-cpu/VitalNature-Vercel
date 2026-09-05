export type AffiliateProduct = {
  affiliateUrl?: string | null;
  affiliatePartner?: string | null;
};

export function isValidAffiliateUrl(value: string | null | undefined): value is string {
  if (!value) return false;

  try {
    const url = new URL(value);
    return url.protocol === 'https:' || url.protocol === 'http:';
  } catch {
    return false;
  }
}

export function getAffiliatePartner(product: AffiliateProduct): string | null {
  return product.affiliatePartner?.trim() || null;
}

export function getAffiliateUrl(product: AffiliateProduct): string | null {
  return isValidAffiliateUrl(product.affiliateUrl) ? product.affiliateUrl : null;
}
