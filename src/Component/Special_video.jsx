import React from "react";
import special from "../assets/footer_tope.png";

function Special_video() {
  const Video = [
    {
      src: "https://www.youtube.com/embed/7x3PPXJrfdY?si=4_RpwzxM02WY1PjM",
      title: "BELTEI Student Achieved Grade A 2018",
      description: "Please watch video",
    },
    {
      src: "https://www.youtube.com/embed/LuUS8xRzpd4?si=DKTNQ6xJL_0LtZD0",
      title: "BELTEI Student Achieved Grade A 2017",
      description: "Please watch video",
    },
    {
      src: "https://www.youtube.com/embed/D1kBJgm0deM?si=h-8y2jd1KECjRqcz",
      title: "BELTEI Student Achieved Grade A 2016",
      description: "BELTEI Student Achieved Grade A 2018o",
    },
    {
      src: "https://www.youtube.com/embed/Gtj87I5670Y?si=GcRzydmoovBthZBw",
      title: "BELTEI Student Achieved Grade A 2015",
      description: "Please watch video",
    },
    {
      src: "https://www.youtube.com/embed/W2K_pt28MGE?si=29InmpFYaTMV5mrT",
      title: "BELTEI Student Achieved Grade A 2015",
      description: "Please watch video",
    },
    {
      src: "https://www.youtube.com/embed/NAJvbtOJkm4?si=kl98X--RX2nWMPWd",
      title: "BELTEI Student Achieved Grade A 2015",
      description: "Please watch video",
    },
    {
      src: "https://www.youtube.com/embed/AnaNSUawo78?si=SKuxobmfGoDPcvDV",
      title: "BELTEI Student Achieved Grade A 2015",
      description: "Please watch video",
    },
    {
      src: "https://www.youtube.com/embed/3tyQZYiHpnA?si=ebdn4yyoFJxUDjBF",
      title: "BELTEI Student Achieved Grade A 2015",
      description: "Please watch video",
    },
    {
      src: "https://www.youtube.com/embed/laBe1d53vA0?si=Ajr2ixhSwDU5dkCS",
      title: "BELTEI Student Achieved Grade A 2015",
      description: "Please watch video",
    },
    {
      src: "https://www.youtube.com/embed/BdsLrDotljE?si=5CxRYCwvKobfee5U",
      title: "BELTEI Student Achieved Grade A 2015",
      description: "Please watch video",
    },
    {
      src: "https://www.youtube.com/embed/6FAbzGXrV38?si=Ft-AanwOip58jmfC",
      title: "BELTEI Student Achieved Grade A 2015",
      description: "Please watch video",
    },
    {
      src: "https://www.youtube.com/embed/clf7nmWGjms?si=65xhyaUqvbVKL0Sq",
      title: "BELTEI Student Achieved Grade A 2015",
      description: "Please watch video",
    },
  ];
  return (
    <div className="container">
      <div className="row">
        <img src={special} alt="" />
        {Video.map((Video, index) => (
          <div key={index} className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
            <div className="video p-3">
              <iframe
                width="100%"
                height="170"
                src={Video.src}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
              <h6>{Video.title}</h6>
              <p className="text-danger">{Video.description}</p>
            </div>
          </div>
        ))}
        {/* Repeat this column for each video */}
      </div>
    </div>
  );
}

export default Special_video;
