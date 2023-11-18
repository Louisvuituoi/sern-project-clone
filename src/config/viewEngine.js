import express from "express";

//tạo function: 1 function ~ 1 biến
// var: biến global -> không kiểm soát đc tham số, giá trị
//let: biến internal, phạm vi trong file
//Truyền vào biến app
//"=>": cú pháp arrow function
let configViewEngine = (app) => {
    //ảnh trong server chỉ đc lấy trong thư mục public
    app.use(express.static("./src/public"));
    //ejs tương tự file jsp của java -> cho phép gõ được logic trong file .html (if else for)
    app.set("view engine", "ejs");
    //thiết lập đường link để lấy viewEngine này
    app.set("views", "./src/views");
}

//muốn các file khác cũng sử dụng đc function này
module.exports = configViewEngine;