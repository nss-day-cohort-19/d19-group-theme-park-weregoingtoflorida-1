"use strict";

let canvasObj = {};

canvasObj.getCords = function(mstObj){
  $(".event-name").click(function(event){
        var xcord = "";
        var ycord = "";
        var target_id = event.target.lastChild.data;
        mstObj.attraction.forEach(function(element){
            if (element.name === target_id){
                xcord = element.x;
                ycord = element.y;
            }
        });
        console.log("target_id", event);
        canvasObj.heyGuys(xcord, ycord);
  });
};

canvasObj.heyGuys = function(x, y){
    console.log("hey guys!");

    var canvas = document.getElementById('map-canvas');
    var canvasWidth = $("#mk").width();
    var canvasHeight = $("#mk").height();
    canvas.setAttribute("width",canvasWidth);
    canvas.setAttribute("height", canvasHeight);

    var context = canvas.getContext('2d');

    var centerX = x;
    var centerY = y;
    var radius = 25;

    context.beginPath();
      context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
      context.lineWidth = 1;
      context.fillStyle = 'green';
      context.fill();
      context.strokeStyle = "pink";
      context.stroke();

};


module.exports = canvasObj;
