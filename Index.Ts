// Q NO 1. Define a type Person that represents an object with properties name (string) and age (number).
// Create an object person1 of type Person and initialize it with a name and age.
// Write a function getBirthYear that takes a Person object and the current year as parameters and returns the birth year.

// type person = {
//     name: string,
//     age: number;
// }

// let person1: person = {
//     name: "sheraz",
//     age: 15
// }
// var getBirthYear = (currentYear: number) => currentYear - person1.age;
// var birth = getBirthYear(2023)
// console.log(person1.name, birth, person1.age);

// Q NO 2. Define a type Rectangle that represents an object with properties width (number) and height (number).
// Add a function type CalculateAreaFn that calculates the area of the rectangle.
// Create a variable rectangle of type Rectangle and initialize it with appropriate values for width and height.


// type Rectangle = {
//     width: number;
//     height: number;
// };

// var rectangle: Rectangle = {
//     width: 250,
//     height: 300
// };

// var CalculateAreaFn = () => rectangle.width * rectangle.height;

// console.log(CalculateAreaFn());

// Q NO 3. Define a type Color that is a union of string literal types "Red", "Green", and "Blue".
// type Color = "Red" | "Green" | "Blue";

// var myColor: Color = "Red";
// console.log(myColor);

// Q NO 4. Define an object type Car with properties make (string), model (string), and year (number).
// Add a function type StartEngineFn that logs "Engine started!" when called.

// type Car = {
//     make: string;
//     model: string;
//     year: number;
// };

// type StartEngineFn = () => string;

// var myCar: Car = {
//     make: "Corolla",
//     model: "15",
//     year: 2023,
// };

// var startEngine: StartEngineFn = () => "Engine started";

// var engine = startEngine();
// console.log(engine);

// Q NO 5. Create an array of Person objects and use a loop to print their names and ages

// type Person = {
//     name: string;
//     age: number;
// }
// type a = [Person, Person, Person]
// var people: a = [
//     { name: "sheraz", age: 15 },
//     { name: "ahmad", age: 13 },
//     { name: "shoaib", age: 30 }
// ];

// for (let person = 0; person < people.length; person++) {
//     console.log(`Name: ${people[person].name}, Age: ${people[person].age}`);
// }


// Q NO 6. Define an object type Book with properties title (string), author (string), and year (number).
// Add a function type GetBookInfoFn that returns a formatted string containing all properties.
// Define the Book object type
// type Book = {
//     title: string;
//     author: string;
//     year: number;
// };

// type GetBookInfoFn = (book: Book) => string;

// var bookinfo: GetBookInfoFn = (book) => {
//     return `Title: ${book.title}\nAuthor: ${book.author}\nYear: ${book.year}`;
// };


// var myBook: Book = {
//     title: "Sample Book",
//     author: "sheraz",
//     year: 2023,
// };

// var bookInfo: string = bookinfo(myBook);
// console.log(bookInfo);


// Q NO 7. Define an object type BankAccount with properties accountNumber (string) and balance (number).
// Add function types DepositFn and WithdrawFn to modify the balance.

type BankAccount = {
    accountnumber: string;
    balance: number;
};
var bank_Account: BankAccount = {
    accountnumber: `pk5426532ue3920`,
    balance: 7000,
};
type DepositFn = (depositAmount: any) => void;
type WithdrawFn = (Withdrawamount: any) => number;
var deposit: DepositFn = (depositAmount) => {
    var depositAmount1 = parseInt(depositAmount);
};
var withdraw: WithdrawFn = (Withdrawamount) =>
    bank_Account.balance - Withdrawamount;
console.log(
    `TotaL bank balance before depositing money is Rs.${bank_Account.balance
    }.\nTotal bank balance after depositing money is Rs.${deposit(
        prompt(`Enter amount of money to deposit amount in your bank account`)
    )}`
);
console.log(
    `TotaL bank balance before withdrawing money is Rs.${bank_Account.balance
    }.\nTotal bank balance after withdrawing money is Rs.${withdraw(
        prompt(`Enter amount of money to withdraw amount from your bank account`)
    )}`
);


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
