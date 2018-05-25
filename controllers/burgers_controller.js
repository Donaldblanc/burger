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

export default router; 
//module.exports = router;