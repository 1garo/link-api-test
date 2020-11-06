const fetch =  require('node-fetch');
const dotenv =  require('dotenv');
const Querystring =  require('query-string');

class ConnectBling {
  constructor(path) {
    this.envs = dotenv.config().parsed;

    this.requestsUrl = this.envs.BLING_URL + path;
  }

  async get(queryObject = {}) {
    const queryDicente = Querystring.stringify({
      apikey: this.envs.BLING_KEY,
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

  async post(bodyObject = {}) {
    const queryDicente = Querystring.stringify({
      apikey: this.envs.BLING_KEY,
    });

    const requestsUrl = (bodyObject.xml) ? `${this.requestsUrl}?${queryDicente}&xml=${bodyObject.xml}` : `${this.requestsUrl}?${queryDicente}`;
    const data = await fetch(requestsUrl, {
      method: 'post',
    });
    const result = await data.json();
    if (result.retorno && !result.retorno.erros) {
      return result.retorno;
    }
    return result.retorno.erros[0].erro.msg;
  }
}

module.exports = ConnectBling 