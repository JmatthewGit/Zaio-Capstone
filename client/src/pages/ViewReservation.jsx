import React from "react";
import "../styles/ViewReservation.css";
import Navbar from "../components/Navbar";
import Reservations from "../components/Reservations"; // Ensure correct import path
import Footer from "../components/Footer";

const ViewReservation = () => {
  return (
    <div>
      <Navbar />
      <div className="view_categories">
        <a href="/view-listing">
          <button>
            <p>View Listing</p>
          </button>
        </a>
        <a href="/create-listing">
          <button>
            <p>Create Listing</p>
          </button>
        </a>
      </div>
      <div className="view-reservation">
        <h1>View Reservation</h1>
        <Reservations />
      </div>
      <Footer />
    </div>
  );
};

export default ViewReservation;
