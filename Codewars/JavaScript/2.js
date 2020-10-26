var moveZeros = function (arr) {
  let zeroCount = 0;
  const result = [];

  arr.forEach((item) => {
    if (item === 0) {
      zeroCount += 1;
    } else {
      result.push(item);
    }
  });

  for (let i = 1; i <= zeroCount; i++) {
    result.push(0);
  }

  console.table(result);
  return result;
};

moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]); // returns[false,1,1,2,1,3,"a",0,0]
