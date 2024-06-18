import React, { useState,} from 'react';
import { Link } from 'react-router-dom';

const BookingForm = () => {
  const [date, setDate] = useState();
  const [time, setTime] = useState("17:00");
  const [guests, setGuests] = useState("2");
  const [occasion, setOccasion] = useState("Birthday");

  const handleConfirm = () => {
    let result = [`Date:  ${date} Time: ${time} Guests: ${guests} Occasion: ${occasion} `];
    if (date !== undefined) {
      const confirmationUrl = `/ConfirmationPage/${result}`;
      return confirmationUrl;
    }
  }

  return (
    <>
      <h1>Order Page</h1>
      <form className="bookingform" >
          <section className="field-date">
            <label>Booking date</label>
            <input
               type="date"
               value={date}
               onChange={(e) => { setDate(e.target.value);}}
               placeholder="res-date"
               required />
         </section>
         <br />

          <section className="field-time">
            <label>Booking time</label>
            <select
               value={time}
               onChange={(e) => setTime(e.target.value)}>
               <option value="12:00">12:00</option>
               <option value="13:00">13:00</option>
               <option value="14:00">14:00</option>
               <option value="15:00">15:00</option>
               <option value="16:00">16:00</option>
               <option value="17:00">17:00</option>
               <option value="18:00">18:00</option>
               <option value="19:00">19:00</option>
               <option value="20:00">20:00</option>
               <option value="21:00">21:00</option>
               <option value="22:00">22:00</option>
            </select>
         </section>
         <br />

         <section className="field-guests">
            <label>Number of guests</label>
            <input
               type="number"
               min="1"
               max="12"
               value={guests}
               onChange={(e) => setGuests(e.target.value)}
               placeholder="2" />
         </section>
         <br />

         <section className="field-occasion">
            <label>Occasion</label>
            <select
               value={occasion}
               onChange={(e) => setOccasion(e.target.value)}>
               <option value="Birthday">Birthday</option>
               <option value="Anniversary">Anniversary</option>
               <option value="Wedding">Wedding</option>
               <option value="Other">Other</option>
            </select>
         </section>
         <br />

          <section className="submit">
            <Link to={handleConfirm()}>
              <button >Confirm Order</button>
            </Link>
         </section>
      </form>
    </>
  );
};

export default BookingForm;