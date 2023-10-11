function Student(name, number) {
  this.name = name;
  this.number = number;
}

let list = [
  "이민구",
  "윤준현"
];
let studentArr = [];
for (let i = 0; i < list.length; i++) {
  studentArr[i] = new Student(list[i], i + 1);
}
console.log(studentArr);