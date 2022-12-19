/*
Write a function "fib(n)" that takes in an integer as an argument.
The function should return nth number of fibonacci series.

The first and second number of the sequence is 1.
To generate the a number we sum the previous two number

n:      1 2 3 4 5 6 7  8
fib(n): 1 1 2 3 5 8 13 21...

T.C: O(2^n)
S.C: O(n)

const fib = (n) => {
  if(n <= 2) return 1;
  return fib(n-1) + fib(n-2);
}

*/ 

// T.C: O(2*n) == O(n)
// Stack S.C: O(n)
// S.C: O(n)

/*
1. Concept learned look for overlapping sub problems
2. Space complexity in recursion is height of recursion tree.
*/

const fib = (n, memo={}) => {
  if(n in memo) return memo[n];
  if(n <=2) return 1;
  memo[n] = fib(n-1,memo) + fib(n-2,memo);
  return memo[n];
}

console.log(fib(3))
console.log(fib(4))
console.log(fib(51));
console.log(fib(8));
console.log(fib(9));