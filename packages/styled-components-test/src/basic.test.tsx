import { render } from "@testing-library/react";
import React from "react";
import { test, expect } from "@jest/globals";

import App from "./basic";

test("snapshot", () => {
  render(<App />);
  expect(document.children[0].innerHTML).toMatchSnapshot();
});
