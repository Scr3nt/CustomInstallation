/* eslint-disable @typescript-eslint/no-unsafe-member-access */

/* eslint-disable @typescript-eslint/no-unsafe-assignment */

/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Text } from "react-native";
import renderer from "react-test-renderer";

import Button from "../Button";

describe("Button", () => {
  it("has title", () => {
    const title = "Button";
    const component = renderer.create(
      <Button>
        <Text>{title}</Text>
      </Button>
    );
    const tree = component.toJSON();
    expect(tree.children[0].children[0]).toBe(title);
  });
});
