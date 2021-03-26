'use strict';

const Controller = require('egg').Controller;

class ArticleController extends Controller {
  async create() {
    const { ctx, app } = this;
    let result = await ctx.service.article.create()
    // let res = await app.mysql.select('article')
    // console.log(res)
    ctx.body = result;
  }
}

module.exports = ArticleController;