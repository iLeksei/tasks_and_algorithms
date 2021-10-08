
// there is an example how we can manage task with knapsack-problem
//  									weight
//	by price 		  	1      2     3   	4
//	guitar			|  1.5 | 1.5  | 1.5  | 1.5  |
//  laptop    	    |  1.5 | 1.5  | 2.0  | 3.5  |
//	stereo			|  1.5 | 1.5  | 2.0  | 3.5  |
const goods = [
    { name: "guitar", price: 10, weight: 1 },
    { name: "lego", price: 10, weight: 1 },
    { name: "toy", price: 10, weight: 1 },
    { name: "iphone", price: 20, weight: 1 },
    { name: "laptop", price: 20, weight: 3 },
    { name: "stereo", price: 30, weight: 4 },
];

// i = row_num
// w = col_num
// V[i,w] = max(V[i - 1, w], V[i - 1, w - weight[i]] + profit[i])

const useKnapsack = (goods = [], knapsackVolume = 5) => {
    let grid = new Array(goods.length + 1)
        .fill()
        .map((i) => new Array(knapsackVolume + 1));

    grid[0].fill(0);
    grid.map( (i, idx) => {grid[idx][0] = 0});

    for (let row_num = 1; row_num <= goods.length; row_num++) {
        for (let col_num = 1; col_num <= knapsackVolume ; col_num++) {
            let currItem = goods[row_num - 1];
            let prevItemProfit = grid[row_num - 1][col_num];
            if (currItem.weight <= col_num) {
                grid[row_num][col_num] = Math.max(prevItemProfit, grid[row_num - 1][col_num - currItem.weight] + currItem.price);
            } else {
                grid[row_num][col_num] = prevItemProfit
            }
        }
    }

    console.table(grid)
    console.log("profit: " + grid[goods.length][knapsackVolume])

    let items = getItems(grid, goods, knapsackVolume);
    console.log("items: " + items);

}

const getItems = (grid, goods, cursor) => {
    let result = "";
    let currRow = goods.length;
    let prevRow = goods.length - 1

    while (currRow !== 0) {
        let currentCost = grid[currRow][cursor];
        let prevCost = grid[prevRow][cursor];
        if (currentCost !== prevCost) {
            let pickedItem = goods[currRow - 1];
            result += pickedItem.name + "(" + pickedItem.price + "), "
            cursor -= pickedItem.weight;
        } else {

        }
        currRow = prevRow;
        prevRow -= 1;
    }
    return result;
}

useKnapsack(goods, 5); // iphone(20), toy(10), lego(10), guitar(10),

