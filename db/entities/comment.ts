/* eslint-disable import/no-cycle */
import { relations } from 'drizzle-orm';
import { integer, pgTable, serial, text } from 'drizzle-orm/pg-core';
import { post } from './post';

export const comments = pgTable('comments', {
  id: serial('id').primaryKey(),
  text: text('text'),
  postId: integer('post_id'),
});

export const commentsRelations = relations(comments, ({ one }) => ({
  post: one(post, {
    fields: [comments.postId],
    references: [post.id],
  }),
}));
