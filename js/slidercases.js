"use strict";

let slider = {};

slider.cases = () => {
    var sliderNum = $("#ticker")[0].value;
    console.log("sliderNum", sliderNum);
    console.log("hey bob");
    switch (sliderNum){
        case "1":
            var sliderTime = "8:30AM";
            console.log("sliderNum switch", sliderNum);
            console.log("sliderTimechange", sliderTime);
            $("#inputValue").html(sliderTime);
            break;
        case "2":
            sliderTime = "9:00AM";
            $("#inputValue").html(sliderTime);
            break;
        case "3":
            sliderTime = "9:30AM";
            $("#inputValue").html(sliderTime);
            break;
        case "4":
            sliderTime = "10:00AM";
            $("#inputValue").html(sliderTime);
            break;
        case "5":
            sliderTime = "10:30AM";
            $("#inputValue").html(sliderTime);
            break;
        case "6":
            sliderTime = "11:00AM";
            $("#inputValue").html(sliderTime);
            break;
        case "7":
            sliderTime = "11:30AM";
            $("#inputValue").html(sliderTime);
            break;
        case "8":
            sliderTime = "12:00PM";
            $("#inputValue").html(sliderTime);
            break;
        case "9":
            sliderTime = "12:30PM";
            $("#inputValue").html(sliderTime);
            break;
        case "10":
            sliderTime = "1:00PM";
            $("#inputValue").html(sliderTime);
            break;
        case "11":
            sliderTime = "1:30PM";
            $("#inputValue").html(sliderTime);
            break;
        case "12":
            sliderTime = "2:00PM";
            $("#inputValue").html(sliderTime);
            break;
        case "13":
            sliderTime = "2:30PM";
            $("#inputValue").html(sliderTime);
            break;
        case "14":
            sliderTime = "3:00PM";
            $("#inputValue").html(sliderTime);
            break;
        case "15":
            sliderTime = "3:30PM";
            $("#inputValue").html(sliderTime);
            break;
        case "16":
            sliderTime = "4:00PM";
            $("#inputValue").html(sliderTime);
            break;
        case "17":
            sliderTime = "4:30PM";
            $("#inputValue").html(sliderTime);
            break;
        case "18":
            sliderTime = "5:00PM";
            $("#inputValue").html(sliderTime);
            break;
        case "19":
            sliderTime = "5:30PM";
            $("#inputValue").html(sliderTime);
            break;
        case "20":
            sliderTime = "6:00PM";
            $("#inputValue").html(sliderTime);
            break;
        case "21":
            sliderTime = "6:30PM";
            $("#inputValue").html(sliderTime);
            break;
        case "22":
            sliderTime = "7:00PM";
            $("#inputValue").html(sliderTime);
            break;
        case "23":
            sliderTime = "7:30PM";
            $("#inputValue").html(sliderTime);
            break;
        case "24":
            sliderTime = "8:00PM";
            $("#inputValue").html(sliderTime);
            break;
        case "25":
            sliderTime = "8:30PM";
            $("#inputValue").html(sliderTime);
            break;
        case "26":
            sliderTime = "9:00PM";
            $("#inputValue").html(sliderTime);
            break;
        case sliderNum = "27":
            sliderTime = "9:30PM";
            $("#inputValue").html(sliderTime);
            break;
    }
    
};

module.exports = slider;