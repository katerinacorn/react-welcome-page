import { useState, useRef } from "react";
import { FaPlay, FaPause, FaForward, FaBackward } from "react-icons/fa";
import "./player.css";

type Song = {
  author: string;
  album: string;
  name: string;
  avatarUrl: string;
  explicitContent: boolean;
  lyrics?: string;
  url: string;
};

interface Props {
  songs: Song[];
}

const PlayerComponent = ({ songs }: Props) => {
  const [position, setPosition] = useState(0);
  const [play, setPlay] = useState(false);
  const [showLyrics, setShowLyrics] = useState(false);
  const song: Song = songs[position];
  const audio = useRef<HTMLAudioElement>(new Audio(song.url));

  const handlePositionChange = (step: number) => {
    const nextStep = position + step;
    setPosition(nextStep);
    setShowLyrics(false);
    audio.current.src = songs[nextStep].url;

    if (play) {
      audio.current.play();
    }
  };

  const handlePlayPause = () => {
    setPlay(!play);

    if (!play) {
      audio.current.play();
    } else {
      audio.current.pause();
    }
  };

  const playList = songs.map((item, index) => (
    <li key={index} className={item.name === song.name ? "active" : ""}>
      {item.name} - {item.author}
    </li>
  ));

  return (
    <div className="player__container">
      <div className="player__img">
        <img alt="Some text" src={song.avatarUrl} />
      </div>
      <div className="player__info">
        <div className="player__name">
          {song.name} {song.explicitContent && <span>(E)</span>}
        </div>
        <div className="player__description">
          {song.album} - {song.author}
        </div>
        <div className="player__controls">
          <button
            className="player__icon"
            disabled={position === 0}
            onClick={() => handlePositionChange(-1)}
          >
            <FaBackward />
          </button>
          <button className="player__icon" onClick={() => handlePlayPause()}>
            {play ? <FaPause /> : <FaPlay />}
          </button>
          <button
            className="player__icon"
            disabled={position === songs.length - 1}
            onClick={() => handlePositionChange(1)}
          >
            <FaForward />
          </button>
        </div>
        <button
          className="player__show-lyrics"
          onClick={() => setShowLyrics(!showLyrics)}
        >
          Show Lyrics
        </button>
      </div>
      {showLyrics && <div className="player__lyrics">{song.lyrics}</div>}
      <div className="player__playlist">
        <ul className="player__playlist-items">{playList}</ul>
      </div>
    </div>
  );
};

export default PlayerComponent;