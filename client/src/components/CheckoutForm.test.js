import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)
});

test("form shows success message on submit with form details", async () => {
    render(<CheckoutForm />)
    const fName = screen.getByLabelText(/first/i)
    const lName = screen.getByLabelText(/last/i)
    const address = screen.getByLabelText(/address/i)
    const city = screen.getByLabelText(/city/i)
    const state = screen.getByLabelText(/state/i)
    const zip = screen.getByLabelText(/zip/i)

    await fireEvent.change(fName, { target: { value: 'Ed' } })
    await fireEvent.change(lName, { target: { value: 'Bull' } })
    await fireEvent.change(address, { target: { value: '123 Main' } })
    await fireEvent.change(city, { target: { value: 'Alexandria' } })
    await fireEvent.change(state, { target: { value: 'VA' } })
    await fireEvent.change(zip, { target: { value: '22193' } })

    const submitBtn = screen.getByText('Checkout')

    await fireEvent.click(submitBtn)
    const success = screen.getByTestId('successMessage')
    expect(success).toBeInTheDocument();
});
