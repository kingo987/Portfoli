import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      title: "Ugam Solutions",
      position:"Associate Software Engineer",
      img:"./assets/ugam.jpg",
      desc:"Working with Dynamic Team in data warehouse technologies hence responsible for dealing with data."
    },

    {
      id: "2",
      title: "Virtusa Technologies",
      position:"Software Engineer",
      img:"./assets/virtusa.png",
      desc:"Working with banking domain client, responsible for creating and maintaining banks project."

    },
    
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  {/* <div className="imgContainer">
                  </div> */}
                  <h2>{d.title}</h2>
                  <p>{d.position}</p>
                  <p>{d.desc}</p>
                </div>
              </div>
              <div className="right">
              <img
              src={d.img}
              alt=""
            />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
