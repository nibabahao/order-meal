const apiConfig = require("../dbs/api");
const path = require("path");
const fs = require("fs");

const histroyRoute = async function(ctx, next) {
  let url = ctx.request.url;
  const isApi = apiConfig.some(e => url.includes(e));
  if (isApi) {
    await next();
  } else {
    const html = await render("/index.html");
    ctx.body = html;
  }
};

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

module.exports = () => histroyRoute;
