import React from "react";
import { render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<App />)
});

test("form shows success message on submit with form details", () => {
    render(<App />)
    const fName = screen.getByLabelText(/first/i)
    const lName = screen.getByLabelText(/last/i)
    const email = screen.getByLabelText(/address/i)
    const email = screen.getByLabelText(/city/i)
    const email = screen.getByLabelText(/state/i)
    const email = screen.getByLabelText(/zipi/)

    fireEvent.change(fName, { target: { value: 'Ed' } })
    fireEvent.change(lName, { target: { value: 'Bull' } })
    fireEvent.change(email, { target: { value: '123 Main' } })
    fireEvent.change(email, { target: { value: 'Alexandria' } })
    fireEvent.change(email, { target: { value: 'VA' } })
    fireEvent.change(email, { target: { value: '22193' } })

    const submitBtn = screen.getByRole('submit', { type: 'submit' })

    fireEvent.click(submitBtn)

    expect(screen.getByText('Ed')).toBeInTheDocument();
});
