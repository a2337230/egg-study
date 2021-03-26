const Service = require('egg').Service;

class ArticleService extends Service {
  async create() {
    return {
      id: 1
    }
  }
}
module.exports = ArticleService