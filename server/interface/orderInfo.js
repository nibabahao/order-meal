const Router = require("koa-router");
const OrderInfo = require("../model/orderInfo");

let router = new Router({
  prefix: "/orderInfo"
});

router.post("/addOrder", async ctx => {
  let { order } = ctx.request.body;
  let orderNo = ""; //订单号
  for (
    let i = 0;
    i < 6;
    i++ //6位随机数，用以加在时间戳后面。
  ) {
    orderNo += Math.floor(Math.random() * 10);
  }
  orderNo = new Date().getTime() + orderNo; //时间戳，用来生成订单号。
  order.status = "0";
  order.orderTime = new Date().getTime();
  order.orderNo = orderNo;
  const res = await OrderInfo.create(order);

  if (res) {
    return (ctx.body = {
      ctx: 0,
      msg: "订单创建成功",
      orderNo
    });
  } else {
    return (ctx.body = {
      code: -1,
      msg: "订单创建失败！系统繁忙"
    });
  }
});

router.get("/getOrder", async ctx => {
  const { orderNo } = ctx.query;
  const res = await OrderInfo.findOne({ orderNo });
  if (res) {
    return (ctx.body = {
      ctx: 0,
      data: res
    });
  } else {
    return (ctx.body = {
      code: -1,
      msg: "订单查询失败！"
    });
  }
});

router.get("/getOrderList", async ctx => {
  const { sickNo } = ctx.query;
  const res = await OrderInfo.find({ sickNo });
  if (res) {
    res.forEach(e => {
      const time = new Date().getTime();
      const mealTime = new Date(e.day).getTime();
      if (time - mealTime >= 24 * 60 * 60 * 1000) {
        e.status = "1";
      }
    });
    return (ctx.body = {
      ctx: 0,
      data: res
    });
  } else {
    return (ctx.body = {
      code: -1,
      msg: "订单列表查询失败！"
    });
  }
});

module.exports = router;
