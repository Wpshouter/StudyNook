import React, { useEffect } from 'react';
import { useState } from "react";
const AmenitiesForm = ({setAmenities, defaultamenities=[]}) => {
     //const [amenities, setAmenities] = useState([]);
  console.log(defaultamenities);
    console.log("___________________________");
        const [selectedAmenities, setSelectedAmenities] = useState(defaultamenities);

  const options = [
    "Whiteboard",
    "Projector",
    "Wi-Fi",
    "Power Outlets",
    "Quiet Zone",
    "Air Conditioning",
  ];
      // Sync to parent
    useEffect(() => {
        setAmenities(selectedAmenities);
    }, [selectedAmenities, setAmenities]);
  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setAmenities((prev) => [...prev, value]);
       setSelectedAmenities((prev) => [
                ...prev,
                value
            ]);
    } else {
      setAmenities((prev) => prev.filter((item) => item !== value));
        setSelectedAmenities((prev) =>
                prev.filter((item) => item !== value)
            );
    }


  };

  return (
    <>
      <h2 className="">Amenities</h2>
      <div className="grid grid-cols-2 gap-2">
        {options.map((option) => (
          <label key={option} className="flex items-center gap-2">
           <input
              type="checkbox"
                checked={selectedAmenities.includes(option)}
              value={option}
              onChange={handleCheckboxChange}
              className="checkbox checkbox-primary"
            />
            {option}
          </label>
        ))}
      </div>
      </>
  );
};

export default AmenitiesForm;