export class HttpAdapter {
  private readonly baseUrl;

  constructor({ baseUrl }: { baseUrl: string }) {
    this.baseUrl = baseUrl;
  }

  get<T>(url: string, params: { query: object } = { query: {} }): Promise<T> {
    const query = Object.keys(params?.query || {})
      .map(
        (key) =>
          `${key}=${Object.getOwnPropertyDescriptor(params.query, key)?.value}`,
      )
      .join("&");

    return fetch(`${this.baseUrl}${url}?${query}`).then((response) =>
      response.json(),
    );
  }

  post<T>(url: string, data: T) {
    return fetch(`${this.baseUrl}${url}`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());
  }

  patch<T>(url: string, data: T) {
    return fetch(`${this.baseUrl}${url}`, {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());
  }

  delete<T>(url: string, data: T) {
    return fetch(`${this.baseUrl}${url}`, {
      method: "DELETE",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());
  }
}
