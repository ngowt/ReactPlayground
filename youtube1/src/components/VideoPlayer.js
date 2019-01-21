import React from "react";

export const VideoPlayer = ({ video }) => {
  if (!video) {
    return <div />;
  }

  const {
    id: { videoId },
    snippet: { description, title }
  } = video;

  return (
    <div class="ten wide column">
      <div className="ui embed">
        <iframe
          titles="video player"
          src={`http://www.youtube.com/embed/${videoId}`}
        />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};
