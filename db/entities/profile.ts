import { relations } from 'drizzle-orm';
import { pgTable, serial, text, date } from 'drizzle-orm/pg-core';
import { post } from './post';

export const profile = pgTable('profile', {
  id: serial('profile').primaryKey(),
  avatarUrl: text('avatar'),
  name: text('name'),
  registeredTime: date('registeredTime', { mode: 'string' }),
});

export const profileRelations = relations(profile, ({ many }) => ({
  posts: many(post),
}));
