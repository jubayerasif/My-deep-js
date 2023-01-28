const normalPerson = {
  firstName: "Tom",
  lastName: "Smith",
  salary: 25000,
  getFullName: function () {
    console.log(this.first, this.lastName);
  },
  chargeBill: function (amount) {
    console.log(this);
    this.salary = this.salary - amount;
    return this.salary;
  }
};
// normalPerson.chargeBill(1500);
// normalPerson.chargeBill(3500);
// console.log(normalPerson.salary);

// const heroPerson = {
//   firstName: "Hero",
//   lastName: "Jerry",
//   salary: 45000,
// };
// normalPerson.chargeBill();

// const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
// heroChargeBill(3000);
// heroChargeBill(7000);
// console.log(heroPerson.salary);

// const friendlyChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
// friendlyChargeBill(5000);

