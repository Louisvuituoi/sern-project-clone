import db from '../models/index';
import bcrypt from 'bcrypt';


//= var bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

//tao Function bien input data
let createNewUser = async (data) => {
    //luu hash xuong db
    return new Promise(async (resolve, reject) => {
        try {
            let hashPasswordFromBcrypt = await hashUserPwd(data.password);
            //map den user
            await db.User.create({
                email: data.email,
                password: hashPasswordFromBcrypt,
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                phoneNumber: data.phoneNumber,
                gender: data.gender === '1' ? true : false,
                roleId: data.roleId,
            })

            resolve('Create new User Successfully')
        } catch (e) {
            reject(e)
        }
    })


}

let hashUserPwd = (pwd) => {
    return new Promise(async (resolve, reject) => {
        try {
            var hashPwd = await bcrypt.hashSync(pwd, salt);
            resolve(hashPwd);
        } catch (error) {
            reject(error)
        }
    })
}
//export function de su dung dc o cac file khac
module.exports = {
    createNewUser: createNewUser,
}