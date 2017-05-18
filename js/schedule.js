"use strict";

let modal = require("../templates/schedule-modal.hbs");

function addToSchedule(event) {

    let tempObj = {};
    // console.log("click", event.target);
    if (event.target.classList.contains('schedule-add')) {
        let innerThings = event.target.innerText;
        tempObj.time = innerThings.slice(0, 6);
        tempObj.event = innerThings.slice(7, event.length);

        $.ajax({
                url: "https://disney-94757.firebaseio.com/schedule.json",
                method: "POST",
                data: JSON.stringify(tempObj)
            })
            .done(function(response) {
                console.log("response from Firebase:", response);
                $('#schedule').trigger('click');
            });
        }
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
