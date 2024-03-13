import { useState } from "react";
import Header from "../assets/contesttitle.png";
import s1 from "../assets/grade68th-1.png";
import s2 from "../assets/grade68th-2.png";
import s3 from "../assets/grade68th-3.png";
import s4 from "../assets/grade67th-1.png";
import s5 from "../assets/grade67th-2.png";
import s6 from "../assets/grade67th-3.png";
import s7 from "../assets/grade64th-1.png";
import s8 from "../assets/grade64th-2.png";
import s9 from "../assets/grade64th-3.png";

function Grade6() {
  const [videoSrc, setVideoSrc] = useState("");
  const handleClick = (videoSrc) => {
    setVideoSrc(videoSrc);
  };
  const images = [
    {
      src: s1,
      videoSrc:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/ThFIf1gj3tU?si=QyXbuz8f6KL0qYi2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    },
    {
      src: s2,
      videoSrc:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/J2_m9SkMiKo?si=qsvT5bWy5O3JEJQA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    },
    {
      src: s3,
      videoSrc:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/-NIV1J78kVk?si=4gyIj17aD_wSTDH0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    },
    {
      src: s4,
      videoSrc:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/ThFIf1gj3tU?si=QyXbuz8f6KL0qYi2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    },
    {
      src: s5,
      videoSrc:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/J2_m9SkMiKo?si=qsvT5bWy5O3JEJQA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    },
    {
      src: s6,
      videoSrc:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/-NIV1J78kVk?si=4gyIj17aD_wSTDH0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    },
    {
      src: s7,
      videoSrc:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/DOlfc0G2vsY?si=I2fnALkP7itDHkBb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    },
    {
      src: s8,
      videoSrc:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/AgUhhXZ_gf8?si=sfu5Q_aEaT4XG_xa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    },
    {
      src: s9,
      videoSrc:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/na7OoX2GIYM?si=rpLG4Hk6SB1PDh6g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    },
  ];
  return (
    <div className="Grade6">
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

export default Grade6;
