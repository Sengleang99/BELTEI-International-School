import React, { useState } from "react";
import Header from "../assets/contesttitle.png";
import s1 from "../assets/grade127th-1.png";
import s2 from "../assets/grade127th-2.png";
import s3 from "../assets/grade127th-3.png";
import s4 from "../assets/grade124th-1.png";
import s5 from "../assets/grade124th-2.png";
import s6 from "../assets/grade124th-3.png";
import s7 from "../assets/grade123rd-1.png";
import s8 from "../assets/grade123rd-2.png";
import s9 from "../assets/grade123rd-3.png";
import s10 from "../assets/grade122nd-1.png";
import s11 from "../assets/grade122nd-2.png";
import s12 from "../assets/grade122nd-3.png";

function Grade12() {
  const [videoSrc, setVideoSrc] = useState("");
  const handleClick = (videoSrc) => {
    setVideoSrc(videoSrc);
  };
  const images = [
    {
      src: s1,
      videoSrc:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/PMj3yQAnTEs?si=GLKfEOWbwsuaDtA6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    },
    {
      src: s2,
      videoSrc:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/BYhbYiRo7cg?si=l3DYi7KJpwU7vcyg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    },
    {
      src: s3,
      videoSrc:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/LFhCXanheu0?si=1GwxRrGBpDMn8dTA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    },
    {
      src: s4,
      videoSrc:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/clf7nmWGjms?si=H-z2-eSzW1hZzr4c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    },
    {
      src: s5,
      videoSrc:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/-QO1F9n7Afg?si=ZImhg-05SIgk9BOj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    },
    {
      src: s6,
      videoSrc:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/clf7nmWGjms?si=lyD67HTDRPn7v3Ip" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    },
    {
      src: s7,
      videoSrc:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/U-oLaivszg4?si=-wkkkneRnJm3mhmJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    },
    {
      src: s8,
      videoSrc:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/lf2FQZN9LZ8?si=pNoeLdNRTiQDrWdu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    },
    {
      src: s9,
      videoSrc:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/5o5EQzefWfs?si=vMQHfzqWUuQVqQZb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    },
    {
      src: s10,
      videoSrc:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/P1OF7iTbgqw?si=AxY1cOrVxdJGENYp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    },
    {
      src: s11,
      videoSrc:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/P1OF7iTbgqw?si=AxY1cOrVxdJGENYp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    },
    {
      src: s12,
      videoSrc:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/clf7nmWGjms?si=lyD67HTDRPn7v3Ip" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    },
  ];
  return (
    <div className="Grade12">
      <img src={Header} className="w-100" alt="" />
      <div className="video">
        <div className="col-12">
          {videoSrc && (
            <div
              className=" ratio ratio-16x9 mt-4"
              dangerouslySetInnerHTML={{ __html: videoSrc }}
            ></div>
          )}
          <h6 className="text-center">The winer of grade 12 in year batch</h6>
          <div className="row">
            {images.map((image, index) => (
              <div key={index} className="col-lg-4 col-md-6 col-sm-12">
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

export default Grade12;
