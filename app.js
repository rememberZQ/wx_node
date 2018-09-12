const koa = require('koa');
const path = require('path');
const logUtil = require('./src/util/log4j_util.js');
const xtpl = require('koa-xtpl');
const bodyparser = require('koa-bodyparser');
const login = require('./src/routes/login');
const app = new koa();

/**
 * xtpl模板
 */
app.use(xtpl({
  root: path.join(__dirname, 'src/views'),
  extname: 'html',
  commands: {}
}))

/**
 * body解析
 */
app.use(bodyparser());
app.use(async ctx => {
  ctx.body = ctx.request.body;
})
// logger
app.use(async (ctx, next) => {
  //响应开始时间
  const start = new Date();
  //响应间隔时间
  var ms;
  try {
    //开始进入到下一个中间件
    await next();
    ms = new Date() - start;
    //记录响应日志
    logUtil.logResponse(ctx, ms);
  } catch (error) {
    ms = new Date() - start;
    //记录异常日志
    logUtil.logError(ctx, error, ms);
  }
});


app.use(login.routes(), login.allowedMethods());

app.on('error', err => {
  console.log('server error', err);
});

app.listen(3000);
console.log('service run start port 3000');