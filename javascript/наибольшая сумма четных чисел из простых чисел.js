"use strict"

// найти наибольшую сумму четных чисел в массиве простых чисел

function fn(num) {
  let prime;

  let count = 0,
  prevCount = 0;

  let nums = new Array(num);

  for (let i = 0; i<= num; i++) {
    i%2 === 0 ? nums[i] = 0 : nums[i] = i;
  };
  nums[1] = 0;

  for (let i = 3; i < Math.sqrt(num); i++) {
    for (let j = i*i; j < num; j+=i) {
      nums[j] = 0;
    }
  };
  // console.log(nums);
  nums = nums.filter(i => i !== 0);
  console.log(nums)

  for (let i = nums.length-2; i > 0; i-=1) {
    count = 0;
    for (let z of '' + nums[i]) {
      if (z%2 === 0  && z !== 0) ++count;
    };
    if (count > prevCount) {
      prevCount = count;
      prime = nums[i];
    };
  };
  console.log(prime)
};

fn(487)