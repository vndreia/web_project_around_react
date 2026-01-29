class ApiCall {
  constructor(baseURL, headers) {
    this._baseURL = baseURL;
    this._headers = headers;
  }

  async makeRequest(method, endpoint, body) {
    try {
      const res = await fetch(`${this._baseURL}${endpoint}`, {
        //await makes a promise to resolve and tells async what to wait for
        method: method,
        headers: this._headers,
        body: body ? JSON.stringify(body) : null,
      });
      if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
        //jumps straight to catch block if response not ok, built in behavior of error handling
      }
    } catch (error) {
        console.log('Fetch error:', error);
    }
  }
}
