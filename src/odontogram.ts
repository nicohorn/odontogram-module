import { Hono } from "hono";

export const odontogramApi = new Hono().get("/", async (c) => {
  return c.json({ hi: "hello" }, 200);
});
