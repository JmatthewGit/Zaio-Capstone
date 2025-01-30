import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from "@mui/icons-material/Favorite"; 
import StarBorderIcon from '@mui/icons-material/StarBorder';
import "../../styles/LocationCards.css";

const LocationCard = ({ src, text, title, info, rating, review, price }) => {

    const [isFavorited, setIsFavorited] = useState(false);

    const toggleFavorite = () => {
        setIsFavorited((prev) => !prev);
    };

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/location-details/${title}`, {
            state: { src, title, text, info, rating, review, price },
        });
    };

    return (
        <div className="location_card" >
            <div className="location_card_image" onClick={handleClick}>
                {/* Render the src prop as an image */}
                <img src={src} alt={title} />
            </div>
            <div className="location_card_info">
                <div className="location_card_info_top">
                    <div className="location_card_info_top_left">
                       <h5>{text}</h5>
                       <h2>{title}</h2>
                    </div>
                    <div
                        className="location_card_info_top_right"
                        onClick={toggleFavorite} // Toggle on click
                    >
                        {isFavorited ? (
                            <FavoriteIcon style={{ color: "#ff385c" }} />
                        ) : (
                            <FavoriteBorderIcon style={{ color: "black" }} />
                        )}
                    </div>
                </div>
                <div className="location_card_info_mid">
                    <p>{info}</p>
                </div>
                <div className="location_card_info_bottom">
                    <div className="location_card_info_bottom_left">
                       <p>{rating}</p>
                       <StarBorderIcon className="star_icon" />
                       <p>{review} reviews</p>
                    </div>
                    <div className="location_card_info_bottom_right">
                    <p>${price}/night</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LocationCard;