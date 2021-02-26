function maxProfit(prices: number[]): number {}

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
