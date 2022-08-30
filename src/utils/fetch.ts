type Fetch = (
  input: RequestInfo,
  init?: RequestInit,
) => Promise<Response>;

export const fetchAbsolute =
  (fetch: Fetch) =>
  (baseUrl: string) =>
  (url: string, ...params: RequestInit[]) => {
    if (typeof url === 'string' && url.startsWith('/')) {
      return fetch(baseUrl + url, ...params);
    }
    return fetch(url, ...params);
  };
