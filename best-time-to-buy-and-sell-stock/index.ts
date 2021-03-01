function maxProfit(prices: number[]): number {
  let maxProfit = 0;
  let minPrice = prices[0];
  for (let i = 1; i < prices.length; i++) {
    // 第 i 天卖出获得的最大利润 = price[i] - min(price[0] ~ price[i-1])
    maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    minPrice = Math.min(minPrice, prices[i]);
  }
  return maxProfit;
}

// 暴力解法
// function maxProfit(prices: number[]): number {
//   let maxProfit = 0;

//   for (let i = 0; i < prices.length; i++) {
//     let maxProfitForCurrentPrice = 0;
//     for (let j = i; j < prices.length; j++) {
//       const profit = prices[j] - prices[i];
//       if (profit > maxProfitForCurrentPrice) {
//         maxProfitForCurrentPrice = profit;
//       }
//     }
//     if (maxProfitForCurrentPrice > maxProfit) {
//       maxProfit = maxProfitForCurrentPrice;
//     }
//   }

//   return maxProfit;
// }

export { maxProfit };
