const productsList = {
  Milk: 1.07,
  Rice: 1.59,
  Eggs: 3.14,
  Cheese: 12.60,
  'Chicken Breasts': 9.40,
  Apples: 2.31,
  Tomato: 2.58,
  Potato: 1.75,
  Onion: 1.10,
};
const BobList = {
  Milk: 3,
  Rice: 2,
  Eggs: 2,
  Cheese: 1,
  'Chicken Breasts': 4,
  Apples: 1,
  Tomato: 2,
  Potato: 1,
};
const AliceList = {
  Rice: 1,
  Eggs: 5,
  'Chicken Breasts': 2,
  Apples: 1,
  Tomato: 10,
};
function BobTotal() {
  let sum = 0;
  const BobValues = Object.values(BobList);
  const ProductsValues = Object.values(productsList);
  for (let i = 0; i < Object.keys(BobList).length; i += 1) {
    sum += BobValues[i] * ProductsValues[i];
  }
  return sum;
}
function AliceTotal() {
  let sum = 0;
  const AliceValues = Object.values(AliceList);
  const ProductsValues = [productsList.Rice, productsList.Eggs, productsList['Chicken Breasts'], productsList.Apples, productsList.Tomato];
  for (let i = 0; i < Object.keys(AliceList).length; i += 1) {
    sum += AliceValues[i] * ProductsValues[i];
  }
  return sum;
}
console.log(BobTotal());
console.log(AliceTotal());
function WhoBuysMoreRice() {
  if (AliceList.Rice > BobList.Rice) {
    return 'Alice buys more rice';
  }
  return 'Bob buys more rice';
}
console.log(WhoBuysMoreRice());
function WhoBuysMorePotato() {
  return 'Bob buys more potatoes';
}
console.log(WhoBuysMorePotato());
function WhoBuysMoreDiff() {
  if (Object.keys(AliceList).length > Object.keys(BobList).length) {
    return 'Alice buys more different products';
  }
  return 'Bob buys more different products';
}
console.log(WhoBuysMoreDiff());
function WhoBuysMore() {
  const AliceProducts = Object.values(AliceList).reduce((a, b) => a + b);
  const BobProducts = Object.values(BobList).reduce((a, b) => a + b);
  if (AliceProducts > BobProducts) {
    return 'Alice buys more products';
  }
  return 'Bob buys more products';
}
console.log(WhoBuysMore());
