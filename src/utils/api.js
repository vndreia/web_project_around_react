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
      return res.json(); //parses response body as JSON and returns a promise
    } catch (error) {
      console.log("Fetch error:", error);
    }
  }
}

//setup or bluebrint to call the makeRequest method for each endpoint and HTTP method:

export const apiCall = new ApiCall(
  "https://around-api.es.tripleten-services.com/v1/",
  {
    "content-type": "application/json",
    authorization: "b0e42903-56d9-4a35-ba61-32f35d4aa19b",
  },
);
