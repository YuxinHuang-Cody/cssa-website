import React from "react";
interface VideoProp {
  videoUrl: string;
  title: string;
}
const EventVideo:React.FC<VideoProp> = ({videoUrl,title}) => {
  return (
    <div className="tl-event-details-video">
      <iframe
        src={videoUrl}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>

      <h2 className="tl-event-details-title">
        {title}
      </h2>
    </div>
  );
};

export default EventVideo;
