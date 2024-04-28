"use strict";
// Q NO 1. Define a type Person that represents an object with properties name (string) and age (number).
// Create an object person1 of type Person and initialize it with a name and age.
// Write a function getBirthYear that takes a Person object and the current year as parameters and returns the birth year.
var bank_Account = {
    accountnumber: `pk5426532ue3920`,
    balance: 7000,
};
var deposit = (depositAmount) => {
    var depositAmount1 = parseInt(depositAmount);
};
var withdraw = (Withdrawamount) => bank_Account.balance - Withdrawamount;
console.log(`TotaL bank balance before depositing money is Rs.${bank_Account.balance}.\nTotal bank balance after depositing money is Rs.${deposit(prompt(`Enter amount of money to deposit amount in your bank account`))}`);
console.log(`TotaL bank balance before withdrawing money is Rs.${bank_Account.balance}.\nTotal bank balance after withdrawing money is Rs.${withdraw(prompt(`Enter amount of money to withdraw amount from your bank account`))}`);
// Q NO 8. Define an object type Student with properties name (string), age (number), and grades (NumberArray).
// Add a function type CalculateAverageGradeFn that returns the average grade.
// type student = {
//     name: string,
//     age: number,
//     grade: number[],
// }
// type studentnames = [student, student, student, student]
// var studentinformation: student = {
//     name: "sheraz",
//     age: 15,
//     grade: [90, 85, 70, 50, 35, 25,],
// }
// var studentgrades: number[] = studentinformation.grade;
// type CalculateAverageGradeFn = (total: number) => void;
// var CalculateAverageGrade: CalculateAverageGradeFn = (total) => {
//     var sum = studentgrades.reduce((sum1, sum2) => sum1 + sum2);
//     return Math.round((sum / total) * 100)
// }
// console.log(`The AverageGrade of student is${CalculateAverageGrade(500)}`);
// Q NO 9. Define a type Course with properties title (string), duration (number), and teacher (string).
// Implement a function type GetCourseInfoFn that returns a formatted string containing all properties of a Course.
// type Course = {
//     title: string,
//     duration: number,
//     teacher: string
// };
// var course: Course = {
//     title: "computer science",
//     duration: 50,
//     teacher: "Sir Shoaib"
// };
// type GetCourseInfoFn = () => string;
// var information: GetCourseInfoFn = () =>
//     `course title:${course.title} \n course duration: ${course.duration} \n course teacher:${course.teacher}`;
// console.log(information());
// Q NO 10. Create a type Product that represents an object with properties name (string) and price (number).
// Define a function type ApplyDiscountFn that takes a Product object and a discount percentage and returns a new Product object with the discounted price.
// type Product = {
//     name: string;
//     price: number;
// };
// type ApplyDiscountFn = (product: Product, discountPercentage: number) => Product;
// var applyDiscount: ApplyDiscountFn = (product, discountPercentage) => {
//     var discountedPrice = product.price * (1 - discountPercentage / 100);
//     var discountedProduct: Product = {
//         name: product.name,
//         price: discountedPrice,
//     };
//     return discountedProduct;
// };
// var originalProduct: Product = {
//     name: "Example Product",
//     price: 100,
// };
// var discountedProduct = applyDiscount(originalProduct, 20);
// console.log(discountedProduct);
// Q NO 11. Define a type Employee with properties name (string), position (string), and salary (number).
// Implement a function type GetAnnualSalaryFn that calculates the annual salary of an Employee.
// type Employee = {
//     name: string;
//     position: string;
//     salary: number;
// };
// type GetAnnualSalaryFn = (employee: Employee) => number;
// var calculateAnnualSalary: GetAnnualSalaryFn = (employee) => {
//     var annualSalary = employee.salary * 12;
//     return annualSalary;
// };
// var employee1: Employee = {
//     name: "Sheraz",
//     position: "web developer",
//     salary: 60000,
// };
// var annualSalary1 = calculateAnnualSalary(employee1);
// console.log(`${employee1.name}'s annual salary is $${annualSalary1}`);
