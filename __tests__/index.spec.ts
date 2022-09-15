import ServiceTest from "../app/src";


describe("Test", () => {
  it("should test", () => {
    const serviceTest = new ServiceTest();
    expect(serviceTest.test()).toBeTruthy();
  });
});