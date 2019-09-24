countTriples([1, 2, 3, 4], 7);

// can we make it faster than a cube?
// array of objects, a criteria => it cannot be faster than cube

// complexity O(n) O(n^2) O(n*logn) O(n^3)
function countTriples(numbers, threshold) {
  // return number of sets which sum <= threshold
  let sums = 0;
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      for (let h = j + 1; h < numbers.length; h++) {
        if (numbers[i] + numbers[j] + numbers[h] <= threshold) sums++;
      }
    }
  }

  return sums;

  // const triples = numbers.map((number, index, collection) => [
  //   number,
  //   collection[index + 1],
  //   collection[index + 2]
  // ]);

  // .reduce((sum, triple) => sum + triple, 0);
}

/**
 *
 * 1 2 3 4
 * 2 3 4 1
 * 3 4 1 2
 * 4 1 2 3
 */

/*
countTriples([1,2,3,4], 7) returns 2
1 2 3   6 YES
1 2 4   7 YES
1 3 4   8 NO
2 3 4   9 NO

countTriples([4,1,3,2], 7) returns 2


countTriples([2,2,2,2], 7) returns 4
2 2 2   6 YES
2 2 2   6 YES
2 2 2   6 YES
2 2 2   6 YES

C(4,100)

countTriples([3,3,3,3], 7) returns 0
3 3 3   9 NO
3 3 3   9 NO
3 3 3   9 NO
3 3 3   9 NO
*/
