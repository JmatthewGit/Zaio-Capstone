import { useEffect, useState } from "react";
import ReservationCard from "./cards/ReservationCard";
import { useDispatch, useSelector } from "react-redux";
import { setReservations } from "../redux/state";

const Reservations = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const reservations = useSelector((state) => state.reservations || []);

  const getFeedReservations = async () => {
    try {
      const response = await fetch(
        "http://localhost:3001/api/reservations/book",
        {
          method: "GET",
        }
      );

      if (!response.ok) {
        throw new Error(
          "Failed to fetch reservations. Please try again later."
        );
      }

      const data = await response.json();

      if (Array.isArray(data)) {
        dispatch(setReservations({ reservations: data }));
      } else {
        throw new Error(
          "Unexpected response format. Reservations data is missing."
        );
      }
      setLoading(false);
    } catch (err) {
      console.error("Fetch Reservations Failed:", err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    getFeedReservations();
  }, [getFeedReservations]);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="reservations">
          {reservations && reservations.length > 0 ? (
            reservations.map((reservation) => {
              const {
                _id,
                customerId,
                checkInDate,
                checkOutDate,
                totalGuests,
                booking = false,
              } = reservation;

              // Ensure customerId is properly handled
              const customerName = customerId?.firstName
                ? `${customerId.firstName} ${customerId.lastName}`
                : "Unknown Customer";

              return (
                <ReservationCard
                  key={_id}
                  reservationId={_id}
                  customerName={customerName}
                  checkInDate={checkInDate}
                  checkOutDate={checkOutDate}
                  totalGuests={totalGuests}
                  booking={booking}
                />
              );
            })
          ) : (
            <p>No reservations available</p>
          )}
        </div>
      )}
    </>
  );
};

export default Reservations;
