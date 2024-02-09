/**
 *
 */


class Solution {
    constructor(nums) {
        // @ts-ignore
        this.map = new Map();
        for (let i = 0; i < nums.length; i++) {
            if (this.map.has(nums[i])) {
                this.map.get(nums[i]).push(i);
            } else {
                this.map.set(nums[i], [i]);
            }
        }
    }

    pick(target) {
        let indexes = this.map.get(target);
        return indexes[Math.floor(Math.random() * indexes.length)];
    }
}
