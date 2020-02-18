export class FetchApi {
  static async post(path, data, options = {}) {
    return await FetchApi.request(path, 'POST', data, options);
  }

  static async get(path, data, options = {}) {
    return await FetchApi.request(path, 'GET', data, options);
  }

  static async put(path, data, options = {}) {
    return await FetchApi.request(path, 'PUT', data, options);
  }

  static async patch(path, data, options = {}) {
    return await FetchApi.request(path, 'PATCH', data, options);
  }

  static async delete(path, data, options = {}) {
    return await FetchApi.request(path, 'DELETE', data, options);
  }

  static async request(path, method, data) {
    const token = localStorage.getItem('access_token');

    let headers = new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': token,
    });

    const myInit = {
      method,
      headers,
      body: JSON.stringify(data),
    };
    return await fetch(`${path}`, myInit).then(res => {
      return res.json().then(json => {
        if (res.status >= 200 && res.status < 300) {
          return Promise.resolve(json);
        } else {
          return Promise.reject(json);
        }
      }).catch(e => {
        return Promise.reject(e);
      });
    }).catch(e => {
      return Promise.reject(e);
    });
  }
}