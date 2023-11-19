//trong file index.js da import tat ca model roi
import db from '../models/index';
import CRUDService from '../services/CRUDService';

//hàm getHomePage trả ra nội dung trong ""
// let getHomePage = (req, res) => {
//     return res.send("Hello hehe from controller")
// }
//-----------------------------------
let getHomePage = async (req, res) => {
    //moi lan connect db can su dung try catch
    try {
        //tham chieu table user trong db
        let data = await db.User.findAll();
        return res.render('homepage.ejs', {
            data: JSON.stringify(data) // truyen bien data ra view
        })
        // vì trong viewEngine đã set đường dẫn vào src/views nên không cần khai báo đường dẫn
    } catch (error) {
        console.log(error);
    }

}
//..........
let getAboutPage = (req, res) => {
    return res.render('./test/about.ejs')
}
let getCRUD = (req, res) => {
    return res.render('crud.ejs');
}

//vi viec tao nguoi dung ton time -> su dung sync
let postCRUD = async (req, res) => {
    let message = await CRUDService.createNewUser(req.body);
    console.log(message);
    return res.send('post crud from server');
}

//-----------------------------------
//export các objects để các page khác dùng được chung
// object :{
//     key:'',
//     value:''
// }
module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
}