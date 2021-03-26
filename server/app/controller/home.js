'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx, app } = this;
    let res = await app.mysql.select('article')
    console.log(res)
    ctx.body = 'hi, egg';
  }
}

module.exports = HomeController;
