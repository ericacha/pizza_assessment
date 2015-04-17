describe("Pizza", function() {
  describe("costPepperoni", function() {
    it("the price for pepperoni is 1", function() {
      var testPizza= Object.create(Pizza);
      testPizza.costPepperoni(1);
      expect(testPizza.pepperoni).to.equal(1);
    });
  });
  describe("costCheese", function() {
    it("the price for cheese is 2", function() {
      var testPizza= Object.create(Pizza);
      testPizza.costCheese(2);
      expect(testPizza.cheese).to.equal(2);
    });
  });
});
