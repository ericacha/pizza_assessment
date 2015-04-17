var Pizza = {
  cost1 : 1,
  cost2 : 2,
  pepperoni: function() {
    this.cost1;
  },
  cheese: function() {
    this.cost2;
  }
};

$(document).ready(function() {

  $("form#user-input").submit(function(event) {
    event.preventDefault();

    var inputtedPizza = $("input#new-pizza").val();
    var newPizza = { order : inputtedPizza };


    $("ul#orders").append("<li><span class='orderPizza'>" + newPizza.order + "</span></li>");

    $("input#new-pizza").val("");

    $(".orderPizza").last().click(function() {
      $("#show-order").show();
      $("#show-order h2").text(newPizza.order);
      $(".new-pizza").text(newPizza.order);

    });
  });
});













// var price = 0;
//
// $(document).ready(function(){
//   $("form#orderP").submit(function(event) {
//     event.preventDefault();
//
//   var pepperoni = { price : 2 };
//   var cheese = { price : 1 };
//
//   var cost = { amount: [pepperoni, cheese] };
//
//   cost.amount.forEach(function(total) {
//     $("#result").text(price);
//   });
//
//   var inputtedPepperoni = $(".btnP").val();
//   newPepperoni = {pepporoni: inputtedPepperoni};
//
//
//   });
// });
