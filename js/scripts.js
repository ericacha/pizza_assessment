var Pizza = {
  pepperoni: 1,
  cheese: 2,
  costPepperoni: function() {
    this.pepperoni;
  },
  costCheese: function() {
    this.cheese;
  }

};


$(document).ready(function() {

  $("form#user-input").submit(function(event) {
    event.preventDefault();

    var inputtedPizza = $("input#new-pizza").val();
    var newPizza = { order : inputtedPizza };



    // trial
    // myPepperoni = Object.create(Pizza);
    // myPepperoni.pepperoni =inputtedPizza;
    //
    // myPepperoni.costPepperoni(inputtedPizza);


    $("ul#orders").append("<li><span class='orderPizza'>" + newPizza.order + "</span></li>");

    $("input#new-pizza").val("");

    $(".orderPizza").last().click(function() {
      $("#show-order").show();
      $("#show-order h2").text(newPizza.order);
      $(".new-pizza").text(newPizza.order);
      // $(".new-pizza").text(myPepperoni.pepperoni);


    });
  });
});
