import React from "react";
import './App.scss';
import SnowImg from "./images/snow.svg";
import MoonImg from "./images/moon.svg";
import Tree1Img from "./images/tree1.svg";
import Tree2Img from "./images/tree2.svg";
import Tree3Img from "./images/tree3.svg";
import Paper1Img from "./images/paper1.svg";
import SantaImg from "./images/santa.svg";
import Paper2Img from "./images/paper2.svg";
import McImg from "./images/mc.svg";
import PlayImg from "./images/play.svg";
import ReplayImg from "./images/replay.svg";
import ChristmasAudio from "./audios/christmas-ringtone.mp3";

const audio = new Audio(ChristmasAudio);

function App() {
  const startAnimation = () => {
    const christmasCardEl = document.getElementsByClassName('christmas-card')[0];

    if (!christmasCardEl) return;

    christmasCardEl.className = "christmas-card start";

    setTimeout(() => {
      if (audio) {
        audio.currentTime = 0;
        audio.play();
      }

      christmasCardEl.classList.remove('start');
      christmasCardEl.classList.add('stage-1');
      setTimeout(() => {
        christmasCardEl.classList.add('stage-2');
        setTimeout(() => {
          christmasCardEl.classList.add('stage-3');
          setTimeout(() => {
            christmasCardEl.classList.add('stage-4');
            setTimeout(() => {
              christmasCardEl.classList.add('finish');
              audio.pause();
            }, 5500);
          }, 3000);
        }, 2000);
      }, 1000);
    }, 1000);
  };

  return (
    <div className="christmas-card">
      <img className="snow-img" src={SnowImg} alt="Snow" />
      <div className="christmas-card-animation-wrapper">
        <img className="moon-img" src={MoonImg} alt="Moon" />
        <img className="tree-1-img" src={Tree1Img} alt="Tree 1" />
        <img className="tree-2-img" src={Tree2Img} alt="Tree 2" />
        <img className="tree-3-img" src={Tree3Img} alt="Tree 3" />
        <img className="paper-1-img" src={Paper1Img} alt="Paper 1" />
        <img className="santa-img" src={SantaImg} alt="Santa" />
        <img className="paper-2-img" src={Paper2Img} alt="Paper 2" />
      </div>
      <img className="mc-img" src={McImg} alt="Merry Christmas" />
      <img onClick={() => startAnimation()} className="play-img" src={PlayImg} alt="Play" />
      <img onClick={() => startAnimation()} className="replay-img" src={ReplayImg} alt="Replay" />
    </div>
  );
}

export default App;
