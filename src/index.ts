import { serve } from "@hono/node-server";
import { Hono } from "hono";

const allRoutes = new Hono();

allRoutes.get("/", (c) => {
  return c.json({ message: "Hello, World!" });
});

serve(allRoutes, ({ port }) => {
  console.log(`Server is running on port ${port}`);
});
