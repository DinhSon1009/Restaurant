import React, { useRef, useState } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import styled from "styled-components";
import { meal } from "../../constants";

import "./Intro.css";

const Intro = () => {
  const vidRef = useRef();
  const [playVideo, setplayVideo] = useState(false);
  const handleVideo = (e) => {
    setplayVideo((prevPlayVideo) => !prevPlayVideo);
    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };

  const OverLay = styled.div`
    position: absolute;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 1px solid var(--color-golden);
    cursor: pointer;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const OverLayVideo = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.65);
  `;

  return (
    <div style={{ position: "relative", height: "100vh" }}>
      <video
        src={meal}
        type="video/mp4"
        ref={vidRef}
        loop
        controls={false}
        muted
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
      <OverLayVideo>
        <OverLay onClick={handleVideo}>
          {playVideo ? (
            <BsPauseFill fontSize={30} color="#fff" />
          ) : (
            <BsFillPlayFill fontSize={30} color="#fff" />
          )}
        </OverLay>
      </OverLayVideo>
    </div>
  );
};

export default Intro;
