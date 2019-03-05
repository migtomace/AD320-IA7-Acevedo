const express = require('express'),
    router = express.Router(),
    // colors = require('../colors.json'),
    fs = require('fs'),
    contents = fs.readFileSync('../colors.json'),
    colors = JSON.parse(contents);


router.get('/all', (req, res) => {
    res.send(colors.colors);
});

router.get('/:color', (req, res) => {
    let object = colors.colors;
    const colorName = req.params.toLowerCase();
    console.log("Color JSON");
    // for (let i in object){
    //     console.log("Color JSON");
    //     if (object[i].color === colorName){
    //         res.send(object[i]);
    //     }
    // }

    if (object.color == colorName){
        res.send(object.color);
    }
    res.status(404).send("Error 404: "+colorName+" Not found!");
});

module.exports = router;
