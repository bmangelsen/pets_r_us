// var promise = $.ajax("/appointments/current", {
//   contentType: "application/json", //what we send to server
//   dataType: "json" //what we want BACK from server
// });
//
//
// promise.done(function appointmentsLoaded(data) {
//   console.log(data);
// });

$.ajax("/appointments/current", {
  contentType: "application/json", //what we send to server
  dataType: "json" //what we want BACK from server
}).done(function appointmentsLoaded(data) {
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


function renderAppointment (appointment) {
  $(".active-appointments").append(
    "<p>" +
    appointment.pet.name +
    appointment.reason +
    "</p>"
  );
}
