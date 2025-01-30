import "../styles/CreateListing.css";
import Navbar from "../components/Navbar";
import { types } from "../data";
import { RemoveCircleOutline, AddCircleOutline } from "@mui/icons-material";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { IoIosImages } from "react-icons/io";
import React, { useState } from "react";
import { BiTrash } from "react-icons/bi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const CreateListing = () => {
  const [type, setType] = useState("");

  // Location
  const [formLocation, setFormLocation] = useState({
    location: "",
  });

  const handleChangeLocation = (e) => {
    const { name, value } = e.target;
    setFormLocation({
      ...formLocation,
      [name]: value,
    });
  };

  // Basic Counts
  const [roomCount, setRoomCount] = useState(1);
  const [bathCount, setBathCount] = useState(1);

  // Upload, drag & drop, remove photos
  const [photos, setPhotos] = useState([]);

  const handleUploadPhotos = (e) => {
    const newPhotos = e.target.files;
    setPhotos((prevPhotos) => [...prevPhotos, ...newPhotos]);
  };

  const handleDragPhoto = (result) => {
    if (!result.destination) return;
    const items = Array.from(photos);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setPhotos(items);
  };

  const handleRemovePhoto = (indexToRemove) => {
    setPhotos((prevPhotos) =>
      prevPhotos.filter((_, index) => index !== indexToRemove)
    );
  };

  // Description, Listing Name & Price
  const [formDescription, setFormDescription] = useState({
    listingName: "",
    description: "",
    price: 0,
  });

  const handleChangeDescription = (e) => {
    const { name, value } = e.target;
    setFormDescription({
      ...formDescription,
      [name]: value,
    });
  };

  const creatorId = useSelector((state) => state.user._id);

  const navigate = useNavigate();

  const handlePost = async (e) => {
    e.preventDefault();
  
    try {
      const listingForm = new FormData();
      listingForm.append("creator", creatorId);
      listingForm.append("type", type);
      listingForm.append("location", formLocation.location);
      listingForm.append("bathCount", bathCount);
      listingForm.append("roomCount", roomCount);
      listingForm.append("listingName", formDescription.listingName);
      listingForm.append("description", formDescription.description);
      listingForm.append("price", formDescription.price);
  
      photos.forEach((photo) => {
        listingForm.append("listingPhotos", photo);
      });
  
      const response = await fetch(
        "http://localhost:3001/api/listings/create", 
        {
          method: "POST",
          body: listingForm,
        }
      );
  
      if (response.ok) {
        navigate("/");
      }
    } catch (err) {
      console.log("Publish Listing failed", err.message);
    }
  };
  

  return (
    <div>
      <Navbar />
      <div className="view_categories">
        <a href="/view-listing">
          <button>
            <p>View Listings</p>
          </button>
        </a>
      </div>
      <div className="create-listing">
        <h1>Create Listing</h1>
        <form onSubmit={handlePost}>
          <div className="create-listing_step1">
            <div className="create-listing-step1-left">
              <p>Listing Name</p>
              <input
                type="text"
                name="listingName"
                value={formDescription.listingName}
                onChange={handleChangeDescription}
                required
              />
            </div>
            <div className="create-listing-step1_right">
              <div className="basics">
                <div className="basic">
                  <p>Rooms</p>
                  <div className="basic_count">
                    <RemoveCircleOutline
                      onClick={() => {
                        roomCount > 1 && setRoomCount(roomCount - 1);
                      }}
                      sx={{
                        fontSize: "20px",
                        cursor: "pointer",
                        color: "grey",
                      }}
                    />
                    <p>{roomCount}</p>
                    <AddCircleOutline
                      onClick={() => {
                        setRoomCount(roomCount + 1);
                      }}
                      sx={{
                        fontSize: "20px",
                        cursor: "pointer",
                        color: "grey",
                      }}
                    />
                  </div>
                </div>
                <div className="basic">
                  <p>Bath</p>
                  <div className="basic_count">
                    <RemoveCircleOutline
                      onClick={() => {
                        bathCount > 1 && setBathCount(bathCount - 1);
                      }}
                      sx={{
                        fontSize: "20px",
                        cursor: "pointer",
                        color: "grey",
                      }}
                    />
                    <p>{bathCount}</p>
                    <AddCircleOutline
                      onClick={() => {
                        setBathCount(bathCount + 1);
                      }}
                      sx={{
                        fontSize: "20px",
                        cursor: "pointer",
                        color: "grey",
                      }}
                    />
                  </div>
                </div>
              </div>

              <div>
                <p>Type</p>
                <select
                  name="Type"
                  value={type}
                  onChange={(e) => setType(e.target.value)} // Update state on change
                  required
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  {types.map((item, index) => (
                    <option key={index} value={item.name}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="create-listing_step2">
            <div className="create-listing-step2-left">
              <p>Price</p>
              <span>$</span>
              <input
                type="number"
                placeholder="100"
                name="price"
                value={formDescription.price}
                onChange={handleChangeDescription}
                className="price"
                required
              />
            </div>
            <div className="create-listing-step2-right">
              <p>Location</p>
              <input
                type="text"
                placeholder=""
                name="location"
                value={formLocation.location}
                onChange={handleChangeLocation}
                required
              />
            </div>
          </div>

          <div className="create-listing_step3">
            <div className="create-listing-step3-left">
              <p>Description</p>
              <textarea
                type="text"
                name="description"
                value={formDescription.description}
                onChange={handleChangeDescription}
                required
              />
            </div>
          </div>

          <div className="create-listing_step4">
            <h3>Add some photos of your place</h3>
            <DragDropContext onDragEnd={handleDragPhoto}>
              <Droppable droppableId="photos" direction="horizontal">
                {(provided) => (
                  <div
                    className="photos"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {photos.length < 1 && (
                      <>
                        <input
                          id="image"
                          type="file"
                          style={{ display: "none" }}
                          accept="image/*"
                          onChange={handleUploadPhotos}
                          multiple
                        />
                        <label htmlFor="image" className="alone">
                          <div className="icon">
                            <IoIosImages />
                          </div>
                          <p>Upload from your device</p>
                        </label>
                      </>
                    )}

                    {photos.length >= 1 && (
                      <>
                        {photos.map((photo, index) => {
                          return (
                            <Draggable
                              key={index}
                              draggableId={index.toString()}
                              index={index}
                            >
                              {(provided) => (
                                <div
                                  className="photo"
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                >
                                  <img
                                    src={URL.createObjectURL(photo)}
                                    alt="place"
                                  />
                                  <button
                                    type="button"
                                    onClick={() => handleRemovePhoto(index)}
                                  >
                                    <BiTrash />
                                  </button>
                                </div>
                              )}
                            </Draggable>
                          );
                        })}
                        <input
                          id="image"
                          type="file"
                          style={{ display: "none" }}
                          accept="image/*"
                          onChange={handleUploadPhotos}
                          multiple
                        />
                        <label htmlFor="image" className="together">
                          <div className="icon">
                            <IoIosImages />
                          </div>
                          <p>Upload from your device</p>
                        </label>
                      </>
                    )}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </div>
          <div className="create-listing_step5">
            <div className="create-listing-step5-left">
              <button className="submit_btn" type="submit">
                Create
              </button>
            </div>
            <div className="create-listing-step5-right">
              <button type="button">Cancel</button>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default CreateListing;
