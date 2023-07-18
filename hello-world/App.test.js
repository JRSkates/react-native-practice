import App from './App';
import React from "react";
import { jest } from "@jest/globals";
import { 
  render,
  screen 
} from "@testing-library/react-native";

describe('App', () => {
  it("should render the default template", () => {
    render(<App />);
    const defaultText = screen.getByText("Hello World!")

    expect(defaultText).toBeTruthy();
  })
});