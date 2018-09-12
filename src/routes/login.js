const Router = require('koa-router');
const user = require('../modules/userModel.js')
const router = new Router();
router.get('/', async (cxt, next) => {
  await cxt.render('login/login', {
    title: '登录'
  });
})
router.post('/', async (cxt, next) => {
  await user.create(ctx.request.body);
});

module.exports = router;