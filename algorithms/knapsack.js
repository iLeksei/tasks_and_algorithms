
// there is an example how we can manage task with knapsack-problem
//  									weight
//	by price 		  	1      2     3   	4
//	guitar			|  1.5 | 1.5  | 1.5  | 1.5  |
//  laptop    	    |  1.5 | 1.5  | 2.0  | 3.5  |
//	stereo			|  1.5 | 1.5  | 2.0  | 3.5  |
const goods = [
    { name: "guitar", price: 1500, weight: 1 },
    { name: "lego", price: 500, weight: 1 },
    { name: "toy", price: 500, weight: 1 },
    //{ name: "iphone", price: 2000, weight: 1 },
    { name: "laptop", price: 2000, weight: 3 },
    { name: "stereo", price: 3000, weight: 4 },
];

//todo it does not work
const stealProfitableGoods = (goods = [], knapsackVolume = 5) => {
    let result_grid = [];
    let result_set = ""
    let max_profit = 0;

    for (let i = 0; i < goods.length; i++) {
        let currentGood = goods[i];
        result_grid.push([]);
        for ( let j = 0; j < knapsackVolume; j++ ) {
            let prevGood = goods[i - 1];
            let currentProfit = currentGood["price"];
            if (prevGood) {
                currentProfit = prevGood["weight"] + currentGood["weight"] <= knapsackVolume ?
                    prevGood["price"] + currentGood["price"] : currentGood["price"];
            }

            result_grid[i][j] = currentProfit;
            if (currentProfit > max_profit) {
                result_set = currentGood["name"] + ", " + (prevGood ? prevGood["name"] : "");
                max_profit = currentProfit;
            }
        }
    }
    console.table(result_grid)

    return result_set;
}

let result = stealProfitableGoods(goods, 5);
console.log(result);
