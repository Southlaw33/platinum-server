import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { authenticationsRoute } from "./routes/authentications";
import { cors } from "hono/cors";
import { webClientUrl } from "./utils/environment";

const allRoutes = new Hono();
allRoutes.use(
  cors({
    origin: webClientUrl,
    allowMethods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS", "PUT"],
    allowHeaders: ["Content-Type", "Authorization"],
    exposeHeaders: ["Context-Length"],
    maxAge: 600,
  })
);

allRoutes.route("/authentications", authenticationsRoute);

serve(allRoutes, ({ port }) => {
  console.log(`Server is running on port ${port}`);
});
