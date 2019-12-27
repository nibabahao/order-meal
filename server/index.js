const Koa = require("koa");
const path = require("path");
const koaStatic = require("koa-static");
const mongoose = require("mongoose");
const dbConfig = require("./dbs/config");
const bodyParser = require("koa-bodyparser");
const sicks = require("./interface/sickList");
const menuKind = require("./interface/menuKind");
const orderInfo = require("./interface/orderInfo");
const sysCnfig = require("./interface/time");
const historyRoute = require("./middleware/historyRoute");
const api = require("./interface/api");

const app = new Koa();
const port = 3000;

app.keys = ["orderMeal"];
app.proxy = true;

mongoose.connect(dbConfig.dbs, {
  useNewUrlParser: true
});
mongoose.set("useCreateIndex", true);

app.use(koaStatic(path.join(__dirname, "../build")));
app.use(historyRoute());

// 引入body-parser请求post接口等中间件设置
app.use(
  bodyParser({
    extendTypes: ["json", "form", "text"]
  })
);

app.use(sicks.routes()).use(sicks.allowedMethods());
app.use(sysCnfig.routes()).use(sysCnfig.allowedMethods());
app.use(menuKind.routes()).use(menuKind.allowedMethods());
app.use(orderInfo.routes()).use(orderInfo.allowedMethods());
app.use(api.routes()).use(api.allowedMethods());

app.listen(port, () => {
  console.log("port start at 3000");
});
