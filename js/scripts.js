var Pizza = {
    init:function() {
        this.price = 10
    },
    setPrice:function(kind)  {
        this.price += kind;
    }
};

var newPizza = Object.create(Pizza);

$(document).ready(function() {


    $("form#pizza").submit(function(event) {

    event.preventDefault();

    newPizza.init();

    var price = parseInt($("select#options").val());

    newPizza.setPrice(price);

    var totalPrice = newPizza.price;


    $("#final_price").text(totalPrice);

  });

});
