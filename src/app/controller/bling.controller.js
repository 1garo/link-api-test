const Bling = require("../model/Bling");
const pipeDriveModel = require('../model/pipeDrive.model');
const blingModel = require('../model/bling.model');

class BlingController {
  async store(_, res) {
    try {
      const negotiationNotSent = await Bling.find({ bling_send: false });
      if (negotiationNotSent.length > 0) {
        await blingModel.insertOrdered(negotiationNotSent);
        await Bling.updateMany({ bling_send: false }, { bling_send: true } );
      } else {
        return res.json({confirm: 'Não existem novas oportunidades'});
      }
      return res.json({confirm: 'OK, caso existam novas oportunidades, elas foram inseridas corretamente!'})
    } catch (error) {
      return res.json({data: error});
    }
  }

  async index(_, res) {
    try {
      const newDeal = await pipeDriveModel.searchAllDeal(0);
      if (newDeal) { 
        try{
          await Bling.bulkWrite(newDeal.map((element) => ({
            updateMany: {
              filter: {id: element.id},
              update: { $set: element },
              upsert: true
            }
          })))
        }catch(error){
          return res.json({data: error});
        }
        return res.json({pedidos: newDeal});
      }else {
        return res.json({pedidos: 'Não existem novos pedidos!'})
      }
    } catch (error) {
      return res.json({data: error});
    }
  }
}

module.exports = new BlingController();