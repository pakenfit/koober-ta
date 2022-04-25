export type CartItem = {
  article_id: number;
  quantity: number;
};

export type CartType = {
  id: number;
  items: CartItem[];
};
