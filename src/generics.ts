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