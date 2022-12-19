/*
Write a function to "gridTraveler(n,m)" to find out number of ways to travel a grid of size n x m.

It can be shown that:

gridTraveler(0,m) = 0;
gridTraveler(n,0) = 0;
gridTraveler(1,m) = 1;
gridTraveler(n,1) = 1;

gridTraveler(n,m) = gridTraveler(n-1,m) + gridTraveler(n,m-1);

some examples are gridTraveler(2,3) = 3, gridTraveler(3,2) = 3, gridTraveler(3,3) = 6, gridTraveler(18,18) = 2333606220

# Brute force solution

T.C: O(2^(n+m))
S.C: O(n+m)

const gridTraveler = (n,m) => {
  if(n === 0 || m === 0) return 0;
  if(n === 1 || m === 1) return 1;
  return gridTraveler(n-1,m) + gridTraveler(n,m-1);
}

*/


/*
T.C: O(n*m)
S.C: O(n+m)
*/
const gridTraveler = (n,m, memo = {}) => {
  const key1 = n + ',' + m;
  const key2 = m + ',' + n;
  if(key1 in memo || key2 in memo) return memo[key1] || memo[key2];
  if(n === 0 || m === 0) return 0;
  if(n === 1 || m === 1) return 1;
  memo[key1] = gridTraveler(n-1,m,memo) + gridTraveler(n,m-1,memo);
  memo[key2] = memo[key1];
  return memo[key1];
}

console.log(gridTraveler(2,3));
console.log(gridTraveler(3,2));
console.log(gridTraveler(3,3));
console.log(gridTraveler(18,18));