const contactModel = require('../model/contactmodel')
module.exports = {
    home: (req, res, next) => {
        res.render('home');
    },
    about: (req, res, next) => {
        res.render('about');
    },
    service: (req, res, next) => {
        res.render('service');
    },
    contact: (req, res, next) => {
        res.render('contact');
    },
    dataCon: (req, res) => {
        let data = req.body
        console.log("data from ajax", data)
        return new Promise(async(resolve,reject) => {
            console.log("Ener promise")
           const formdata = new contactModel({
                name:data.name,
                email:data.email,
                message:data.message

            })
            formdata.save().then(()=>{
                res.redirect('/')

            }).catch(()=>{

            }
            );
        })




        
    }
}