//trong file index.js da import tat ac model roi
import db from '../models/index';

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

//-----------------------------------
//export các objects để các page khác dùng được chung
// object :{
//     key:'',
//     value:''
// }
module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
}