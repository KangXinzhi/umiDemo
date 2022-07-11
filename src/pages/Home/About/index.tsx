import { useFullscreen } from 'ahooks';
import { useRef } from 'react';
import { Link, history } from 'umi';

export default function About() {
  const ref = useRef(null);
  const [isFullscreen, { enterFullscreen, exitFullscreen, toggleFullscreen }] =
    useFullscreen(ref);
  return (
    <div ref={ref} style={{ background: 'white' }}>
      <div style={{ marginBottom: 16 }}>
        {isFullscreen ? 'Fullscreen' : 'Not fullscreen'}
      </div>
      <div>
        <button type="button" onClick={enterFullscreen}>
          enterFullscreen
        </button>
        <button
          type="button"
          onClick={exitFullscreen}
          style={{ margin: '0 8px' }}
        >
          exitFullscreen
        </button>
        <button type="button" onClick={toggleFullscreen}>
          toggleFullscreen
        </button>
      </div>

      <h1>about</h1>
      <button
        onClick={() => {
          history.push('about');
        }}
      >
        Gotoabout222
      </button>
      <button
        onClick={() => {
          history.push('/home/report');
        }}
      >
        GotoReport
      </button>
      {/* <Link to="/about">Go to about</Link> */}
    </div>
  );
}
