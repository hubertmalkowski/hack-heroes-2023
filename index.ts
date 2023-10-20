import { logger } from "@bogeychan/elysia-logger";
import { html } from "@elysiajs/html";
import Elysia from "elysia";
import { autoroutes } from "elysia-autoroutes";
import pretty from "pino-pretty";

const stream = pretty({
  colorize: true,
});

const el = new Elysia()
  .use(
    logger({
      autoLogging: true,
      stream,
    })
  )
  .use(html())
  .use(
    autoroutes({
      routesDir: "./routes",
    })
  )
  .listen(3000);

export type App = typeof el;
