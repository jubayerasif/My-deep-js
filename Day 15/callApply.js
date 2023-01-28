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




normalPerson
