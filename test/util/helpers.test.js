const { toNumber, toNumberHelp, toEnterNumber, toLeaveNumber } = require("../../util/helpers");

test("It returns the number put in", () => {
  expect(toNumber("enter", 1234)).toBe(1234);
});

test("It returns the number specified by `object.enter`", () => {
  expect(toNumber("enter", { enter: 1234, leave: 4321 })).toBe(1234);
});

test("It returns the number put in", () => {
  expect(toEnterNumber(1234)).toBe(1234);
});

test("It returns the number put in", () => {
  expect(toLeaveNumber(6789)).toBe(6789);
});

test("It returns the number specified by `object.enter`", () => {
  expect(toEnterNumber({enter: 4321})).toBe(4321);
});

test("It returns the number specified by `object.leave`", () => {
  expect(toLeaveNumber({leave: 9876})).toBe(9876);
});
