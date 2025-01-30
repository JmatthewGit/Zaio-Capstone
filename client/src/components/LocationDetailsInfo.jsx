import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import YardOutlinedIcon from "@mui/icons-material/YardOutlined";
import WifiOutlinedIcon from "@mui/icons-material/WifiOutlined";
import LocalLaundryServiceOutlinedIcon from "@mui/icons-material/LocalLaundryServiceOutlined";
import AirOutlinedIcon from "@mui/icons-material/AirOutlined";
import KitchenOutlinedIcon from "@mui/icons-material/KitchenOutlined";
import MicrowaveOutlinedIcon from "@mui/icons-material/MicrowaveOutlined";
import PetsOutlinedIcon from "@mui/icons-material/PetsOutlined";
import DryCleaningOutlinedIcon from "@mui/icons-material/DryCleaningOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import PedalBikeOutlinedIcon from "@mui/icons-material/PedalBikeOutlined";
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import ScheduleOutlinedIcon from '@mui/icons-material/ScheduleOutlined';
import DoorFrontOutlinedIcon from '@mui/icons-material/DoorFrontOutlined';
import FireplaceOutlinedIcon from '@mui/icons-material/FireplaceOutlined';
import SanitizerOutlinedIcon from '@mui/icons-material/SanitizerOutlined';
import FavoriteIcon from "@mui/icons-material/Favorite"; 
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import GppMaybeOutlinedIcon from '@mui/icons-material/GppMaybeOutlined';
// import Avatar from "../../assets/images/Avatar.png"
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import "../styles/LocationDetailsInfo.css";

