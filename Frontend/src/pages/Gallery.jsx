import React from "react";
import GalleryImageCard from "../Components/GalleryImageCard";

let Content = [
  {
    Image:
      "https://images.unsplash.com/photo-1524429656589-6633a470097c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fHx8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    Title: "Image Title",
    Para: "Hello this is the description about the image in the left of container",
  },
  {
    Image:
      "https://images.unsplash.com/photo-1524429656589-6633a470097c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fHx8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    Title: "Image Title",
    Para: "Hello this is the description about the image in the left of container",
  },
  {
    Image:
      "https://images.unsplash.com/photo-1524429656589-6633a470097c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fHx8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    Title: "Image Title",
    Para: "Hello this is the description about the image in the left of container",
  },
  {
    Image:
      "https://images.unsplash.com/photo-1524429656589-6633a470097c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fHx8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    Title: "Image Title",
    Para: "Hello this is the description about the image in the left of container",
  },
  {
    Image:
      "https://images.unsplash.com/photo-1524429656589-6633a470097c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fHx8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    Title: "Image Title",
    Para: "Hello this is the description about the image in the left of container",
  },
];
const Gallery = () => {
  return (
    <div className="Gallery">
      <div className="GalleryHeaderContainer">
        <div className="GalleryHeader">
          <span className="Header">Gallery</span>
          <p className="Description">Our Achievements</p>
        </div>
      </div>
      <div className="GalleryImageCollectionContainer">
        <div className="GalleryImageCollection">
          {Content.map((item) => {
            return <GalleryImageCard Image={item.Image} Title={item.Title} Para={item.Para} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
