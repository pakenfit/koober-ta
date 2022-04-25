import { DeliveryFeesType } from '@level2/types/delivery-fees.type';
import { CartItem } from '@level2/types/cart.type';
import { OutputType } from '@level2/types/output.type';
import { ArticleType } from '@level2/types/article.type';
import { getJson, writeOutput } from './file.service';
import { InputType } from '@level2/types/input.type';

const getArticleById = (
  articleId: number,
  articles: ArticleType[],
): ArticleType | undefined =>
  articles.find(article => article.id === articleId);

/**
 * This function returns for a given cart total amount,
 * the delivery fees according to the delivery policy
 * @param deliveryFees
 * @param articlePrice
 * @returns the delivery fees
 */
const getDeliveryFees = (
  deliveryFees: DeliveryFeesType[],
  cartTotal: number,
): number | undefined => {
  if (cartTotal >= 2000) {
    return 0;
  }
  return deliveryFees.find(
    (fees: DeliveryFeesType) =>
      cartTotal >= fees.eligible_transaction_volume.min_price &&
      cartTotal <= fees.eligible_transaction_volume.max_price,
  )?.price;
};

export const checkout = async (): Promise<void> => {
  const input: InputType = (await getJson()) as InputType;
  let results: OutputType = { carts: [] };
  let total = 0;
  let article: ArticleType | undefined;
  for (const cart of input.carts) {
    // We sum up the prices of all items multiplied by their quantity,
    // plus the delivery fees
    total = cart.items.reduce((totals: number, item: CartItem) => {
      article = getArticleById(item.article_id, input.articles);
      return totals + item.quantity * (article?.price || 0);
    }, 0);

    results.carts.push({
      id: cart.id,
      total: total + (getDeliveryFees(input.delivery_fees, total) || 0),
    });
  }
  await writeOutput(results);
};
