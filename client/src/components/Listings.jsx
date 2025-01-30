import { useEffect, useState } from "react";
import ListingCard from "../components/cards/ListingCard";
import Loader from "./Loader";
import { useDispatch, useSelector } from "react-redux";
import { setListings } from "../redux/state";

const Listings = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const listings = useSelector((state) => state.listings || []);

  const getFeedListings = async () => {
    try {
      const response = await fetch(
        "http://localhost:3001/api/listings/properties", // Ensure backend route matches
        {
          method: "GET",
        }
      );
  
      if (!response.ok) {
        throw new Error("Failed to fetch listings. Please try again later.");
      }
  
      const data = await response.json();
      console.log("Fetched Listings:", data);
  
      if (Array.isArray(data)) {
        dispatch(setListings({ listings: data }));
      } else {
        throw new Error("Unexpected response format. Listings data is missing.");
      }
      setLoading(false);
    } catch (err) {
      console.error("Fetch Listings Failed:", err.message);
      setLoading(false);
    }
  };
  

  const deleteListing = async (listingId) => {
    try {
      const response = await fetch(
        `http://localhost:3001/api/listings/${listingId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete listing");
      }

      // Remove the listing from the Redux state
      dispatch(
        setListings({
          listings: listings.filter((item) => item._id !== listingId),
        })
      );
      alert("Listing deleted successfully");
    } catch (err) {
      console.error("Delete Listing Failed:", err.message);
      alert("Failed to delete listing. Please try again later.");
    }
  };

  const updateListing = async (listingId, updatedData) => {
    try {
      const response = await fetch(
        `http://localhost:3001/api/listings/${listingId}`,
        {
          method: "PUT",
          body: updatedData,
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update listing");
      }

      const updatedListing = await response.json();

      dispatch(
        setListings({
          listings: listings.map((item) =>
            item._id === listingId ? updatedListing : item
          ),
        })
      );
      alert("Listing updated successfully");
    } catch (err) {
      console.error("Update Listing Failed:", err.message);
      alert("Failed to update listing. Please try again later.");
    }
  };

  useEffect(() => {
    getFeedListings();
  }, [getFeedListings]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="listings">
          {listings && listings.length > 0 ? (
            listings.map(
              ({
                _id,
                creator,
                listingPhotoPaths,
                listingName,
                location,
                type,
                price,
                booking = false,
              }) => (
                <ListingCard
                  key={_id}
                  listingId={_id}
                  creator={creator}
                  listingPhotoPaths={listingPhotoPaths}
                  listingName={listingName}
                  location={location}
                  type={type}
                  price={price}
                  booking={booking}
                  onDelete={deleteListing}
                  onUpdate={updateListing}
                />
              )
            )
          ) : (
            <p>No listings available</p>
          )}
        </div>
      )}
    </>
  );
};

export default Listings;
