function recoverOrder(order, friends) {
  let finishingOrder = order.filter(common => friends.includes(common))
  return finishingOrder;
}
console.log(recoverOrder([3,1,2,5,4],[1,3,4]));