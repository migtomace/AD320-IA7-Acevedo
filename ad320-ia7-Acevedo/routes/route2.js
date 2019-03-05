const express = require('express'),
    router = express.Router(),
    colors = require('../colors.json');


router.get('/all', (req, res, next) => {
    res.send(colors.colors);
});

router.get('/:color', (req, res, next) => {
    let object = colors.colors;
    let colorName = req.params.color.toLowerCase();
    for (let i in object){
        if (object[i].color === colorName){
            res.send(object[i]);
        }
    }
    res.status(404).send("Error 404: "+colorName+" Not found!");});
module.exports = router;
