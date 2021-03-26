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

## POST传参

### CSRF 攻击：伪造用户请求向网站发起恶意请求。

```
// 本地开发关闭，上线后打开
// https://eggjs.org/zh-cn/core/security.html#%E5%AE%89%E5%85%A8%E5%A8%81%E8%83%81csrf%E7%9A%84%E9%98%B2%E8%8C%83   安全地址
config.security = {
    csrf: {
      enable: false,
    },
  };
```

### 获取客户端传递参数

```
const { ctx } = this;
console.log(ctx.params)
ctx.body = ctx.request.body
```

