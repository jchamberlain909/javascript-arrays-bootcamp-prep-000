function addElementToBeginningOfArray (arr, e) {
  return [e, ...arr];
}

function destructivelyAddElementToBeginningOfArray (arr, e) {
  arr.unshift(e);
  return arr;
}