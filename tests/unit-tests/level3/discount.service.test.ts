import {
  getArticleDiscount,
  getDiscountedPrice,
} from '@level3/services/discount.service';
import { DiscountItem } from '@level3/types/discount-item.type';
import { DiscountType } from '@level3/types/discount-type.enum';

describe('test getDiscountedPrice function', () => {
  it('Should return the discounted price 90€ for price 100€ with 10% discount', async () => {
    const price: number = 100;
    const discount: number = 10;
    const type: DiscountType = DiscountType.PERCENTAGE;
    const discountedPrice: number = getDiscountedPrice(discount, price, type);
    expect(discountedPrice).toEqual(90);
  });

  it('Should return the discounted price 85€ for price 100€ with 15€ discount', async () => {
    const price: number = 100;
    const discount: number = 15;
    const type: DiscountType = DiscountType.AMOUNT;
    const discountedPrice: number = getDiscountedPrice(discount, price, type);
    expect(discountedPrice).toEqual(85);
  });
});

describe('test getArticleDiscount function', () => {
  it('Should return the discount for article id = 1', async () => {
    const discounts: DiscountItem[] = [
      { article_id: 1, type: DiscountType.AMOUNT, value: 10 },
      { article_id: 2, type: DiscountType.PERCENTAGE, value: 12 },
    ];
    const discount: DiscountItem = getArticleDiscount(
      1,
      discounts,
    ) as DiscountItem;
    expect(discount.article_id).toEqual(1);
    expect(discount.type).toEqual(DiscountType.AMOUNT);
    expect(discount.value).toEqual(10);
  });

  it('Should return undefined since the article has no discount', async () => {
    const discounts: DiscountItem[] = [
      { article_id: 1, type: DiscountType.AMOUNT, value: 10 },
      { article_id: 2, type: DiscountType.PERCENTAGE, value: 12 },
    ];
    const discount: DiscountItem = getArticleDiscount(
      3,
      discounts,
    ) as DiscountItem;
    expect(discount).toBeUndefined();
  });
});
