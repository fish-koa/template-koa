import Koa from "koa";

import rootRouter from "./routers/rootRouter";

const app = new Koa();

app.use(rootRouter.routes());

export default app;
