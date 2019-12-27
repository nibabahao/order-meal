const path = require("path");
const fs = require("fs");
const Router = require("koa-router");
const send = require("koa-send");
const urllib = require("urllib");

let router = new Router({
  prefix: "/api"
});

router.get("/downPdf", async ctx => {
  // ctx.set('Content-type: application/pdf')
  // ctx.set('Content-Disposition: attachment; filename="downloaded.pdf"')
  // const file = await render('/00040002_af0cb22d-67da-4cbb-a2ac-1e2ca82c0a50.pdf');
  // ctx.body = file;
  let file = await urllib.request(
    "https://nboptest.gf.com.cn/api/nbop/arch/1.0.0/arch/archFile/20191219/1203/120322008328/00040002_af0cb22d-67da-4cbb-a2ac-1e2ca82c0a50.pdf"
  );
  ctx.set("Content-disposition", "attachment;filename=" + "name.pdf");
  ctx.body = file.data;
});

function render(page) {
  return new Promise((resolve, reject) => {
    let viewUrl = path.join(__dirname, `../../build${page}`);
    fs.readFile(viewUrl, "binary", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

module.exports = router;
