import client, { BASE_URL } from './client';

describe('API Client', () => {
  it('should have the correct base URL', () => {
    expect(client.defaults.baseURL).toBe(BASE_URL);
  });

  it('should have the correct timeout', () => {
    expect(client.defaults.timeout).toBe(2000);
  });

  it('should have the correct Content-Type header', () => {
    expect(client.defaults.headers['Content-Type']).toBe('application/json');
  });
});
