import { render, screen } from "@testing-library/react";
import App from "./App";

test("should get hello world", () => {
  render(<App />);
  screen.getByText("Hello world!");
});
