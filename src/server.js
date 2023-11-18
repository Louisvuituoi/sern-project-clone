import express from "express";
//hỗ trợ lấy các tham số mà phía client sử dụng 
//vd: query param user?id=7 -> server muốn lấy đc value 7 cần bodyParser
import bodyParser from "body-parser";
//import hàm
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";
// enable process.env
require('dotenv').config();


let app = express();

//config app

//cấu hình các tham số phía client gửi lên
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app); //app = instance of express
initWebRoutes(app);

let port = process.env.PORT || 6969;
//if port === undefined => port = 6969

app.listen(port, () => {
    //khi chay thanh cong -> callback
    console.log("Backend Nodejs is running on the port: " + port);
})
