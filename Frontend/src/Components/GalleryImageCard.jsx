import React, { useEffect, useState } from "react";

const GalleryImageCard = ({ Image, Title, Para }) => {
  const [cardElementsWidth, setCardElementsWidth] = useState(0);

  const calculateWidth = () => {
    const imageCard = document.querySelector(".Image_Card");
    if (imageCard) {
      const width = imageCard.offsetWidth;
      setCardElementsWidth(width);
      console.log("Width in pixels:", width);
    }
  };

  useEffect(() => {
    calculateWidth();
    window.addEventListener("resize", calculateWidth);
    return () => {
      window.removeEventListener("resize", calculateWidth);
    };
  }, []);

  return (
    <div className="Image_Card">
      <div
        className="Image_Container"
        style={{
          transition: "all 0.5s ease-in-out, width 0s",
          width: `${cardElementsWidth}px`,
        }}
      >
        <img src={Image} alt="GalleryImage" />
      </div>
      <div
        className="Image_Content"
        style={{
          transition: "all 0.8s ease-in-out, width 0s",
          width: `${cardElementsWidth - 30}px`,
        }}
      >
        <span className="Image_Title">{Title}</span>
        <p className="Image_Description">{Para}</p>
      </div>
    </div>
  );
};

export default GalleryImageCard;
