import React, { useEffect, useState } from "react";

//_ images
import stars from "../image/stars.png";
import moon from "../image/moon.png";
import mtBehind from "../image/mountains_behind.png";
import mtFront from "../image/mountains_front.png";

function Section() {
  //   const stars = document.getElementById("stars");
  //   const moon = document.getElementById("moon");
  //   const mtBehind = document.getElementById("mtBehind");
  //   const mtFront = document.getElementById("mtFront");

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, [offset]);

  return (
    <section className="section">
      <img src={stars} alt="stars" id="stars" style={{ left: offset * 0.33 }} />
      <img src={moon} alt="moon" id="moon" style={{ top: offset * 0.75 }} />
      <img
        src={mtBehind}
        alt="mtBehind"
        id="mtBehind"
        style={{ top: offset * 0.25 }}
      />
      <h2 id="text" style={{ left: offset * 2 }}>
        MOON LIGHT
      </h2>
      <a href="#" className="btn">
        Explore
      </a>
      <img src={mtFront} alt="mtFront" id="mtFront" id="mtFront" />
    </section>
  );
}

export default Section;
