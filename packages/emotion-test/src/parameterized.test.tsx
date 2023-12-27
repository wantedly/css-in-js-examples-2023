import { render } from "@testing-library/react";
import { test, expect } from "@jest/globals";

import App from "./parameterized";

test("snapshot", () => {
  render(<App />);
  expect(document.children[0].innerHTML).toMatchSnapshot();
});
