import { describe, expect, it } from 'vitest';
import { getAffiliatePartner, getAffiliateUrl, isValidAffiliateUrl } from './affiliate';

describe('affiliate helpers', () => {
  it('accepts secure and standard web URLs', () => {
    expect(isValidAffiliateUrl('https://partner.example/product')).toBe(true);
    expect(isValidAffiliateUrl('http://partner.example/product')).toBe(true);
  });

  it('rejects missing, malformed and javascript URLs', () => {
    expect(isValidAffiliateUrl(null)).toBe(false);
    expect(isValidAffiliateUrl('not-a-url')).toBe(false);
    expect(isValidAffiliateUrl('javascript:alert(1)')).toBe(false);
  });

  it('returns only configured partner metadata', () => {
    expect(getAffiliateUrl({ affiliateUrl: 'https://partner.example/item' })).toBe(
      'https://partner.example/item',
    );
    expect(getAffiliateUrl({ affiliateUrl: '' })).toBeNull();
    expect(getAffiliatePartner({ affiliatePartner: ' YesStyle ' })).toBe('YesStyle');
    expect(getAffiliatePartner({ affiliatePartner: ' ' })).toBeNull();
  });
});
