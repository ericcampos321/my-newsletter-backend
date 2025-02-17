import { mysqlTable, int, varchar, primaryKey } from "drizzle-orm/mysql-core";

const IUsersReaders = mysqlTable("users_readers", {
  id: int("id").primaryKey().autoincrement(),
  email: varchar("email", { length: 255 }).notNull(),
  name: varchar("name", { length: 255 }).notNull(),
});

export default IUsersReaders;