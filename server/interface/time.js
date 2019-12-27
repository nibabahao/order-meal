const Router = require("koa-router");

let router = new Router({
  prefix: "/sysConfig"
});

router.get("/sysDate", async ctx => {
  ctx.body = {
    code: 0,
    date: new Date()
  };
});

module.exports = router;
