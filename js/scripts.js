var price = 0;

$(document).ready(function(){
  $("form#orderP").submit(function(event) {
    event.preventDefault();

  var pepperoni = { price : 2 };
  var cheese = { price : 1 };

  var cost = { amount: [pepperoni, cheese] };

  cost.amount.forEach(function(total) {
    $("#result").text(price);
  });

  var inputtedPepperoni = $(".btnP").val();
  newPepperoni = {pepporoni: inputtedPeppori};


  });
});
