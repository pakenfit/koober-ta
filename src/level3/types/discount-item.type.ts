import { DiscountType } from './discount-type.enum';

export type DiscountItem = {
  article_id: number;
  type: DiscountType;
  value: number;
};
