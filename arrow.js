function outer() {
  return "hello";
}

const outerTow = function() {
  return "bye";
}

console.log(outer());
console.log(outerTwo());