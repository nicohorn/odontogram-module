import { Hono } from "hono";
import { odontogramApi } from "./odontogram";

const app = new Hono();

app.route("/", odontogramApi);

export default app;
