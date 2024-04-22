import { pgTable, serial, text } from 'drizzle-orm/pg-core';

export const user = pgTable('user', {
  id: serial('user').primaryKey(),
  password: text('password'),
  email: text('email'),
});
