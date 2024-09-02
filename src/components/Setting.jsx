import { useState } from 'react';
import {
  FaItunesNote,
  FaVolumeDown,
  FaCaretLeft,
  FaCaretRight,
  FaForward,
} from 'react-icons/fa';
import './Setting.css';

function Setting() {
  const [muteMusic, setMuteMusic] = useState(false);
  const [music, setMusic] = useState(50);

  const [muteVolume, setMuteVolume] = useState(false);
  const [volume, setVolume] = useState(50);

  const [speed, setSpeed] = useState(0);

  const speedOptions = [1, 2, 4];

  const handleMusicChange = (e) => {
    setMuteMusic(false);
    setMusic(e.target.value);
  };

  const handleVolumeChange = (e) => {
    setMuteVolume(false);
    setVolume(e.target.value);
  };

  const handleSpeedIncrease = () => {
    setSpeed((speed + 1) % speedOptions.length);
  };

  const handleSpeedDecrease = () => {
    setSpeed((speed - 1 + speedOptions.length) % speedOptions.length);
  };

  return (
    <div className="setting-list">
      <div className="setting">
        <FaItunesNote
          className="setting-icon hover-cursor"
          onClick={() => setMuteMusic(!muteMusic)}
        />
        <input
          type="range"
          min="0"
          max="100"
          value={muteMusic ? 0 : music}
          onChange={handleMusicChange}
          className="setting-slider"
        />
        <span>{muteMusic ? 0 : music}</span>
      </div>
      <hr></hr>
      <div className="setting">
        <FaVolumeDown
          className="setting-icon hover-cursor"
          onClick={() => setMuteVolume(!muteVolume)}
        />
        <input
          type="range"
          min="0"
          max="100"
          value={muteVolume ? 0 : volume}
          onChange={handleVolumeChange}
          className="setting-slider"
        />
        <span>{muteVolume ? 0 : volume}</span>
      </div>
      <hr></hr>
      <div className="setting">
        <FaForward className="setting-icon" />
        <span className="setting-carousel">
          <FaCaretLeft className="hover-cursor" onClick={handleSpeedDecrease} />
          {speedOptions[speed]}x
          <FaCaretRight
            className="hover-cursor"
            onClick={handleSpeedIncrease}
          />
        </span>
      </div>
      <div id="coming-soon">Coming soon.</div>
    </div>
  );
}

export default Setting;
