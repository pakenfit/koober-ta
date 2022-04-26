import { DiscountItem } from './discount-item.type';
import { DeliveryFeesType } from './delivery-fees.type';
import { CartType } from './cart.type';
import { ArticleType } from './article.type';

/**
 * Input type, got from the json file "input.json"
 */
export type InputType = {
  articles: ArticleType[];
  carts: CartType[];
  delivery_fees: DeliveryFeesType[];
  discounts: DiscountItem[];
};
