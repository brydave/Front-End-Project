$(document).ready(function() {

  $( ".task-entry" ).click(function() {
    $( this ).next(".task-details").slideToggle(200, 'linear', function() {
      // animation complete
    });
    $( this ).toggleClass("task-entry--open")
  });

});
