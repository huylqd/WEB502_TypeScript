/*
{
  let user;
  user = "Phuong dep trai vl";
  console.log(user);
}
function sum(a: number, b: number): any {
  let result = a + b;
  console.log(result);
  return result;
}
*/

/*Thực hành tính tổng
let lab: number = 9;
console.log("điểm lab: ", lab);
let quiz: number = 8;
console.log("điểm quiz: ", quiz);
let assignment = 9;
console.log("điểm assignment: ", assignment);
let thi = 10;
console.log("điểm thi: ", thi);

function total(a: number, b: number, c: number, d: number): void {
  let sum = a + b + c + d;
  console.log("Tổng điểm thành phần: ", sum);
  if (sum >= 20) {
    console.log("Chúc mừng bạn đã qua môn🎉");
  } else {
    console.log("Bạn đã trượt môn😭");
  }
}
total(lab, quiz, assignment, thi);
*/

/* Example INTERFACE
//INTERFACE CÓ 3 KIỂU NHẬP: 
// ? có thể có hoặc không
// READONLY chỉ được đọc ko được sửa
// mặc định là required: bắt buộc nhập
interface Person {
  id: number;
  username: string;
}
const user: Person = {
  id: 1,
  username: "Phuong",
};
interface Employee extends Person {
  readonly email: string;
}
const employee: Employee = {
  id: 2,
  username: "Chu Tuan Phuong",
  email: "Ctuanphuong@gmail.com",
};
*/

// Bài thực hành 2: interface
interface Teacher {
  id: number;
  email: string;
  username: string;
  phone: number;
  contact: string;
}
interface Manager extends Teacher {
  role: string;
  gender: string;
}

const sontv: Teacher = {
  id: 1,
  email: "sontv@gmail.com",
  username: "sontv",
  phone: 1234567765,
  contact: "Sonvjp, Trịnh Văn Bô, Nam Từ Liêm",
};
const thienth: Manager = {
  id: 1,
  email: "thienth@gmail.com",
  username: "thienth",
  phone: 674892204887,
  contact: "Thienvjppro, Trịnh Văn Bô, Nam Từ Liêm",
  role: "Trưởng ban Back-End",
  gender: "Male",
};
console.log(sontv);
console.log(thienth);
