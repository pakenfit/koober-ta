# Koober TA

This **TA** intends to build an e-commerce website with different steps of features.

### Description

# Level 1

We are building an e-commerce website. Our customers can:
  - add articles to a virtual cart
  - checkout the cart contents
  - get it delivered the next day

The customer is charged the sum of the prices of each article in their cart.

Prices are expressed in cents.

# Level 2

Cost of delivery depends on how much we charged the custormer for their cart’s contents
The more the customer spends, the less they are charged for shipping.
# Level 3

Some products are discounted because of a deal we made with the supplier.

There are two kinds of discounts:
- a direct cut to the article's price, e.g. get 50€ off your 300€ caviar tin and only pay 250€
- a percentage discount, e.g. get 20% off your 5€ creme fraiche and only pay 4€

### Requirements

##### Using npm
You only need to have **NodeJS** and **npm** (or **yarn**) installed on your system.
##### Using docker
Not completed

## Features

  - Read the customer cart articles provided in **input.json** file
  - Calculate the total amount of the cart according to the number of articles inside.
  - Apply discounts for articles that have them
  - Calculate the delivery fees according to the delivery policy
  - Finish the checkout and output the total amouts in **output.json** file.
## Build and execution

### Install dependencies
Run `npm install`to install all the dependencies.
### Launch Level1
To only checkout the level1 please run : 
  - `npm run checkout:level1` 
  
this will generate `level1/output/output.json` and compare it to `expected_output.json`

### Launch Level2
To only checkout the level2 please run : 
  - `npm run checkout:level2` 
  
this will generate `level2/output/output.json` and compare it to `expected_output.json`

### Launch Level3
To only checkout the level3 please run : 
  - `npm run checkout:level3` 
  
this will generate `level3/output/output.json` and compare it to `expected_output.json`

### Launch the tests
##### Level1
- To launch unit tests : `npm run test-unit:level1`
- To launch integration test : `npm run test-integration:level1`

##### Level2
- To launch unit tests : `npm run test-unit:level2`
- To launch integration test : `npm run test-integration:level2`

##### Level3
- To launch unit tests : `npm run test-unit:level3`
- To launch integration test : `npm run test-integration:level3`
##### All the tests
Just run `npm run test:all`

## TODO

- [ ] Add more tests case
- [ ] Add more input validation
- [ ] Add docker implementation
