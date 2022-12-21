import renderer from "react-test-renderer";

import Home from "../";

jest.useFakeTimers();

jest.mock("expo-router");

describe("Home", () => {
  it("has 5 child", () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree.children.length).toBe(5);
  });
});
