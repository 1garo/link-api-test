const Bling = require("../model/Bling");
const pipeDriveModel = require('../model/pipeDrive.model');
const blingModel = require('../model/bling.model');

class BlingController {
  async store(_, res) {
    // const data = await Bling.create(req.body);
    try {
      const negotiationNotSent = await Bling.bling.find({ bling_send: false });
      // console.log(negotiationNotSent);
      // return res.json({data: negotiationNotSent})
      if (negotiationNotSent.length > 0) {
        const newOrdered = await blingModel.insertOrdered(negotiationNotSent);
        console.log('enviado para bling', newOrdered);
        Bling.updateMany({ bling_send: false }, { $set: { bling_send: true } });
      }
      return res.json({data: 'deu'});
    } catch (error) {
      console.log(error);
      return res.json({data: error});
    }
  }
  async index(_, res) {
    try {
      // const data = await Bling.find({});
      // let [startNumber] = await Bling.find({}).sort({ id: -1 }).limit(1).toArray();
      // startNumber = (startNumber && startNumber.id) ? startNumber.id : 0;

      // console.log(data);
      const newDeal = await pipeDriveModel.searchAllDeal(0);
      console.log('print: ', newDeal);
      if (newDeal) {
        await Bling.bling.insertMany(newDeal).then(() => {
          console.log('inserindo novos pedidos');
        });
      return res.json(newDeal);
      }
    } catch (error) {
      // throw new Error(error);
      console.log('caiu aqui', error);
      return res.json({data: error});
    }
  }
}

module.exports = new BlingController();