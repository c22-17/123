
function modifyArray(arr) {
    arr.push("start");
    arr.pop();
    if (arr.length >= 2) {
        arr[1] = "modified";
    }
    return arr; }

function arrayOperations(arr) {
    arr.push("end");
    arr.shift();

    if (arr.length >= 3) {
        arr.splice(3, 0, "middle");
    }

    return arr;
}

function checkInteger(number) {
    return Number.isInteger(number) ? "Число ціле" : "Число не ціле";
}

// Приклад використання функцій:
const originalArray = [1, 2, 3, 4, 5];
const modifiedArray = modifyArray(originalArray);
const anotherArray = [10, 20, 30, 40, 50];
const newArray = arrayOperations(anotherArray);
const integerNumber = 42;
const floatNumber = 3.14;

console.log("Modified Array:", modifiedArray);
console.log("New Array:", newArray);
console.log(checkInteger(integerNumber)); // Виведе "Число ціле"
console.log(checkInteger(floatNumber));   // Виведе "Число не ціле"

