import { render } from "@testing-library/react";

import Word from "./Word";

describe("Word", () => {
  it("should render initial faded text", () => {
    render(<Word text="Hello" />);
  });
});
