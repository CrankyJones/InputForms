$(document).ready(function() {
  $("formName").submit(function(event) {
    event.prevenDefault();
    const person = $("input#person").val();
    const favoriteFood = $("input#favoriteFood").val();
    const music = $("input:radio[name=music]:checked").val();
    const born = $("input#born").val();

    $("#person").text(person);
    $("#favoriteFood").text(favoriteFood);
    $("#music").text(music);
    $("#born").text(born);

    $("#bio").show();
  });
});