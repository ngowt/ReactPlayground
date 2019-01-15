import React from "react";

export const ImageList = props => {
  const imageElements = props.images.map(el => {
    const { id, description, urls } = el;
    return <img key={id} alt={description} src={urls.regular} />;
  });
  return <div>{imageElements}</div>;
};
