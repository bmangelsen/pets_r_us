// var promise = $.ajax("/appointments/current", {
//   contentType: "application/json", //what we send to server
//   dataType: "json" //what we want BACK from server
// });
//
//
// promise.done(function appointmentsLoaded(data) {
//   console.log(data);
// });

function loadAppointments() {
  $.ajax("/appointments/current", {
    contentType: "application/json", //what we send to server
    dataType: "json" //what we want BACK from server
  }).done(function appointmentsLoaded(data) {
    $(".active-appointments").html(""); // replaces everything in div with nothing, so we append the new data without duplicated what was already there
    data.forEach(function getPet(appointment) {
      $.ajax("/pets/" + appointment.pet_id, {
        contentType: "application/json", //what we send to server
        dataType: "json" //what we want BACK from server
      }).done(function (pet) {
        console.log(pet, appointment);
        appointment.pet = pet;
        renderAppointment(appointment);
      });
    });
  });
}

$("#reload-appointments").on("click", function reloadAppointmentsHandler() {
  window.setInterval(loadAppointments, 5 * 1000);
  loadAppointments();
});

// this is the same thing:
// $("#reload-appointments").on("click", loadAppointments);


function renderAppointment (appointment) {
  $(".active-appointments").append(
    "<p>" +
    appointment.pet.name + ": " +
    appointment.reason +
    "</p>"
  );
}
