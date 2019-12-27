const Router = require("koa-router");
const MenuKind = require("../model/menuKind");
const MenuItem = require("../model/menuItem");
const dbConfig = require("../dbs/config");

let router = new Router({
  prefix: "/menuKind"
});

router.post("/addMenuKind", async ctx => {
  let { list } = ctx.request.body;
  list.forEach(async e => {
    const { name, tid } = e;
    const menu = await MenuKind.find({ tid });
    if (menu.length) {
      ctx.body = {
        code: -1,
        msg: "该菜单种类已经存在！"
      };
      return;
    }

    const newMenu = await MenuKind.create({
      name,
      tid
    });

    if (newMenu) {
      return (ctx.body = {
        ctx: 0,
        msg: "添加成功",
        sickNo: newMenu.sickNo
      });
    } else {
      return (ctx.body = {
        code: -1,
        msg: "添加失败！系统繁忙"
      });
    }
  });
});

router.get("/getMenuKind", async ctx => {
  let menuKind = await MenuKind.find();
  menuKind = menuKind.sort((a, b) => +a.tid - +b.tid);
  if (menuKind.length) {
    ctx.body = {
      code: 0,
      menuKind
    };
    return;
  } else {
    return (ctx.body = {
      code: -1,
      msg: "系统错误"
    });
  }
});

router.post("/addMenuItem", async ctx => {
  let { list } = ctx.request.body;
  list.forEach(async e => {
    const { name, tid, fid, img, price } = e;
    const menu = await MenuItem.find({ fid });
    if (menu.length) {
      ctx.body = {
        code: -1,
        msg: "该菜单种类已经存在！"
      };
      return;
    }
    const newMenu = await MenuItem.create({
      name,
      tid,
      fid,
      img,
      price
    });

    if (newMenu) {
      return (ctx.body = {
        ctx: 0,
        msg: "添加成功",
        sickNo: newMenu.sickNo
      });
    } else {
      return (ctx.body = {
        code: -1,
        msg: "添加失败！系统繁忙"
      });
    }
  });
});

router.get("/getMenuItem", async ctx => {
  let menuItem = await MenuItem.find();
  menuItem.forEach(e => {
    e.img = dbConfig.hostName + e.img;
  });
  menuItem = menuItem.sort((a, b) => +a.tid - +b.tid);
  if (menuItem.length) {
    ctx.body = {
      code: 0,
      menuItem
    };
    return;
  } else {
    return (ctx.body = {
      code: -1,
      msg: "系统错误"
    });
  }
});

module.exports = router;
