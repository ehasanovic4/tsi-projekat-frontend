import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
 
import Calendar from '../pages/Calendar';
 
describe("<Calendar />", () => {
 
  test('render name input', () => {
    render(<Calendar />);
 
    const inputEl = screen.getByTestId("ime-input");
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "text");
  });
 
  test('pass valid name to test name input field', () => {
    render(<Calendar />);
 
    const inputEl = screen.getByTestId("ime-input");
    userEvent.type(inputEl, "Emina");
 
    expect(screen.getByTestId("ime-input")).toHaveValue("Emina");
    expect(screen.queryByTestId("error-msg")).not.toBeInTheDocument();
  });
 
  test('pass invalid email to test input value', () => {
    render(<Calendar />);
 
    const inputEl = screen.getByTestId("ime-input");
    userEvent.type(inputEl, "123");
 
    expect(screen.getByTestId("ime-input")).toHaveValue("123");
    expect(screen.queryByTestId("error-msg").textContent).toEqual("Please enter a valid name.");
  });
 
});