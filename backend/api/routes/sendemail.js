const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const MailGen = require('mailgen')

router.post('/', (req, res, next) => {
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