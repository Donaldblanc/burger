import express from "express"
import burgers from "../models/burger.js"

// const express = require("express")
// const burgers = require('../models/burger.js')

const router = express.Router();

router.get("/", (request, response) =>{
   console.log("the route works");
        burgers.all( (data) => {

            console.log(` ${JSON.stringify(data)}`);
            return response.render("index", {burgers: data})
        })

    console.log(`${response}`);

});

// router.get("/burgers/update", (request, response) =>{
//     console.log("in the /burger Ger route");
   
//         response.redirect("/");
//     });


router.post("/burgers/create", (request, response) =>{
    console.log("in the put route");


    burgers.create(request.body.burger, (result) =>{
        console.log(result);
        response.redirect("/");
    });
});

router.post("/burgers/update", (request, response) =>{
    console.log("in the post route");


    burgers.update(request.body.burger_id, (result) =>{
        console.log(result);
        response.redirect("/");
    });
});

export default router; 
//module.exports = router;