import { useParams, useLocation } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TuneIcon from "@mui/icons-material/Tune";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LocationCard from "../components/cards/LocationCards";
import { allLocations } from "../data";
import "../styles/AllLocations.css";

const AllLocationsPage = () => {
  const { locationId = "all-locations" } = useParams();

  const location = useLocation();
  const { checkInDate, checkOutDate, adults, children } = location.state || {};

  // Filtering locations based on the locationId
  const filteredLocations =
    locationId === "all-locations"
      ? allLocations
      : allLocations.filter(
          (loc) => loc.location.toLowerCase() === locationId.toLowerCase()
        );

  // Debugging the filteredLocations array
  console.log("Filtered Locations:", filteredLocations);
  return (
    <div className="locations">
      <Navbar />
      <div className="locations_filter">
        <div className="locations_filter_price">
          <p>Price</p>
          <ExpandMoreIcon />
        </div>
        <div className="locations_filter_place">
          <p>Type of place</p>
          <ExpandMoreIcon />
        </div>
        <div className="locations_filter_options">
          <p>Free cancellation</p>
          <p>Wifi</p>
          <p>Kitchen</p>
          <p>Air conditioning</p>
          <p>Washer</p>
          <p>Iron</p>
          <p>Dedicated workspace</p>
          <p>Free parking</p>
          <p>Dryer</p>
        </div>
        <div className="locations_filter_filters">
          <TuneIcon />
          <p>Filters</p>
        </div>
      </div>
      <h1>{locationId}</h1>
      <div className="location_selected_options">
        <div className="location_selected_check_in">
          <p>Check In Date:</p>
          <p>
            {checkInDate
              ? new Date(checkInDate).toDateString()
              : "Not selected"}
          </p>
        </div>
        <span>|</span>
        <div className="location_selected_check_out">
          <p>Check Out Date:</p>
          <p>
            {checkOutDate
              ? new Date(checkOutDate).toDateString()
              : "Not selected"}
          </p>
        </div>
        <span>|</span>
        <div className="location_selected_travellers">
          <p>Adults: {adults}</p>
          <p>Children: {children}</p>
        </div>
      </div>
      <h4>
        {filteredLocations.length}+ stays in {locationId.replace("-", " ")}
      </h4>
      <div className="locations_cards">
        {filteredLocations.length > 0 ? (
          filteredLocations.map((loc, index) => (
            <LocationCard key={index} {...loc} />
          ))
        ) : (
          <p>No locations available for "{locationId.replace("-", " ")}"</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default AllLocationsPage;
