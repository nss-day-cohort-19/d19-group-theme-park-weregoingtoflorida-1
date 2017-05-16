"use strict";

let promise = require("./attractory");
let mainTemplate = require("../templates/master-template.hbs");


let libertySquareObj = {};

libertySquareObj.call = function(){

    promise.loadAttraction()
    .then( data =>{
        libertySquareObj.filter(data);
    });
};

libertySquareObj.filter = function(data){
    console.log("data", data);
    libertySquareObj.attraction = [];
    data.forEach(function(element) {
        if (element.area_id === 4) {
        libertySquareObj.attraction.push(element);
        }
    });
        libertySquareObj.write();
};

libertySquareObj.write = function(){
    $("#page").html();
    $("#page").html(mainTemplate(libertySquareObj));

};

module.exports=libertySquareObj;
