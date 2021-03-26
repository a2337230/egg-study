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

