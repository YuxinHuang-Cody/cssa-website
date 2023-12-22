import React from 'react'
interface VideoProp {
  url: string;
  title: string;
}
const CourseVideo:React.FC<VideoProp> = ({url,title}) => {
  return (
    <div className="tl-event-details-video">
        <iframe
            src={url}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
        ></iframe>

        <h2 className="tl-event-details-title">
            {title}
        </h2>
    </div>
  )
}

export default CourseVideo