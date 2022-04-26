import { DiscountItem } from '@level3/types/discount-item.type';
import { DiscountType } from '@level3/types/discount-type.enum';

/**
 * This function takes a price and a discount and returns
 * the discounted price according to the discount type
 * @param discount
 * @param articlePrice
 * @param type
 * @returns the discounted price
 */
export const getDiscountedPrice = (
  discount: number,
  articlePrice: number,
  type: DiscountType,
): number =>
  Math.floor(
    type === DiscountType.AMOUNT
      ? articlePrice - discount
      : articlePrice - (articlePrice * discount) / 100,
  );

/**
 * This function return te discount applied to a given article
 * @param articleId
 * @param discounts
 * @returns
 */
export const getArticleDiscount = (
  articleId: number,
  discounts: DiscountItem[],
): DiscountItem | undefined =>
  discounts.find((discount: DiscountItem) => discount.article_id === articleId);
