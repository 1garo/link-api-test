const ConnectBling = require('../../services/connectBling.service');
const ObjectToXml = require('../utils/bling/objectToXml');
const Bling = require('./Bling');

class BlingModel {
  static async insertOrdered(data) {
    const arrayXml = await new ObjectToXml(data).xmlModel();
    const resultArray = [];
    arrayXml.forEach((element) => resultArray.push(new ConnectBling('/pedido/json/').post({
      xml: element,
    }).catch(error => {
      return Promise.reject(error)
    })));
    return Promise.all(resultArray).catch((error) => {
      Promise.reject(error);
    });
  }
}

module.exports = BlingModel
