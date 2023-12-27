import React from "react";
import ReactDOMClient from "react-dom/client";
import { act } from 'react-dom/test-utils';
import { test, expect } from "@jest/globals";

import App from "./index";

test("snapshot", () => {
  const div = document.createElement("div");
  div.id = "root";
  document.body.appendChild(div);

  act(() => {
    const root = ReactDOMClient.createRoot(div);
    root.render(<App />);
  });
  expect(document.children[0].innerHTML).toMatchSnapshot();
});
