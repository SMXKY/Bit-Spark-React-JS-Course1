const intern = {
  firstName: "John",
  secondName: "Minang",
  getFullName: function () {
    return this.firstName + " " + this.secondName;
  },
};

console.log(intern.firstName);
console.log(intern.secondName);
console.log(intern.getFullName());
