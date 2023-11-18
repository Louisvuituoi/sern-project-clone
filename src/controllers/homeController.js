//hàm getHomePage trả ra nội dung trong ""
// let getHomePage = (req, res) => {
//     return res.send("Hello hehe from controller")
// }
//-----------------------------------
let getHomePage = (req, res) => {
    return res.render('homepage.ejs')
    // vì trong viewEngine đã set đường dẫn vào src/views nên không cần khai báo đường dẫn
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