import {render, screen} from "@testing-library/react";
import TimeDisplay from "./TimeDisplay";

describe('Test TimeDisplay Component', () => {
  test('Renders TimeDisplay at Zero seconds', () => {
    render(<TimeDisplay timeInSeconds={0} />);
    const timeDisplayEl = screen.getByRole("timer");
    expect(timeDisplayEl).toHaveTextContent("00:00:00");
    expect(timeDisplayEl.getAttribute("datetime"))
      .toBe("PT0H0M0S");
  });
  test('Renders TimeDisplay at 10000 seconds', () => {
    render(<TimeDisplay timeInSeconds={10000} />);
    const timeDisplayEl = screen.getByRole("timer");
    expect(timeDisplayEl).toHaveTextContent("02:46:40");
    expect(timeDisplayEl.getAttribute("datetime"))
      .toBe("PT2H46M40S");
  })
})
