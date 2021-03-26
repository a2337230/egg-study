const Service = require('egg').Service;

class ProductService extends Service {
  async index () {
    return {
      id: 123
    }
  }
}

module.exports = ProductService