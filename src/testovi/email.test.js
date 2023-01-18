import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
 
import Calendar from '../pages/Calendar';
 
describe("<Calendar />", () => {
 
  test('render email input', () => {
    render(<Calendar />);
 
    const inputEl = screen.getByTestId("email-input");
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "text");
  });
 
  test('pass valid email to test email input field', () => {
    render(<Calendar />);
 
    const inputEl = screen.getByTestId("email-input");
    userEvent.type(inputEl, "test@mail.com");
 
    expect(screen.getByTestId("email-input")).toHaveValue("test@mail.com");
    expect(screen.queryByTestId("error-msg")).not.toBeInTheDocument();
  });
 
  test('pass invalid email to test input value', () => {
    render(<Calendar />);
 
    const inputEl = screen.getByTestId("email-input");
    userEvent.type(inputEl, "test");
 
    expect(screen.getByTestId("email-input")).toHaveValue("test");
    expect(screen.queryByTestId("error-msg").textContent).toEqual("Please enter a valid email.");
  });
 
});