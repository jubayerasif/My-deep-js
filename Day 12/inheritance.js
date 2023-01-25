class Parent {
  constructor() {
    this.fatherName = "Warner Bros";
  }
}

class Child extends Parent {
  constructor(name) {
    super();
    this.name = name;
  }
  getFullName(){
    return this.name + " "+ this.fatherName;
  }
}

const baby = new Child("Tom"); 
const baby2 = new Child("Jerry");
console.log(baby.getFullName());
console.log(baby2);
