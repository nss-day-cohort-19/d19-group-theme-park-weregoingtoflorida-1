"use strict";
console.log('loader has loaded');


let loadArea= () =>{
    return new Promise((resolve, reject)=>{
        $.ajax({
            url: "https://disney-94757.firebaseio.com/areas/.json",
            success: function(data){
                resolve(data);
            }
        });
    });
};
let loadAttractiontype= () =>{
    return new Promise((resolve, reject)=>{
        $.ajax({
            url: "https://disney-94757.firebaseio.com/attraction_types/.json",
            success: function(data){
                resolve(data);
            }
        });
    });
};
let loadAttraction= () =>{
    return new Promise((resolve, reject)=>{
        $.ajax({
            url: "https://disney-94757.firebaseio.com/attractions/.json",
            success: function(data){
                resolve(data);
            }
        });
    });
};
let loadParkinfo= () =>{
    return new Promise((resolve, reject)=>{
        $.ajax({
            url: "https://disney-94757.firebaseio.com/park-info/.json",
            success: function(data){
                resolve(data);
            }
        });
    });
};

module.exports= {loadArea, loadAttractiontype, loadAttraction, loadParkinfo};
