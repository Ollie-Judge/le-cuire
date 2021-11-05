/* everything in this ready function will load on page load*/
$(document).ready(function(){
    $('.sidenav').sidenav(); /* activates the sidenav interactivity */
    $('.collapsible').collapsible(); /* activates the recipe page recipe collapsible interactivity */
    $('.tooltipped').tooltip(); /* activates the mouse hover label */
    $('select').formSelect(); /* activates the recipe type select element in the manage recipes page interactivity*/
  
    /* Below function will add red or green lines under the input fields to tell the user if their inputs have matched the requirements of the field */
  validateMaterialize();
  function validateMaterialize() {
    let classOfValid = { "border-bottom":"1px solid #4caf50", "box-shadow": "0 1px 0 0 #4caf50" }; /* defining and outlining green colour for correct data input */
    let classOfInvalid = { "border-bottom": "1px solid #f44336", "box-shadow": "0 1px 0 0 #f44336" }; /* defining and outlining red colour for incorrect data input */
    if ($("select.validate").prop("required")) {
        $("select.validate").css({"display": "block", "height": "0", "padding": "0", "width": "0", "position": "absolute" });
    }
    /* below function adds green colour for correct data input by calling on the variable above*/
    $(".select-wrapper input.select-dropdown").on("focusin", function () {
        $(this).parent(".select-wrapper").on("change", function () {
            if ($(this).children("ul").children("li.selected:not(.disabled)").on("click", function () { })) {
                $(this).children("input").css(classOfValid);
            }
        });
        /* below function adds red colour for correct data input by calling on the variable above*/
    }).on("click", function () {
      if ($(this).parent(".select-wrapper").children("li.selected:not(.disabled)").css("background-color") === "rgba(0, 0, 0, 0.03)") {
          $(this).parent(".select-wrapper").children("input").css(classOfValid);
      } else {
          $(".select-wrapper input.select-dropdown").on("focusout", function () {
              if ($(this).parent(".select-wrapper").children("select").prop("required")) {
                  if($(this).css("border-bottom") != "1px solid rgb(76, 175, 80)") {
                      $(this).parent(".select-wrapper").children("input").css(classOfInvalid)
                  }
              }
          });
      }
    });
  }
});