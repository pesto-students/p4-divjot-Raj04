// export default mathOperations;

// import { mathOperations } from "./mathop";
const mathOperations = require("./mathop");

test("should return sum of two values", () => {
  expect(mathOperations.sum(2, 3)).toBe(5);
});
test("should return difference of two values", () => {
  expect(mathOperations.diff(17, 10)).toBe(7);
});
test("should return product of two values", () => {
  expect(mathOperations.product(15, 15)).toBe(225);
});
