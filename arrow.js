function outerOne(a) {
  function innerOne(b) {
    console.log(b);
  }
  innerOne(a);
}

function outerTwo(a) {
  const innerTwo = b => console.log(b);
  innerTwo(a);
}

console.log(outerOne("hello"));
console.log(outerTwo("hello"));


// 콜백함수 내에서 익명함수를 사용시 재사용은 어떻게 해야하나
//this가 보이면 console.log 를 찍는다 했는데 디버거로 확인이 안되는지