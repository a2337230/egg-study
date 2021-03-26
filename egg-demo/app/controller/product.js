'use strict';

const Controller = require('egg').Controller;

class ProductController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, product';
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