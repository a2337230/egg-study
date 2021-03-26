'use strict';

const Controller = require('egg').Controller;

class ProductController extends Controller {
  async index() {
    const { ctx } = this;
    let res = await ctx.service.product.index()
    // ctx.body = res;
    await ctx.render('index.html', {
      res
    })
  }
  async detail() {
    const { ctx } = this;
    console.log(ctx.query)
    ctx.body = ctx.query.id
  }
  async detail2() {
    const { ctx } = this;
    console.log(ctx.params)
    ctx.body = ctx.params.id
  }
  async create() {
    const { ctx } = this;
    console.log(ctx.params)
    ctx.body = ctx.request.body
  }
}

module.exports = ProductController;