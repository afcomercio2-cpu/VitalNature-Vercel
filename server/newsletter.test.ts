import { beforeEach, describe, expect, it, vi } from 'vitest';
import type { TrpcContext } from './_core/context';

const { subscribeNewsletterMock } = vi.hoisted(() => ({
  subscribeNewsletterMock: vi.fn(),
}));

vi.mock('./db', () => ({
  subscribeNewsletter: subscribeNewsletterMock,
  getProducts: vi.fn().mockResolvedValue([]),
  getProductById: vi.fn().mockResolvedValue(undefined),
  getCategories: vi.fn().mockResolvedValue([]),
}));

import { appRouter } from './routers';

function createContext(): TrpcContext {
  return {
    user: undefined,
    req: { protocol: 'https', headers: {} } as TrpcContext['req'],
    res: {} as TrpcContext['res'],
  };
}

describe('newsletter.subscribe', () => {
  beforeEach(() => {
    subscribeNewsletterMock.mockReset();
    subscribeNewsletterMock.mockResolvedValue(true);
  });

  it('normalizes a valid email and persists the subscription', async () => {
    const caller = appRouter.createCaller(createContext());

    const result = await caller.newsletter.subscribe({ email: '  PERSON@Example.COM ' });

    expect(result).toEqual({ success: true });
    expect(subscribeNewsletterMock).toHaveBeenCalledWith('person@example.com');
  });

  it('rejects malformed email input', async () => {
    const caller = appRouter.createCaller(createContext());

    await expect(caller.newsletter.subscribe({ email: 'not-an-email' })).rejects.toThrow();
    expect(subscribeNewsletterMock).not.toHaveBeenCalled();
  });
});
