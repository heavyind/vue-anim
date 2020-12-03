const { mutations } = require("../../lib/store");


const mockState = {
  durationRegister: [1,2,3]
};

test("It registers the duration", () => {
  const { _registerDuration } = mutations;
  const s = { ...mockState };
  _registerDuration(s, 4);
  expect(s.durationRegister).toEqual([1,2,3,4]);
});

test("It clears the duration register", () => {
  const { _clearDurationRegister } = mutations;
  const s = { ...mockState };
  _clearDurationRegister(s);
  expect(s.durationRegister).toEqual([]);
});
