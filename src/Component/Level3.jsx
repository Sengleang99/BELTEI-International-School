import React, { useState } from "react";
import Header from "../assets/contesttitle.png";
import s1 from "../assets/level310th-1.png";
import s2 from "../assets/level310th-2.png";
import s3 from "../assets/level310th-3.png";
import s4 from "../assets/level38th-1.png";
import s5 from "../assets/level38th-2.png";
import s6 from "../assets/level38th-3.png";

function Level3() {
  const [videoSrc, setVideoSrc] = useState("");

  // Function to handle image click and set the video source
  const handleClick = (videoSrc) => {
    setVideoSrc(videoSrc);
  };

  // Array of objects containing image source and corresponding video source
  const images = [
    {
      src: s1,
      videoSrc:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/0b3VyPwl8gM?si=1YVVHZHfLWYauXY-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    },
    {
      src: s2,
      videoSrc:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/xauik16PT8w?si=Rdwq8IzXKsdQnUOn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    },
    {
      src: s3,
      videoSrc:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/xRuU6e7gqV4?si=lzOcRLk7G9nK1GPn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    },
    {
      src: s4,
      videoSrc:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/0b3VyPwl8gM?si=1YVVHZHfLWYauXY-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    },
    {
      src: s5,
      videoSrc:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/xauik16PT8w?si=Rdwq8IzXKsdQnUOn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    },
    {
      src: s6,
      videoSrc:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/xRuU6e7gqV4?si=lzOcRLk7G9nK1GPn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    },
  ];

  return (
    <div className="Level3">
      <img src={Header} className="w-100" alt="" />
      <div className="video">
        <div className="col-12">
          {/* Display video if videoSrc is not empty */}
          {videoSrc && (
            <div
              className="ratio ratio-16x9 mt-4"
              dangerouslySetInnerHTML={{ __html: videoSrc }}
            ></div>
          )}
          <p className=" mt-4">The Winners of Grade 12 in 2022(Batch 7)</p>
          <div className="row">
            {/* Map over images array to display images */}
            {images.map((image, index) => (
              <div key={index} className="col-lg-4 col-md-6 col-sm-12 border">
                <img
                  src={image.src}
                  className="w-100"
                  alt=""
                  onClick={() => handleClick(image.videoSrc)}
                  style={{ cursor: "pointer" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Level3;
