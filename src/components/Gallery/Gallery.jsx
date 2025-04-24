import React from "react";
import "./Gallery.css";
import GalleryItem from "../GalleryItem/GalleryItem";

const items = [
  {
    id: 1,
    media: "/pins/pin1.jpeg",
    width: 1260,
    height: 1000,
  },
  {
    id: 2,
    media: "/pins/pin2.jpeg",
    width: 1260,
    height: 1400,
  },
  {
    id: 3,
    media: "/pins/pin3.jpeg",
    width: 1260,
    height: 1400,
  },
  {
    id: 4,
    media: "/pins/pin4.jpeg",
    width: 1260,
    height: 1000,
  },
  {
    id: 5,
    media: "/pins/pin5.jpeg",
    width: 1260,
    height: 1400,
  },
  {
    id: 6,
    media: "/pins/pin6.jpeg",
    width: 1260,
    height: 1000,
  },
  {
    id: 7,
    media: "/pins/pin7.jpeg",
    width: 1260,
    height: 1400,
  },
  {
    id: 8,
    media: "/pins/pin8.jpeg",
    width: 1260,
    height: 1400,
  },
];

const Gallery = () => {
  return (
    <div className="gallery">
      {items.map((item) => (
        <GalleryItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Gallery;
