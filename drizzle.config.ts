import { defineConfig } from "drizzle-kit";

if (!process.env.DATABASE_URL) throw Error("No DATABASE_URL found");

export default defineConfig({
  dialect: "sqlite",
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
});
