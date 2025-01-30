import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowForwardIos, ArrowBackIosNew } from "@mui/icons-material";
import "../../styles/ListingCard.css";
import UpdateListingModal from "../UpdateListingModal";

const ListingCard = ({
  listingId,
  listingPhotoPaths,
  listingName,
  location,
  type,
  price,
  startDate,
  endDate,
  totalPrice,
  booking,
  onDelete,
  onUpdate,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const navigate = useNavigate();

  const goToPrevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + listingPhotoPaths.length) % listingPhotoPaths.length
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % listingPhotoPaths.length);
  };

  return (
    <div className="listing-card">
      <div
        className="card-content"
        onClick={() => {
          navigate(`/properties/${listingId}`);
        }}
      >
        {/* Slider Section */}
        <div className="slider-container">
          <div
            className="slider"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {listingPhotoPaths?.map((photo, index) => (
              <div key={index} className="sliding">
                <img
                  src={`http://localhost:3001/${photo?.replace("public", "")}`}
                  alt={`photo ${index + 1}`}
                />
                <div
                  className="prev-button"
                  onClick={(e) => {
                    e.stopPropagation();
                    goToPrevSlide();
                  }}
                >
                  <ArrowBackIosNew sx={{ fontSize: "15px" }} />
                </div>
                <div
                  className="next-button"
                  onClick={(e) => {
                    e.stopPropagation();
                    goToNextSlide();
                  }}
                >
                  <ArrowForwardIos sx={{ fontSize: "15px" }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Info Section */}
        <div className="slider-info">
          <h3>{listingName}</h3>
          <p>{location}</p>

          {!booking ? (
            <>
              <p>{type}</p>
              <p>
                <span>${price}</span> per night
              </p>
            </>
          ) : (
            <>
              <p>
                {startDate} - {endDate}
              </p>
              <p>
                <span>${totalPrice}</span> total
              </p>
            </>
          )}
        </div>
      </div>

      <div className="action-buttons">
        <button
          className="update_btn"
          onClick={(e) => {
            e.stopPropagation();
            setShowUpdateModal(true);
          }}
        >
          Update
        </button>
        <button
          className="delete_btn"
          onClick={(e) => {
            e.stopPropagation();
            onDelete(listingId);
          }}
        >
          Delete
        </button>
      </div>
      {/* Update Modal */}
      {showUpdateModal && (
        <UpdateListingModal
          listingId={listingId}
          currentData={{
            listingName,
            location,
            type,
            price,
            listingPhotoPaths,
          }}
          onClose={() => setShowUpdateModal(false)}
          onUpdate={onUpdate}
        />
      )}
    </div>
  );
};

export default ListingCard;