const LocationDetailsInfo = () => {
  const location = useLocation();
  const { title, checkInDate, checkOutDate } = location.state || {};

  const [selectedDates, setSelectedDates] = useState({
    checkIn: checkInDate ? new Date(checkInDate) : null,
    checkOut: checkOutDate ? new Date(checkOutDate) : null,
  });
  const [nights, setNights] = useState(0);

  useEffect(() => {
    if (selectedDates.checkIn && selectedDates.checkOut) {
      const diffTime = Math.abs(
        selectedDates.checkOut - selectedDates.checkIn
      );
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setNights(diffDays);
    } else {
      setNights(0);
    }
  }, [selectedDates]);

  const handleDateChange = (range) => {
    setSelectedDates({
      checkIn: range[0],
      checkOut: range[1],
    });
  };

  return (
    <>
      <div className="amenities">
        <h1>What this place offers</h1>
        <div className="amenities_container">
          <div className="amenities_left">
            <div>
              <YardOutlinedIcon />
              <p>Garden view</p>
            </div>
            <div>
              <WifiOutlinedIcon />
              <p>WiFi</p>
            </div>
            <div>
              <LocalLaundryServiceOutlinedIcon />
              <p>Free washer - in building</p>
            </div>
            <div>
              <AirOutlinedIcon />
              <p>Central air conditioning</p>
            </div>
            <div>
              <KitchenOutlinedIcon />
              <p>Refrigerator</p>
            </div>
          </div>
          <div className="amenities_right">
            <div>
              <MicrowaveOutlinedIcon />
              <p>Kitchen</p>
            </div>
            <div>
              <PetsOutlinedIcon />
              <p>Pets allowed</p>
            </div>
            <div>
              <DryCleaningOutlinedIcon />
              <p>Dryer</p>
            </div>
            <div>
              <VideocamOutlinedIcon />
              <p>Security cameras on property</p>
            </div>
            <div>
              <PedalBikeOutlinedIcon />
              <p>Bicycles</p>
            </div>
          </div>
        </div>
        <button>
          <p>Show all amenities</p>
        </button>
      </div>

      <div className="calendar">
        <h1>
          {nights} {nights === 1 ? "night" : "nights"} in {title || "this place"}
        </h1>
        <Calendar
          selectRange
          onChange={handleDateChange}
          value={[
            selectedDates.checkIn,
            selectedDates.checkOut,
          ]}
        />
        <div className="calendar_bottom">
            <CalendarMonthOutlinedIcon />
            <p>Clear dates</p>
        </div>
      </div>

      <div className="reviews">
        <div className="reviews_title">
            <FavoriteIcon />
            <h1>5.0 . 7 reviews</h1>
        </div>
        <div className="reviews_ratings">
            <div className="reviews_ratings_left">
                <div>
                   <p>Cleanliness</p>
                   <span className="line"></span>
                   <p>4.9</p>
                </div>
                <div>
                   <p>Communication</p>
                   <span className="line"></span>
                   <p>4.7</p>
                </div>
                <div>
                   <p>Check-in</p>
                   <span className="line"></span>
                   <p>5.0</p>
                </div>
            </div>
            <div className="reviews_ratings_right">
                <div>
                   <p>Accuracy</p>
                   <span className="line"></span>
                   <p>4.9</p>
                </div>
                <div>
                   <p>Location</p>
                   <span className="line"></span>
                   <p>4.9</p>
                </div>
                <div>
                   <p>Value</p>
                   <span className="line"></span>
                   <p>5.0</p>
                </div>
            </div>
        </div>
        <div className="reviews_comments">
            <div className="reviews_comments_left">
                <div className="reviews_comments_profile">
                   {/* <img
                    src={Avatar}
                    className="reviews_comments_avatar"
                    alt="avatar"
                   /> */}
                   <div>
                    <h4>Jose</h4>
                    <p>December 2021</p>
                   </div>
                </div>
                <p>Host was very attentive.</p>
                <div className="reviews_comments_profile">
                   <img
                    src="https://s3-alpha-sig.figma.com/img/93b1/5e45/2dd533a04a8a2bf00efe3627697a4498?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JbNP5frpShCs5dPxibfhDbJABixsqeIgio4o6PZfORY4YGb-qdrbQ9ROT-yfNGNV9mnyBijqRt1XyGCgF61NWwjJ23hcC6IXwfs4f~-eDdJiznCsMP6oZ9IOC7qbJssSBswvPemA30dFb6ZWaIonmSvkR-g6qyMfUpP4u~0m0e3sDDpVPGOO34flU6JDWIecexEz6C5fSeh0vNiELpO8zCk-WTlxGQDgAWHK-9G4VRCWj6Z-Y0NatNwiJUSus2quI~2CJxsnJt1mg~6q3S5cDazkksMkL9OiUUn0OaLIg5QJYPNZZMmi0VZLmEmjt0em78lDYx-sH0KMG5nT1T8slg__"
                    className="reviews_comments_avatar"
                    alt="avatar"
                   />
                   <div>
                       <h4>Vladko</h4>
                       <p>November 2020</p>
                   </div>
                </div>
                <p>This is amazing place. It has everything one needs for a monthly business stay. 
                   Very clean and organized place. Amazing hospitality affordable price.
                </p>
            </div>
            <div className="reviews_comments_right">
                <div className="reviews_comments_profile">
                   <img
                     src="https://s3-alpha-sig.figma.com/img/caf6/c362/48b47c5f72ba82a802cae20dde9a9359?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GNgb-cQk8DKDaUcH78hrOhEne6h0Nc2fO8pHX1vXjltizATYIdueB8KKT89roCGBxX1N79WKFH8bimiXKERiBwZi6WWMldCGxKXI8BbgKaD70IyvYx21tqhfTf5aKqWymW81~62M414Cor8DfsGv4M9xydZAQmZkWsVPiqr0NdnkvawKjiqUx9cTZ-7ugltpXX4WTGzPc9NheHnBoxcfq5kFT~BE79cEhjU~SQ9bJ6uSYML6oVJPxXK8UXnMlyh2HKeaHb-pLSMre9lbn4lYrSr9dycFhayCl3nVEZj~F0kLVHKWF5xY2Tb1vL0u3A2JQDPs7qwCOfrXht0-GbcHxw__"
                     className="reviews_comments_avatar"
                     alt="avatar"
                   />
                   <div>
                       <h4>Luke</h4>
                       <p>December 2021</p>
                   </div>
                </div>
                <p>Nice place to stay!</p>
                <div className="reviews_comments_profile">
                   <img
                     src="https://s3-alpha-sig.figma.com/img/b8ab/10f6/b548cba7ebac64a05e3c885d00902b03?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q6m9Ek80vtl8aCajxo5t74ypb5QS49fTailFSDqfeZrBs5foEoM0j3FJ~AV~ppez9MSK7EakVDuqLsH-JkUugeDU0S0aud2glY1Y9B0vh8~6pLLNp194II0M~yiy8mFJ4fVTeHmL3QVVitiK2Iw0ens4TK8E-PfGtcaPK4ytd~G~f~a4zoSRvRGeqkBatRn1lVfxA-aGa5FV~Zp6cLxeQlzbAyD7C8~W1kn013te1xqSDGlrtwx0BE3S1F8usEHrFJoqYfJuPfep3n~8vyn2YDaCat2takpU97GhWuBCNlc7tmWjSZn4eSy6ak5VAp6-pWE7VuwVsviZ6FHNtiyOpA__"
                     className="reviews_comments_avatar"
                     alt="avatar"
                   />
                   <div>
                       <h4>Josh</h4>
                       <p>November 2021</p>
                   </div>
                </div>
                <p>Well designed and fun space, neighborhood has lots of energy and amenities.</p>
            </div>
        </div>
        <button>
            <p>Show all reviews</p>
        </button>
      </div>

      <div className="host">
        <div className="host_profile">
            <img
            src="https://s3-alpha-sig.figma.com/img/a615/f544/bf4d532059a9b5a4735809663411f54b?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ABgPtpK6q~oLhpMkfZXHVcK2n5BOMmd4D4hSNnvXgKubfeJ7TCekz3iu5YtufUniBSpT-vrIvusOUNzRYkmEb1yBgDWLd3O5T5fHKX6Pp9ypYHkVrMt~owJbaEPzvJXB2mpf4LqZ7Gci2-jU-UkOSgXtt2u4t6GJj4UudiKX8zyLd1uU4N-VTA1b0DyUFNlj~jwY49HF6rchQRBrPHjL3QZKzGopNd9KQPCJF4vo9Jfcg06b2odPvroZ8gIJRUQRBC~dqhefwqXvins4qiLT-LrYKYm8PPpyVEFxISNtkUKfdnMSWH~FzFeb7YOfTlfYAvaOYkN5tSFtocGMn~M7Ug__"
            className="reviews_comments_avatar"
            alt="avatar"
            />
            <div>
                <h2>Hosted by Ghazal</h2>
                <p>Joined May 2021</p>
            </div>
        </div>
        <div className="host_ratings">
            <div>
                <GradeOutlinedIcon />
                <p>12 Reviews</p>
            </div>
            <div>
                <VerifiedUserOutlinedIcon />
                <p>Identity verified</p>
            </div>
            <div>
                <WorkspacePremiumOutlinedIcon />
                <p>Superhost</p>
            </div>
        </div>
        <div className="host_info">
            <h3>Ghazal is a Superhost</h3>
            <p>Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.</p>
            <p>Response rate: 100%</p>
            <p>Response time: within an hour</p>
        </div>
        <button>
            <p>Contact Host</p>
        </button>
        <div className="host_protect">
            <GppMaybeOutlinedIcon className="host_protect_icon"/>
            <p>To protect your payment, never transfer money or communicate outside of the Airbnb website or app.</p>
        </div>
      </div>
      
      <div className="extra_info">
        <h1>Things to know</h1>
        <div className="extra_info_sections">
        <div className="extra_info_left">
            <h3>House rules</h3>
            <div>
               <ScheduleOutlinedIcon />
               <p>Check-in: After 4:00 PM</p>
            </div>
            <div>
               <ScheduleOutlinedIcon />
               <p>Checkout:  10:00 AM</p>
            </div>
            <div>
               <DoorFrontOutlinedIcon />
               <p>Self check-in with lockbox</p>
            </div>
            <div>
               <MicrowaveOutlinedIcon />
               <p>Not suitable for infants under 2 years</p>
            </div>
            <div>
               <FireplaceOutlinedIcon />
               <p>No smoking</p>
            </div>
        </div>
        <div className="extra_info_mid">
            <h3>Health & safety</h3>
            <div>
               <SanitizerOutlinedIcon />
               <p>Airbnb's social-distancing and other COVID-19-related guidelines apply</p>
            </div>
            <div>
               <AirOutlinedIcon />
               <p>Carbon monoxide alarm</p>
            </div>
            <div>
               <LocalLaundryServiceOutlinedIcon />
               <p>Smoke alarm</p>
            </div>
            <div>
               <VideocamOutlinedIcon />
               <p>Security Deposit - if you damage the home, you may be charged up to $566</p>
            </div>
            <div>
               <h4>Show more</h4>
               <KeyboardArrowRightOutlinedIcon className="more_icon"/>
            </div>
        </div>
        <div className="extra_info_right">
            <h3>Cancellation policy</h3>
            <p>Free cancellation before Feb 14</p>
            <div> 
                <h4>Show more</h4>
                <KeyboardArrowRightOutlinedIcon className="more_icon"/>
            </div>
        </div>
        </div>
        
      </div>

      <div className="explore">
        <h1>Explore other options in all locations</h1>
        <div className="explore_top">
            <div>
                <p>Paris</p>
                <p>Johannesburg</p>
                <p>Koh Samui</p>
                <p>Istanbul</p>
            </div>
            <div>
                <p>Durban</p>
                <p>Abu Dhabi</p>
                <p>Zanzibar</p>
                <p>Mexico City</p>
            </div>
            <div>
                <p>Lyon</p>
                <p>Vancouver</p>
                <p>Vienna</p>
                <p>Sydney</p>
            </div>
            <div>
                <p>Barcelona</p>
                <p>Maldives</p>
                <p>Seychelles</p>
                <p>Singapore</p>
            </div>
        </div>
        <h3>Unique stays on Airbnb</h3>
        <div className="explore_bottom">
            <div>
                <p>Beach House Rentals</p>
                <p>Cabin Rentals</p>
            </div>
            <div>
                <p>Camper Rentals</p>
                <p>Tiny House Rentals</p>
            </div>
            <div>
                <p>Glamping Rentals</p>
                <p>Lakehouse Rentals</p>
            </div>
            <div>
                <p>Treehouse Rentals</p>
                <p>Mountain Chalet Rentals</p>
            </div>
        </div>
        <div className="explore_more">
            <h4>Airbnb</h4>
            <KeyboardArrowRightOutlinedIcon className="more_icon"/>
            <h4>Europe</h4>
            <KeyboardArrowRightOutlinedIcon className="more_icon"/>
            <h4>France</h4>
            <KeyboardArrowRightOutlinedIcon className="more_icon"/>
            <h4>Bordeaux</h4>
            <KeyboardArrowRightOutlinedIcon className="more_icon"/>
        </div>
      </div>
    </>
  );
};

export default LocationDetailsInfo;
