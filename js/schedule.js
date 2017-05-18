"use strict";


console.log("schedule.js Bitch");

let modal = require("../templates/schedule-modal.hbs");

function addToSchedule(event) {

    let tempObj = {};
    // console.log("click", event.target);
    if (event.target.classList.contains('eventList')) {
        let innerThings = event.target.innerText;
        tempObj.time = innerThings.slice(0, 7);
        tempObj.event = innerThings.slice(8, event.length);

        $.ajax({
                url: "https://disney-94757.firebaseio.com/schedule.json",
                method: "POST",
                data: JSON.stringify(tempObj)
            })
            .done(function(response) {
                console.log("response from Firebase:", response);
            });
        }
    // console.log('temp sched', scheduleObj);

}

function viewSchedule() {
    $.ajax({
            url: "https://disney-94757.firebaseio.com/schedule/.json",
            success: function(data){
                console.log(data);
            // $("#myModal").html();
            $("#myModal").html(modal(data));
            }
        });
}

module.exports = {addToSchedule, viewSchedule};
