describe("Pizza", function() {
  describe("setPrice", function() {
    it("the price is 10", function() {
      var testPizza= Object.create(Pizza);
      testPizza.init();
      expect(testPizza.price).to.equal(10);
    });
  });

});
