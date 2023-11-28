// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import {
  index,
  sqliteTable,
  text,
  integer,
  sqliteTableCreator,
} from "drizzle-orm/sqlite-core";
import { nanoid } from "nanoid";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const table = sqliteTableCreator((name) => `matan.dev_${name}`);

export const slug = table(
  "slug",
  {
    url: text("url", { length: 256 }).notNull(),
    slug: text("slug", { length: 256 })
      .unique()
      .notNull()
      .$defaultFn(() => nanoid(6))
      .primaryKey(),
    createdAt: integer("created_at", { mode: "timestamp_ms" }).notNull(),
  },
  (example) => ({
    urlIndex: index("url_idx").on(example.url),
  }),
);
