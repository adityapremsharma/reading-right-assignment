import React from "react";
import Image from "./Image";

export default function ImageDisplay({
  images,
  allImagesCount,
  name,
  onClick,
  showMore,
}) {
  const displayImages = () => {
    return (
      <div className="image-display">
        <h3>
          {name ? name.charAt(0).toUpperCase() + name.slice(1) : "Random"}
        </h3>
        <p>{allImagesCount} images has been found</p>
        <div className="image-container">
          {images.map((image) => (
            <Image
              key={image.id}
              src={image.urls.small}
              alt={image.description}
            />
          ))}
        </div>

        {showMore ? (
          <button className="btn-primary" onClick={onClick}>
            Load more
          </button>
        ) : (
          <p className="show-more-text">
            That's what we have! Search more to expplore.
          </p>
        )}
      </div>
    );
  };

  const displayGuide = () => {
    return (
      <p className="display-guide">
        Search anything in order to display images.
      </p>
    );
  };

  const displayNotFound = () => {
    return (
      <p className="display-guide">
        Sorry there are no results for {name}. Try something else.
      </p>
    );
  };
  return (
    <>
      {images.length !== 0
        ? displayImages()
        : images.length === 0 && name === null
        ? displayGuide()
        : displayNotFound()}
    </>
  );
}
