// Node.js adapter for the TanStack Start Cloudflare Worker build.
// Serves static client assets from dist/client and forwards everything else
// to the Worker's fetch() handler via @hono/node-server.
import { serve } from "@hono/node-server";
import { serveStatic } from "@hono/node-server/serve-static";
import { Hono } from "hono";
import worker from "./dist/server/index.js";

const port = Number(process.env.PORT) || 3000;
const host = process.env.HOST || "0.0.0.0";

const app = new Hono();

// Serve hashed assets and any other files placed in dist/client/.
app.use(
  "/*",
  serveStatic({
    root: "./dist/client",
  }),
);

// Anything not matched by a static file falls through to the Worker.
app.all("*", async (c) => {
  return await worker.fetch(c.req.raw, process.env, {
    waitUntil() {},
    passThroughOnException() {},
  });
});

serve({ fetch: app.fetch, port, hostname: host }, (info) => {
  console.log(`Server listening on http://${info.address}:${info.port}`);
});
