class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "High School"
    }
}
const student1 = new Student(12, "Jubayer");
const student2 = new Student(10, "Asif");
const student3 = new Student(11, "Hasan")
console.log(student1, student2, student3);

console.log(student1.name, student2.name);






