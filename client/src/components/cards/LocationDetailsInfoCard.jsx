import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "react-datepicker/dist/react-datepicker.css";
import GradeOutlinedIcon from "@mui/icons-material/GradeOutlined";
import "../../styles/LocationDetailsInfoCard.css";

const LocationDetailsInfoCard = () => {
  const location = useLocation();
  const { price = 0 } = location.state || {};

  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [totalGuests, setTotalGuests] = useState(1);
  const [numberOfNights, setNumberOfNights] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  // Calculate number of nights based on selected dates
  useEffect(() => {
    if (checkInDate && checkOutDate) {
      const parsedCheckIn = new Date(checkInDate);
      const parsedCheckOut = new Date(checkOutDate);
      const timeDiff = Math.abs(parsedCheckOut - parsedCheckIn);
      setNumberOfNights(Math.ceil(timeDiff / (1000 * 3600 * 24))); // Convert ms to days
    }
  }, [checkInDate, checkOutDate]);

  // Calculate total cost dynamically
  useEffect(() => {
    if (numberOfNights > 0) {
      const nightsCost = price * numberOfNights;
      const weeklyDiscount = numberOfNights >= 7 ? 25 : 0; // Example discount if stays are more than 7 nights
      const cleaningFee = 60;
      const serviceFee = 80;
      const occupancyTax = 29;

      const calculatedTotal =
        nightsCost - weeklyDiscount + cleaningFee + serviceFee + occupancyTax;
      setTotalCost(calculatedTotal);
    }
  }, [numberOfNights, price]);

  const customerId = useSelector((state) => state.user._id);

  const navigate = useNavigate();

  const handlePost = async (e) => {
    e.preventDefault();
  
    try {
      const reservationData = {
        customerId,
        checkInDate,
        checkOutDate,
        totalGuests,
      };

      const response = await fetch("http://localhost:3001/api/reservations/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reservationData),
      });
  
      if (response.ok) {
        navigate("/");
      }
    } catch (err) {
      console.log("Publish Reservation failed", err.message);
    }
  };
  

  return (
    <>
      <div className="modal_top">
        <div className="modal_top_price">
          <h2>${price} / night</h2>
        </div>
        <div className="modal_top_rating">
          <GradeOutlinedIcon className="modal_top_rating_icon" />
          <h4>5.0</h4>
          <h4> · 7 reviews</h4>
        </div>
      </div>

      <form onSubmit={handlePost}>
        <div className="modal_banner">
          <div className="modal_dates">
            <div className="modal_check_in_date_picker">
              <h4>Check-in Date</h4>
              <input
                type="date"
                value={checkInDate || ""}
                onChange={(e) => setCheckInDate(e.target.value)}
                required
              />
            </div>
            <div className="modal_check_out_date_picker">
              <h4>Check-out Date</h4>
              <input
                type="date"
                value={checkOutDate || ""}
                onChange={(e) => setCheckOutDate(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="modal_guest_picker">
            <h4>Number of Guests</h4>
            <input
              type="number"
              value={totalGuests}
              min="1"
              onChange={(e) => setTotalGuests(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="modal_reservation">
          <button className="submit_reservation" type="submit">
            <h5>Reserve</h5>
          </button>
          <p>You won’t be charged yet</p>
        </div>
      </form>

      <div className="modal_fees">
        <div>
          <p>
            ${price} x {numberOfNights} nights
          </p>
          <p>${price * numberOfNights}</p>
        </div>
        {numberOfNights >= 7 && (
          <div>
            <p>Weekly discount</p>
            <p>-$25</p>
          </div>
        )}
        <div>
          <p>Cleaning fee</p>
          <p>$60</p>
        </div>
        <div>
          <p>Service fee</p>
          <p>$80</p>
        </div>
        <div>
          <p>Occupancy taxes and fees</p>
          <p>$29</p>
        </div>
      </div>

      <div className="modal_fees_total">
        <h4>Total</h4>
        <h4>${totalCost}</h4>
      </div>
    </>
  );
};

export default LocationDetailsInfoCard;
