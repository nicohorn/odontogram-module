// Define database tables here!

import { integer, sqliteTable } from "drizzle-orm/sqlite-core";

export const odontograms = sqliteTable("odontograms", {
  id: integer("id").primaryKey(),
});
