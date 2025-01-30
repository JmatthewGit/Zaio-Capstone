import React from "react";
import "../../styles/ReservationCard.css";

const ReservationCard = ({ reservationId, customerName, checkInDate, checkOutDate, totalGuests, booking }) => {
  return (
    <div className="reservation-card">
      <table className="reservation-table">
        <thead>
          <tr>
            <th>Reservation ID</th>
            <th>Customer</th>
            <th>Check-In Date</th>
            <th>Check-Out Date</th>
            <th>Total Guests</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{reservationId}</td>
            <td>{customerName}</td>
            <td>{checkInDate}</td>
            <td>{checkOutDate}</td>
            <td>{totalGuests}</td>
            <td>{booking ? "Booked" : "Pending"}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ReservationCard;



