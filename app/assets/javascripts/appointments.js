// var promise = $.ajax("/appointments/current", {
//   contentType: "application/json", //what we send to server
//   dataType: "json" //what we want BACK from server
// });
//
//
// promise.done(function appointmentsLoaded(data) {
//   console.log(data);
// });
(function () {

  window.petsrus = window.petsrus || {};
  window.petsrus.loadAppointments = loadAppointments; //assignment exposes loadAppointments to the outside

  function loadAppointments() {
    return $.ajax("/appointments/current", {
      contentType: "application/json", //what we send to server
      dataType: "json" //what we want BACK from server
    });
  }
})(); //wrap entire anonymous function in parens, then follow up with bubble at end. it immediately evaluates
  // functions within are no longer on global namespace: THIS IS GOOD
  // this is the same thing:
  // $("#reload-appointments").on("click", loadAppointments);

  // immediately invocable function expression (IIFE)
