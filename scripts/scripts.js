$(document).ready(function() {
  $accordionTrigger = $( ".task-entry");
  $accordionContent = $( $accordionTrigger ).next(".task-details");
  $listItem = $( ".task-entries__details" )

  $( $accordionTrigger ).click(function() {
    $( this ).next(".task-details").slideToggle(200, 'linear', function() {
       //callback function after animation finished
      });
    $( this ).toggleClass("task-entry--open")
  });

});
// $contentListHeight = $( this ).next(".task-details").children().outerHeight();
// $listLength = $( $accordionContent ).children().length;
// $contentHeight = $( $contentListHeight * $listLength );
// console.log($($( this ).children().outerHeight() * $(this).children().length));
