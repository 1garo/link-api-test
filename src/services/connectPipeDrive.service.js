const fetch =  require('node-fetch');
const dotenv =  require('dotenv');
const Querystring =  require('query-string');

class ConnectPipeDrive {
  constructor(path) {
    this.envs = dotenv.config().parsed;

    this.requestsUrl = this.envs.PIPEDRIVE_BASE_URL + path;
  }

  async get(queryObject = {}) {
    const queryDicente = Querystring.stringify({
      api_token: this.envs.PIPEDRIVE_KEY,
      ...queryObject,
    });
    const data = await fetch(`${this.requestsUrl}?${queryDicente}`, {
      method: 'get',
      headers: {
        Accept: 'application/json',
      },
    });
    if (data.status === 200) {
      const result = await data.json();
      return result.success ? result.data : new Error('error na requisição');
    }
    return new Error('error na requisição');
  }
}

module.exports = ConnectPipeDrive
