import express, { Router } from "express";
//homeController như 1 object của file trong đường dẫn
import homeController from "../controllers/homeController";

let router = express.Router();

//1 server = 1 ứng dụng 
// -> truyền ứng dụng "app" của server vào hàm initWebRoutes
let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/about', homeController.getAboutPage);
    router.get('/crud', homeController.getCRUD);
    router.post('/post-crud', homeController.postCRUD);




    //app sẽ bắt đầu ="/" và sử dụng tất cả các file router đã khai báo
    router.get('/test', (req, res) => {
        return res.send('Cút');
    });

    return app.use("/", router);
}


module.exports = initWebRoutes;