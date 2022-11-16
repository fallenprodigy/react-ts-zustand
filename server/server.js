const Koa = require("koa");
const { koaBody } = require("koa-body");
const cors = require("koa-cors");

const app = new Koa();

// middleware
app.use(koaBody());

// Require the routers
let data = require("./data.js");

// use the routes
app.use(data.routes());
app.use(cors());

app.listen(4000);
