'use strict'
// найти индекс отличающегося числа
function iqTest(numbers){
  let numArr = numbers.split(' ');  
  console.log(numArr);
  
  let evenNum = [],
  	  oddNum = [];
  numArr.forEach((item) => {
  	if (item%2==0) {
  		evenNum.push(item)
  	} else {
  		oddNum.push(item);
  	}
  });
  if (evenNum.length == 1) {
  	console.log( numArr.indexOf(evenNum[0]) + 1);
  } else {
  	//console.log('one el in oddNum')
  	console.log( numArr.indexOf(oddNum[0]) + 1);
  }
  //console.log(evenNum,oddNum)
};

//iqTest('2 4 6 0 7 10');

// найти индекс числа ,где сумма чисел ,слева и справа от него, равны

function findEvenIndex(arr) {
 let leftArr = [], rightArr = [];
 let i = 1;

   while (i < arr.length - 1) {

     for (let j = 0; j < i ; j++) {
        leftArr.push(arr[j]); 
        console.log(leftArr)  
     };

     for (let z = arr.length - 1 ; z > i; z--) {
        rightArr.push(arr[z]);
        //console.log(rightArr)   
     };

     leftArr = leftArr.reduce((a,b) => a + b);
      //console.log(leftArr);
     rightArr = rightArr.reduce((a,b) => a + b);

     if (leftArr === rightArr) {
        console.log(i);
        break;
     } 
     else if (i == arr.length -2 && leftArr !== rightArr) {
      return -1;
     } else {
        leftArr = [], rightArr = [];
        i++
     };
   }; 	          
};

// findEvenIndex([1,2,3,4,3,2,1]);

function findEvenIndex(arr) {
  for(var i=1; i<arr.length-1; i++) {
    if(arr.slice(0, i).reduce((a, b) =>  a+b) === arr.slice(i+1).reduce((a, b) =>  a+b)) {
      return i;
    }
  }
  return -1;
}

 

//найти слово полиндром

function findPolindrom(arr) {
  arr.forEach((str) => {
    let reversed  = '';
    for (let i = str.length - 1; i >= 0; i--) {
     reversed+=str[i];
    };

    (reversed === str) ? console.log(str) : console.log('this arr don\'t have a polyndrom');
  });
};
//findPolindrom(['asdasd','qwerewq','qwvre','asdsa']);

// нахождение фиббоначи через рекурсию

function fib(i) {
  if (i <= 2) {
    return 1;
  };
  return fib(i - 1) + fib(i - 2);
};

// сумму треугольных чисел

function sumTriangularNumbers(n) {
  let sum = 0;
  if (n < 1) {
    return 0;
  } else {
    
    for (let i = 1; i <= n; i++){
      sum += ((1 / 2) * i*(i + 1)); 
    };
    console.log(sum);
  }
};

//sumTriangularNumbers(4);


// ханойская башня
  let car1 = [300,200,100,50,40],
      plint = [],
      car2 = [];
  let blocknumber = car1.length;

  function move(count, a,b,c) {
    if (count >= 1) {
      move(count - 1, a, c, b);
      moveBlock(a,b);
      move(count - 1, c, b, a);
    }
  };

  function moveBlock(form, to) {
    to.push(form.pop());
  } 

move(blocknumber,car1,car2, plint);


// анаграмма
var isAnagram = function(test, original) {
  let countChar = 0;
  let t = test.toLowerCase(),
      o = original.toLowerCase();
  
  t = t.split('').sort().join('');
  o = o.split('').sort().join('');

  (t == o) ? true : false;

};
//isAnagram("foefet", "toffee");

// мексиканская волна из слова в массиве
function wave(word){
  if (word.length == 0) {
    return '';
  } else {
  let arr = [];
  for(let i = 0; i < word.length; i++) {
    if (word[i] === '') {
      continue;
    } else {
      arr.push(word.slice(0,i) + word.charAt(i).toUpperCase() + word.slice(i+1));
    }
  }
  return arr;
  };
};
wave('hello');

//нахождение максимального числа
function max(...args) {
  let max = args[0]
  for (let i = 0; i < args.length; i++ ) {
    if (args[i] > max) {
      max = args[i];
    };
  }
  console.log(max);
 };

 //max(1,2,3,4,5,1,0,10);


// если число промежуочное то вернть 1 иначе 0
 var gimme = function (inputArray) {
  inputArray.forEach((item,i) => {
   if (item > item[i-1] && item < item[i+1]) {
      return i;
    } else {
      return 0;
    }
  });
};
gimme([1,4,7])

function searchWord(str, searchWord) {
  let reg = new RegExp(searchWord, "i");
  console.log(str.indexOf(searchWord));
  console.log(str.includes(searchWord))
  console.log(str.search(reg));
  console.log(str.match(reg));
  console.log(reg.test(str));
  console.log(str.substring(0,6));
  console.log(str.substr(0,6));
  console.log(str.slice(0,6));
  const arr = str.trim().split(' ');
  console.log(arr);
};

searchWord(' Hello my name is Peter ', 'name');

// простая рккурсия
function writeNums(num) {
  console.log(num);
  (num > 1) ? writeNums(num-1) : console.log('stop');
};

writeNums(5);

const foo = null;
console.log(null == 0 );
let student = {
  name: 'Ivan',
  age: 32,
  course: 3,
  sex: 'male'
};

delete student.sex;
console.log(student);
 const obj2 = new Object();

console.log([] == [])

const student2 = Object.create(student);
student2.age = 33;
console.log(student,student2);


