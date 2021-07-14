import { hello } from '../src'

test("Hello devaway", () => {
  expect(hello("devaway")).toEqual("Hello devaway");
});
