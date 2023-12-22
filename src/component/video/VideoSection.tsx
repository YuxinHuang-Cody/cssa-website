"use client";
import FsLightbox from "fslightbox-react";
import React, { useState } from "react";

type VideoData = {
  imgSrc: string;
  category: string;
  title: string;
  videoUrl: string;
  id: number;
};

const videoData: VideoData[] = [
  {
    id: 1,
    imgSrc: "assets/images/tl-6/video-1.jpg",
    category: "Education",
    title: "The Mindful Scholar Nurturing Knowledge.",
    videoUrl: "https://www.youtube.com/watch?v=OWsvEOeZ0DE",
  },
  {
    id: 2,
    imgSrc: "assets/images/tl-6/video-2.jpg",
    category: "Education",
    title: "Exploring Educational Insights.",
    videoUrl: "https://www.youtube.com/watch?v=WAaBDrI1eBo",
  },
  {
    id: 3,
    imgSrc: "assets/images/tl-6/video-3.jpg",
    category: "Education",
    title: "Innovative Learning Solutions.",
    videoUrl: "https://www.youtube.com/watch?v=w-KK0_O0ONw",
  },
  {
    id: 4,
    imgSrc: "assets/images/tl-6/video-4.jpg",
    category: "Education",
    title: "Revolutionizing Education Technology.",
    videoUrl: "https://www.youtube.com/watch?v=fwYJ60yzg1c",
  },
];

const VideoSection: React.FC = () => {
  const [lightboxController, setLightboxController] = useState({
		toggler: false,
		slide: 1
	});
  
    // Handle method to toggle a specific video by id
    const openLightboxOnSlide = (number: number) => {
      setLightboxController({
        toggler: !lightboxController.toggler,
        slide: number
      });
    };
  
    return (
      <section className="tl-6-videos">
        <div className="tl-6-videos-banner pb-220 pt-220">
        <div className="container">
          <div className="tl-6-videos-banner-txt">
            <h6 className="tl-6-videos-banner-date tl-6-info-pill">
              April 18, 2023
            </h6>
            <h2 className="tl-6-videos-banner-title tl-6-title-hover">
              <a href="#">
                The Learning Vault Unlocking Treasures of Education.
              </a>
            </h2>
            <ul className="tl-6-latest-article-infos">
              <li>By Dianne Ameter</li>
              <li>March 24, 2023</li>
            </ul>
          </div>
        </div>
      </div>
        <div className="row gx-5 gy-4 tl-6-videos-row pt-75 pb-75">
          {videoData.map((video) => (
            <div key={video.id} className="col-lg-3 col-6 col-xxs-12">
              <div className="tl-6-news-slide tl-6-video">
                <div className="tl-6-video-img">
                  <img src={video.imgSrc} alt="" />
                  <a
                    role="button"
                    onClick={() => openLightboxOnSlide(video.id)}
                  >
                    <i className="fa-solid fa-play"></i>
                  </a>
                </div>
  
                <div className="tl-6-video-txt tl-6-news-slide-txt">
                  <span className="tl-6-info-pill">{video.category}</span>
                  <h5 className="tl-6-news-slide-title">
                    <a href="#">{video.title}</a>
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
          <FsLightbox
          toggler={lightboxController.toggler}
            sources={[
              "https://www.youtube.com/watch?v=OWsvEOeZ0DE",
              "https://www.youtube.com/watch?v=WAaBDrI1eBo",
              "https://www.youtube.com/watch?v=w-KK0_O0ONw",
              "https://www.youtube.com/watch?v=fwYJ60yzg1c",
            ]}
            slide={lightboxController.slide}
          />
          
      </section>
    );
  };
  
  export default VideoSection;
  

