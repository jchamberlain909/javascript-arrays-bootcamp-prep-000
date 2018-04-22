function addElementToBeginningOfArray (arr, e) {
  return [e, ...arr];
}

function destructivelyAddElementToBeginningOfArray (arr, e) {
  arr.unshift(e);
  return arr;
}

function addElementToEndOfArray (arr, e) {
  return [ ...arr, e];
}

function destructivelyAddElementToEndOfArray (arr, e) {
  arr.push(e);
  return arr;
}

function accessElementInArray (arr, i) {
  return arr[i];
}