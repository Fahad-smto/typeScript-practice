// একটি Generic ফাংশন যা যে কোনো টাইপের ডেটা নিবে এবং সেটাই রিটার্ন করবে
function identity<T>(value: T): T {
    return value;
}

// ব্যবহার:
let num = identity<number>(100);   // টাইপ number
let str = identity<string>("Hello"); // টাইপ string
let bool = identity<boolean>(true);  // টাইপ boolean

console.log(num); // 100
console.log(str); // Hello
console.log(bool); // true

// 2


// একটি Generic ফাংশন যা array-এর প্রথম উপাদান রিটার্ন করে
function getFirstElement<T>(arr: T[]): T | undefined {
    return arr[0];
}

const numbers = [10, 20, 30];
const firstNumber = getFirstElement(numbers); // টাইপ: number
console.log(firstNumber); // 10

const names = ["Rahim", "Karim", "Fatema"];
const firstName = getFirstElement(names); // টাইপ: string
console.log(firstName); // Rahim