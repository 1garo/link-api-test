const ConnectPipeDrive = require('../../services/connectPipeDrive.service');

class PipeDriveModel {
  static formattedDate(data = new Date) {
    console.log(data)
    var dia  = data.split("-")[2];
    var mes  = data.split("-")[1];
    var ano  = data.split("-")[0];
  
    return dia + '/' + ("0"+mes).slice(-2) + '/' + ("0"+ano).slice(-2);
  }

  static async searchAllDeal(start = 0) {
    const data = await new ConnectPipeDrive('/deals').get({
      status: 'won',
      start,
    });
    if (data) {
      return  data.map(
        ({
          // eslint-disable-next-line camelcase
          id, add_time, value, }) => ({
            id,
            value,
            bling_send: false,
            date: add_time.split(" ")[0]
          }));
    }
    return data;
  }
}

module.exports = PipeDriveModel