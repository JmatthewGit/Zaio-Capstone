import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import IosShareIcon from "@mui/icons-material/IosShare";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HouseOutlinedIcon from "@mui/icons-material/HouseOutlined";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import DoorFrontOutlinedIcon from "@mui/icons-material/DoorFrontOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import OutlinedFlagOutlinedIcon from "@mui/icons-material/OutlinedFlagOutlined";
import "../styles/LocationDetails.css";
import LocationDetailsInfo from "../components/LocationDetailsInfo";
import LocationDetailsInfoCard from "../components/cards/LocationDetailsInfoCard";
import Footer from "../components/Footer";

const LocationDetailsPage = () => {
  const location = useLocation();
  const {
    src,
    title,
    text,
    info,
    rating = 0,
    review = 0,
  } = location.state || {};
  const images = Array(4).fill(src);

  return (
    <div className="location_details">
      <Navbar />
      <div className="location_details_title">
        <h1>{title || "No Title Available"}</h1>
        <div className="location_details_title_info">
          <div className="location_details_title_info_left">
            <p>
              {rating} ⭐ . {review} reviews . Superhost
            </p>
          </div>
          <div className="location_details_title_info_right">
            <IosShareIcon />
            <p>Share</p>
            <FavoriteBorderIcon />
            <p>Save</p>
          </div>
        </div>
      </div>
      <div className="location_details_container">
        <div className="location_details_image">
          <img
            src={src}
            alt={title || "No Image"}
            className="location_details_image_large"
          />
        </div>
        <div className="image_grid">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Gallery ${index + 1}`}
              className="location_details_image_grid"
            />
          ))}
        </div>
      </div>
      <div className="reservation_section">
        <div className="reservation_section_info">
          <div className="reservation_section_info_top">
            <div className="reservation_text">
              <h3>{text}</h3>
              <p>{info}</p>
            </div>
            <AccountCircleIcon className="reservation_account_circle" />
          </div>
          <div className="reservation_section_info_mid">
            {[
              {
                icon: HouseOutlinedIcon,
                title: "Entire home",
                desc: "You'll have the apartment to yourself",
              },
              {
                icon: AutoAwesomeOutlinedIcon,
                title: "Enhanced Clean",
                desc: "This Host committed to Airbnb's 5-step enhanced cleaning process. Show more",
              },
              {
                icon: DoorFrontOutlinedIcon,
                title: "Self check-in",
                desc: "Check yourself in with the keypad.",
              },
              {
                icon: CalendarTodayOutlinedIcon,
                title: "Free cancellation before Feb 14",
              },
            ].map(({ icon: Icon, title, desc }, index) => (
              <div className="reservation_info_item" key={index}>
                <Icon className="reservation_icon" />
                <div className="reservation_text">
                  <h4>{title}</h4>
                  {desc && <p>{desc}</p>}
                </div>
              </div>
            ))}
          </div>
          <div className="reservation_section_info_bottom">
            <p>
              Come and stay in this superb duplex T2, in the heart of the
              historic center of Bordeaux. Spacious and bright, in a real
              Bordeaux building in exposed stone, you will enjoy all the charms
              of the city thanks to its ideal location.
            </p>
            <MoreHorizOutlinedIcon className="reservation_section_info_bottom_icon" />
          </div>
        </div>
        <div className="reservation_section_modal">
          <LocationDetailsInfoCard />
        </div>
      </div>
      <div className="under_reservation_section">
        <div className="under_reservation_section_left">
          <h5>Show more</h5>
          <KeyboardArrowRightOutlinedIcon />
        </div>
        <div className="under_reservation_section_right">
          <OutlinedFlagOutlinedIcon />
          <p>Report this listing</p>
        </div>
      </div>
      <div className="sleeping_area_display">
        <div className="sleeping_area_display_info">
          <h1>Where you'll sleep</h1>
          <img src={src} alt={title} />
          <h4>Bedroom</h4>
          <p>1 queen bed</p>
        </div>
      </div>
      <LocationDetailsInfo />
      <Footer />
    </div>
  );
};

export default LocationDetailsPage;
