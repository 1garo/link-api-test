const ConnectBling = require('../../services/connectBling.service');
const ObjectToXml = require('../utils/bling/objectToXml');

class BlingModel {
  static async insertOrdered(data) {
    const arrayXml = await new ObjectToXml(data).xmlModel();
    const resultArray = [];

    arrayXml.forEach((element) => resultArray.push(new ConnectBling('/pedido/json/').post({
      xml: element,
    })));
    return Promise.all(resultArray).catch((error) => {
      throw new Error(error);
    });
  }
}

module.exports = BlingModel
