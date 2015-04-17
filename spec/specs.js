describe("Pizza", function() {
  describe("pepperoni", function() {
    it("the price for pepperoni is 1", function() {
      var testPizza= Object.create(Pizza);
      testPizza.pepperoni(1);
      expect(testPizza.cost1).to.equal(1);
    });
  });
});
