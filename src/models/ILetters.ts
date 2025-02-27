import { mysqlTable, int, varchar, timestamp } from "drizzle-orm/mysql-core";
import IUserReaders from "./IUserReaders";

const utmTracking = mysqlTable("utm_tracking", {
   id: int("id").primaryKey().autoincrement(),

   user_id: int("user_id")
      .notNull()
      .references(() => IUserReaders.id, { onDelete: "cascade" }),

   newsletter_id: int("newsletter_id")
      .notNull()
      .references(() => IUserReaders.id, { onDelete: "cascade" }),

   utm_source: varchar("utm_source", { length: 255 }).notNull(),
   utm_medium: varchar("utm_medium", { length: 255 }).notNull(),
   utm_campaign: varchar("utm_campaign", { length: 255 }).notNull(),
   utm_channel: varchar("utm_channel", { length: 255 }),

   created_at: timestamp("created_at").defaultNow(),
});

export default utmTracking;