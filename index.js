// console.error("error");
// var name;
// name = "abc";
// console.log(name);
// name = "xyz";

// const studentA = {
//   firstName: "Loc",
//   lastName: "Tuan",
// };

// console.log(studentA);
// studentA.firstName = "Minh";
// console.log(10 / 3);

// var input = prompt("Nhập: ");

// let arr01 = [1, 3, 5, 7, 8, 9, 10, 16, 18, 38];
// for (let i = 0; i < arr01.length; i++) {
//   console.log(arr01[i]);
// }
let arr = [50, -10, -20, 0, 1, 2, 6, 4, -100, 9, 6, 6, 8, 9, 9, 20];

// -----------Bài tập 5
// let max = arr[0];
// let maxSecond = arr[1];

// for (let i = 0; i < arr.length; i++) {
//   if (max < arr[i]) {
//     maxSecond = max;
//     max = arr[i];
//   } else if (maxSecond < arr[i] && arr[i] < max) {
//     maxSecond = arr[i];
//   }
// }

// console.log(maxSecond);

// --------------------Bài tập 6
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//   arr[i] % 2 === 0 && count++;
// }
// console.log("Số chẵn: ", count);
// console.log("Số lẻ: ", arr.length - count);

// ----------------------- Bài tập 7
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//   arr[i] < 0 && count++;
// }
// console.log("Số lượng phần tử âm:", count);

// --------------------- Bài tập 8
// let arr01 = [];
// for (let i = 0; i < arr.length; i++) {
//   arr01[i] = arr[i];
// }
// console.log(arr01);

// ----------------- Bài tập 9
// let x = 5;
// arr[arr.length] = x;
// console.log(arr);

// ------------------ Bài tập 10
// let arr01 = [];
// let index = 5;
// for (let i = 0; i < arr.length; i++) {
//   if (i > index) {
//     arr01[i - 1] = arr[i];
//   } else {
//     arr01[i] = arr[i];
//   }
// }
// console.log(arr01);

// ------------------- bài tập 11
// const obj = {};
// for (let i = 0; i < arr.length; i++) {
//   if (!obj[arr[i]]) {
//     obj[arr[i]] = 1;
//   } else {
//     obj[arr[i]]++;
//   }
// }
// console.log(obj);

// ------------------ Bài tập 12
// const obj = {};
// for (let i = 0; i < arr.length; i++) {
//   if (!obj[arr[i]]) {
//     console.log(arr[i]);
//     obj[arr[i]] = true;
//   }
// }

// ------------------- Bài tập 13
// let sum = 0;
// const obj = {};
// for (let i = 0; i < arr.length; i++) {
//   if (obj[arr[i]] && obj[arr[i]] === 1) {
//     sum += arr[i];
//     obj[arr[i]]++;
//   } else {
//     obj[arr[i]] = 1;
//   }
// }
// console.log(sum);

// ----------------- Bài tập 14
// const arr01 = [];
// const obj = {};
// let j = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (!obj[arr[i]]) {
//     arr01[j] = arr[i];
//     j++;
//     obj[arr[i]] = 1;
//   }
//   obj[arr[i]]++;
// }
// console.log(arr01);

// ---------------- Bài tập 15
// const arr01 = [1, 4, 7, 9];
// const arr02 = [4, 7, 9, 10, 11];
// const arr03 = [];
// for (let i = 0; i < arr01.length + arr02.length; i++) {
//   if (i < arr01.length) {
//     arr03[i] = arr01[i];
//   } else {
//     arr03[i] = arr02[i - arr01.length];
//   }
// }
// console.log(arr03);

// ------------------ Bài tập 16
