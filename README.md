# egg记录
## 初始化

```
npm init egg --type=simple
```

## 路由定义

### 示例

```
// router.js
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/product', controller.product.index);
};
```

```
// product.js
const Controller = require('egg').Controller;

class ProductController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, product';
  }
}
module.exports = ProductController;
```

## Get传参

### 示例

```
async detail() {
    const { ctx } = this;
    ctx.body = ctx.query
}
```

```
// router.js
router.get('/', controller.home.index);
  router.get('/product', controller.product.index);
  router.get('/product/detail', controller.product.detail);
  router.get('/product/detail/:id', controller.product.detail2);
```

```
// router.js
router.get('/product/detail2/:id', controller.product.detail2);
// product.js
async detail2() {
    const { ctx } = this;
    console.log(ctx.params)
    ctx.body = ctx.params.id
}
```

