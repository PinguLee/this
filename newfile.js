function student(name, number) {
  this.name = name;
  this.number = number;
}

let test = new student("이민구", "0");
console.log(test);

let studentList = {
  name: 'hello',
  number: 1
};