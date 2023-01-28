class Person {
  constructor(firstName, lastName, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
  }
}
const heroPerson = new Person('Bruce', 'Wayne', 10000);
console.log(heroPerson);

const friendlyPerson = new Person('Robert', 'Wayne', 5000);
console.log(friendlyPerson);