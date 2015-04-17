describe("Pizza", function() {
  describe("pepperoni", function() {
    it("the price for pepperoni is 1", function() {
      var testPizza= Object.create(Pizza);
      testPizza.pepperoni(1);
      expect(testPizza.cost1).to.equal(1);
    });
  });
  describe("cheese", function() {
    it("the price for cheese is 2", function() {
      var testPizza= Object.create(Pizza);
      testPizza.cheese(2);
      expect(testPizza.cost2).to.equal(2);
    });
  });
});
