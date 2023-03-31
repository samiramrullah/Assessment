const express = require('express');
const router = express.Router();
const userSchema = require('../../models/user');
const { default: mongoose } = require('mongoose');
router.post('/', (req, res, next) => {
    try {
        const user = new userSchema({
            _id: new mongoose.Types.ObjectId,
            name: req.body.name,
            email: req.body.email,
            message: req.body.message
        });
        user
            .save()
            .then((result) => {
                res.status(201).json({
                    message: "Message Registered",
                    result
                })
            })
            .catch((err) => {
                res.status(500).json({
                    error: err
                })
            })

    } catch (error) {
        res.status(206).json({
            message: "Eiter no content or no proper naming"
        })
    }
});

module.exports = router;