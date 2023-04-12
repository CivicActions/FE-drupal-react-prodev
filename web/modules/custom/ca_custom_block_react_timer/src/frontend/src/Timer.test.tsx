import {act, render, screen } from "@testing-library/react";
import Timer from "./Timer";

describe('Test Timer component', () => {
  test('Render timer and click buttons', () => {
    render(<Timer />);
    expect(screen.getByTestId("current-time"))
      .toHaveTextContent("00:00:00");
    expect(screen.getByTestId("previous-time"))
      .toHaveTextContent("Previous: 00:00:00")
    act(() => {
      screen.getByText("Start").click();
    });
    act(() => {
      screen.getByText("Stop").click();
    });
    act(() => {
      screen.getByText("Reset").click();
    });
  });
});
