import React from "react";
import "../styles/ViewListing.css";
import Navbar from "../components/Navbar";
import Listings from "../components/Listings";
import Footer from "../components/Footer";

const ViewListing = () => {
  return (
    <div>
      <Navbar />
      <div className="view_categories">
        <a href="/view-reservation">
          <button>
            <p>View Reservations</p>
          </button>
        </a>
        <a href="/create-listing">
          <button>
            <p>Create Listing</p>
          </button>
        </a>
      </div>
      <div className="view-listing">
        <h1>View Listings</h1>
      </div>
      <Listings />
      <Footer />
    </div>
  );
};

export default ViewListing;
