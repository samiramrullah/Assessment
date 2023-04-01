const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const MailGen = require('mailgen')

router.post('/', (req, res, next) => {
     console.log(req.body);
    try {
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
        let info = transporter.sendMail({
            from: 'iamsamir855@gmail.com', // sender address
            to: req.body.email, // list of receivers
            subject: 'Important Message', // Subject line
            text: req.body.message, // plain text body
            html: `<b>${req.body.message}</b>`, // html body
        });
        res.status(200).json({
            message:"Message sent via email"
        })
    } catch (error) {
        res.status(500).json({
            message:"Error"
        })
    }

    
})
module.exports = router;