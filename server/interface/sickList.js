const Router = require("koa-router");
const SickList = require("../model/sickList");

let router = new Router({
  prefix: "/sickList"
});

router.post("/addSickList", async ctx => {
  let { fullName, sickNo, tel } = ctx.request.body;

  const sick = await SickList.find({ sickNo });
  if (sick.length) {
    ctx.body = {
      code: -1,
      msg: "该就诊卡号已经存在！"
    };
    return;
  }

  const newSick = await SickList.create({
    fullName,
    sickNo,
    tel
  });

  if (newSick) {
    return (ctx.body = {
      ctx: 0,
      msg: "添加成功",
      sickNo: newSick.sickNo
    });
  } else {
    return (ctx.body = {
      code: -1,
      msg: "添加失败！系统繁忙"
    });
  }
});

router.get("/checkSickInfo", async ctx => {
  const { sickNo, fullName, tel } = ctx.query;
  const sick = await SickList.find({ sickNo, fullName, tel });
  if (sick.length) {
    return (ctx.body = {
      code: 0,
      sick
    });
  } else {
    return (ctx.body = {
      code: -1,
      msg: "就诊卡不存在或信息不对应"
    });
  }
});

router.get("/getPrepay", async ctx => {
  const { sickNo } = ctx.query;
  const sick = await SickList.find({ sickNo });
  if (sick.length) {
    return (ctx.body = {
      code: 0,
      prePay: sick[0].prePay
    });
  } else {
    return (ctx.body = {
      code: -1,
      msg: "就诊卡不存在或信息不对应"
    });
  }
});

module.exports = router;
