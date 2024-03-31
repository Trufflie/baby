import React, { useState } from "react";
import Image183 from "../assets/images/IMG_0183.jpg";
import Image191 from "../assets/images/IMG_0191.jpg";
import Image206 from "../assets/images/IMG_0206.jpg";
import Image207 from "../assets/images/IMG_0207.jpg";
import Image210 from "../assets/images/IMG_0210.jpg";
import Image215 from "../assets/images/IMG_0215.jpg";
import Image217 from "../assets/images/IMG_0217.jpg";
import Image220 from "../assets/images/IMG_0220.jpg";
import Image226 from "../assets/images/IMG_0226.jpg";
import Image229 from "../assets/images/IMG_0229.jpg";

const Pictures = () => {
  const images = [
    { src: Image183, alt: "thumb-image-1" },
    { src: Image191, alt: "thumb-image-2" },
    { src: Image206, alt: "thumb-image-3" },
    { src: Image207, alt: "thumb-image-4" },
    { src: Image210, alt: "thumb-image-5" },
    { src: Image215, alt: "thumb-image-6" },
    { src: Image217, alt: "thumb-image-7" },
    { src: Image220, alt: "thumb-image-8" },
    { src: Image226, alt: "thumb-image-9" },
    { src: Image229, alt: "thumb-image-10" },
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (image, index) => {
    setSelectedImage(image);
    setModalOpen(true);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const prevImage = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <div className="mt-[80px] flex flex-col items-center text-center justify-center">
      <div className="flex flex-wrap row">
        <div className=" container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 ">
          {images.map((image, index) => (
            <div
              key={index}
              className="w-[150px] p-1 md:p-2 lg:p-4"
              onClick={() => openModal(image, index)}
            >
              <img
                className="object-cover w-full h-full cursor-pointer"
                src={image.src}
                alt={image.alt}
              />
            </div>
          ))}
        </div>
      </div>
      <div
        id="myModal"
        className={`modal ${modalOpen ? "" : "hidden"}`}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            closeModal();
          }
        }}
      >
        <div className="modal-content relative">
          <span
            className="close"
            onClick={closeModal}
          >
            &times;
          </span>
          <button
            className="prev-button"
            onClick={prevImage}
          >
Previous
          </button>
          <img
            className="object-cover w-full h-full cursor-pointer"
            src={selectedImage.src}
            alt={selectedImage.alt}
          />
          <button
            className="next-button"
            onClick={nextImage}
          >
            Next
          </button>
          <div className="thumbnails">
            {images.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={image.alt}
                onClick={() => openModal(image, index)}
                className={index === currentIndex ? "selected" : ""}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pictures;