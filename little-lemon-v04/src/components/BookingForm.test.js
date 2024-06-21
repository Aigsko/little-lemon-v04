import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import BookingForm from '../BookingForm';

test('renders BookingForm and checks if form fields work correctly', () => {
  const { getByLabelText, getByText } = render(
    <Router>
      <BookingForm />
    </Router>
  );

  const dateInput = getByLabelText(/Booking date/i);
  const timeSelect = getByLabelText(/Booking time/i);
  const guestsInput = getByLabelText(/Number of guests/i);
  const occasionSelect = getByLabelText(/Occasion/i);

  fireEvent.change(dateInput, { target: { value: '2024-06-30' } });
  expect(dateInput.value).toBe('2024-06-30');

  fireEvent.change(timeSelect, { target: { value: '19:00' } });
  expect(timeSelect.value).toBe('19:00');

  fireEvent.change(guestsInput, { target: { value: '4' } });
  expect(guestsInput.value).toBe('4');

  fireEvent.change(occasionSelect, { target: { value: 'Wedding' } });
  expect(occasionSelect.value).toBe('Wedding');

  const confirmButton = getByText(/Confirm Order/i);
  expect(confirmButton).toBeInTheDocument();
});
