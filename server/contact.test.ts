import { beforeEach, describe, expect, it, vi } from 'vitest';
import type { TrpcContext } from './_core/context';

const { createContactMock } = vi.hoisted(() => ({
  createContactMock: vi.fn(),
}));

vi.mock('./db', () => ({
  createContact: createContactMock,
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

describe('contact.submit', () => {
  beforeEach(() => {
    createContactMock.mockReset();
    createContactMock.mockResolvedValue(true);
  });

  it('trims and normalizes a valid contact message', async () => {
    const caller = appRouter.createCaller(createContext());

    const result = await caller.contact.submit({
      name: '  Nilza  ',
      email: '  PERSON@Example.COM ',
      subject: '  Partner question  ',
      message: '  I would like to know more about the official partner link.  ',
    });

    expect(result).toEqual({ success: true });
    expect(createContactMock).toHaveBeenCalledWith({
      name: 'Nilza',
      email: 'person@example.com',
      subject: 'Partner question',
      message: 'I would like to know more about the official partner link.',
    });
  });

  it('rejects messages that are too short', async () => {
    const caller = appRouter.createCaller(createContext());

    await expect(caller.contact.submit({
      name: 'A',
      email: 'person@example.com',
      subject: 'Hi',
      message: 'Short',
    })).rejects.toThrow();
    expect(createContactMock).not.toHaveBeenCalled();
  });
});
