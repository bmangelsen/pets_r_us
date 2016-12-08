(function() {
  'use strict';

  window.petrus = window.petrus || {};

  function renderAppointments(appointments) {
    $(".active-appointments").html(""); // replaces everything in div with nothing, so we append the new data without duplicated what was already there
    appointments.forEach(function getPet(appointment) {
      renderAppointment(appointment);
    });
  }

  function renderAppointment (appointment) {
    $(".active-appointments").append(
      "<p>" +
      appointment.pet.name + ": " +
      appointment.reason +
      "</p>"
    );
  }

  function loadAndRenderAppointments (){
    window.petsrus.loadAppointments().done(function (appointments) {
      renderAppointments(appointments);
    });
  }

  loadAndRenderAppointments();
  // window.petsrus.loadAppointments = loadAppointments;

  $("#reload-appointments").on("click", loadAndRenderAppointments);
  window.setInterval(loadAndRenderAppointments, 5 * 1000);

}());
