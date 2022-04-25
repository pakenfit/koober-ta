import { CartItem } from '@level1/types/cart.type';
import { OutputType } from '@level1/types/output.type';
import { ArticleType } from '@level1/types/article.type';
import { getJson, writeOutput } from './file.service';
import { InputType } from '@level1/types/input.type';

const getArticleById = (
  articleId: number,
  articles: ArticleType[],
): ArticleType | undefined =>
  articles.find(article => article.id === articleId);

export const checkout = async (): Promise<void> => {
  const input: InputType = (await getJson()) as InputType;
  let results: OutputType = { carts: [] };
  let total = 0;
  let article: ArticleType | undefined;
  for (const cart of input.carts) {
    // We sum up the prices of all items multiplied by their quantity
    total = cart.items.reduce((totals: number, item: CartItem) => {
      article = getArticleById(item.article_id, input.articles);
      return totals + item.quantity * (article?.price || 0);
    }, 0);
    results.carts.push({ id: cart.id, total });
  }
  await writeOutput(results);
};
