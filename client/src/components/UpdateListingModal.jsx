import { useState } from "react";

const UpdateListingModal = ({ listingId, currentData, onClose, onUpdate }) => {
  const [formData, setFormData] = useState({
    ...currentData,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = () => {
    const formDataObj = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key !== "listingPhotoPaths") {
        formDataObj.append(key, formData[key]);
      }
    });
  
    onUpdate(listingId, formDataObj);
    onClose();
  };
  

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Update Listing</h2>
        <label>
          Name:
          <input
            type="text"
            name="listingName"
            value={formData.listingName}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Location:
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
          />
        </label>
        {/* Add more fields as needed */}
        <button onClick={handleUpdate}>Update</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default UpdateListingModal;

