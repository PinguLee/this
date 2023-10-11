function outer() {
  return "hello";
}

const outerTow = function() {
  return "bye";
}

const outerThree = () => "wow";

console.log(outer());
console.log(outerTwo());