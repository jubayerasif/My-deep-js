const normalPerson = {
    firstName: "Tom",
    lastName: "Smith",
    salary: 25000,
    getFullName: function () {
      console.log(this.first, this.lastName);
    },
    chargeBill: function (amount, tax, tips) {
      console.log(this);
      this.salary = this.salary - amount - tax - tips ;
      return this.salary;
    }
  };

const heroPerson = {
  firstName: "Hero",
  lastName: "Jerry",
  salary: 41000,
};
// normalPerson.chargeBill();

// normalPerson.chargeBill.call(heroPerson, 900, 100, 10);
// normalPerson.chargeBill.call(heroPerson, 100, 300, 30);
// console.log(heroPerson.salary);

// normalPerson.chargeBill.call(friendlyPerson, 900, 100, 10);
// console.log(friendlyPerson.salary);

normalPerson.chargeBill.apply(heroPerson, [500, 100, 10]);
console.log(heroPerson.salary);

