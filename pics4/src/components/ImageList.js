import React from "react";

export const ImageList = props => {
  const imageElements = props.images.map(el => {
    const { id, description, urls } = el;
    return <img key={id} src={urls.regular} alt={description} />;
  });
  return <div>{imageElements}</div>;
};
