import { currentUser } from '@clerk/nextjs/server';
import db from '@/db/drizzle';
import { post } from '@/db/schema';

export async function createArticle(text: string) {
  const user = await currentUser();
  try {
    await db.insert(post).values({ content: text, authorId: Number(user?.id) });
  } catch (err) {
    console.log(err);
  }
}
