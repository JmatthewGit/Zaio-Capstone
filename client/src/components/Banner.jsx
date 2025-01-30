import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/Banner.css";

const Banner = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [guestDropdown, setGuestDropdown] = useState(false);
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);

  const navigate = useNavigate();

  const handleSearch = () => {
    if (!checkInDate || !checkOutDate || adults + children === 0) {
      alert("Please select dates and specify the number of guests.");
      return;
    }
  
    navigate("/locations/all-locations", {
      state: {
        checkInDate: checkInDate.toISOString(),
        checkOutDate: checkOutDate.toISOString(),
        totalGuests: adults + children,
      },
    });
  };

  const handleLocationSelect = (location) => {
    navigate(`/locations/${location.replace(" ", "-").toLowerCase()}`, {
      state: { property: location, checkInDate, checkOutDate, adults, children },
    });
  };

  return (
    <div className="banner">
      <div className="banner_top">
        <div className="banner_search">
          <div className="hotel_text">
            <h4>Hotels</h4>
            <p>Select Hotel</p>
          </div>
          <div className="location_picker">
            <ExpandMoreIcon
              onClick={() => setShowDropdown(!showDropdown)}
              className="expandMoreIcon"
            />
            {showDropdown && (
              <div className="dropdown">
                {[
                  "All Locations",
                  "New York",
                  "Paris",
                  "Tokyo",
                  "Cape Town",
                  "Thailand",
                ].map((location, index) => (
                  <p
                    key={index}
                    onClick={() =>
                      location === "All Locations"
                        ? handleSearch()
                        : handleLocationSelect(location)
                    }
                  >
                    {location}
                  </p>
                ))}
              </div>
            )}
          </div>
          <span>|</span>
          <div className="check_in_date_picker">
            <h4>Check In</h4>
            <DatePicker
              selected={checkInDate}
              onChange={setCheckInDate}
              placeholderText="Add dates"
              className="date_picker"
            />
          </div>
          <span>|</span>
          <div className="check_out_date_picker">
            <h4>Check Out</h4>
            <DatePicker
              selected={checkOutDate}
              onChange={setCheckOutDate}
              placeholderText="Add dates"
              className="date_picker"
            />
          </div>
          <span>|</span>
          <div className="guest_picker">
            <h4 onClick={() => setGuestDropdown(!guestDropdown)}>Guests</h4>
            <p>{adults + children} Guests</p>
            {guestDropdown && (
              <div className="guest_dropdown">
                {[
                  {
                    label: "Adults",
                    value: adults,
                    setValue: setAdults,
                    min: 0,
                  },
                  {
                    label: "Children",
                    value: children,
                    setValue: setChildren,
                    min: 0,
                  },
                ].map(({ label, value, setValue, min }, index) => (
                  <div className="guest_option" key={index}>
                    <h5>{label}</h5>
                    <div className="guest_counter">
                      <button
                        onClick={() => setValue(Math.max(min, value - 1))}
                      >
                        -
                      </button>
                      <span>{value}</span>
                      <button onClick={() => setValue(value + 1)}>+</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="search_icon_div" onClick={handleSearch}>
            <SearchIcon />
          </div>
        </div>
      </div>
      <div className="banner_bottom">
        <div className="banner_i">
          <img src="/assets/bigCard.png" alt="banner" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
