import React from "react";

export const VideoItem = ({ video, onVideoClick }) => {
  const {
    id: { videoId },
    snippet: { description, title, thumbnails }
  } = video;

  const onClickHandler = () => {
    onVideoClick(video);
  };

  return (
    <div className="item" onClick={onClickHandler}>
      <img className="ui image" alt={description} src={thumbnails.medium.url} />
      <div className="content">
        <h4
          className="header"
          href={`https://www.youtube.com/watch?v=${videoId}`}
        >
          {title}
        </h4>
        <div className="description">{description}</div>
      </div>
    </div>
  );
};
