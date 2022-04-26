# Level 1

We are building an e-commerce website. Our customers can:
  - add articles to a virtual cart
  - checkout the cart contents
  - get it delivered the next day

The customer is charged the sum of the prices of each article in their cart.

Prices are expressed in cents.

INSTRUCTIONS :
*  Setup typescript project
*  `node index.js` should generate a new file `output.json`
*  `output.json` must be equal to `expected_output.json`

# Level 2

Cost of delivery depends on how much we charged the custormer for their cart’s contents
The more the customer spends, the less they are charged for shipping.

INSTRUCTIONS :
*  Copy your code from level1 into level2
*  `node index.js` should generate a new file `output.json`
*  `output.json` must be equal to `expected_output.json`

# Level 3

Some products are discounted because of a deal we made with the supplier.

There are two kinds of discounts:
- a direct cut to the article's price, e.g. get 50€ off your 300€ caviar tin and only pay 250€
- a percentage discount, e.g. get 20% off your 5€ creme fraiche and only pay 4€

INSTRUCTIONS :
*  Copy your code from level2 into level3
*  `node index.js` should generate a new file `output.json`
*  `output.json` must be equal to `expected_output.json`

