const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const MailGen = require('mailgen')

router.post('/', (req, res, next) => {
    // let config = {
    //     service: 'gmail',
    //     auth: {
    //         user: 'iamsamir855@gmail.com',
    //         pass: 'ewdmdtkwzalyquzf'
    //     }
    // }

    // let transpoter = nodemailer.createTransport(config)

    // let MailGenerator = new MailGen({
    //     theme: "default",
    //     product: {
    //         name: "Mailgen",
    //         link: 'https://mailgen.js/'
    //     }
    // })

    // let response = {
    //     body: {
    //         name:"Samir",
    //         intro: "Your Query answered",
    //         table: {
    //             data: [
    //                 {
    //                     item: "Nodemailer Stack book",
    //                     description: "I am description"
    //                 }
    //             ]
    //         },
    //         outro: "Looking forward to "
    //     }
    // }

    // let mail = MailGenerator.generate(response)
    // let message = {
    //     from: 'iamsamir855@gmai.com',
    //     to: 'samiramrullah@gmail.com',
    //     subject: "Testing",
    //     html: mail
    // }
    // transpoter.sendMail(message)
    //     .then(() => {
    //         return res.status(201).json({
    //             msg: "Mail recieved"
    //         })
    //     })
    //     .catch(err => {
    //         return res.status(500).json({ err })
    //     })

    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: 'iamsamir855@gmail.com', // your email address
            pass: 'ewdmdtkwzalyquzf', // your app generated password
        },
    });

    // send mail with defined transport object
    let info =  transporter.sendMail({
        from: 'iamsamir855@gmail.com', // sender address
        to: 'samiramrullah@gmail.com', // list of receivers
        subject: 'Test Email', // Subject line
        text: 'Hello World!', // plain text body
        html: '<b>Hello World!</b>', // html body
    });

    console.log("Message sent: %s", info.messageId);
    res.status(200).json({
        message:"okay"
    })
})
module.exports = router;