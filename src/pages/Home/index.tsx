import Header from '@/component/Header';
import { useFullscreen } from 'ahooks';
import { history } from 'umi';

export default function IndexPage() {
  const root = document.getElementById('root');
  const [, { enterFullscreen, exitFullscreen }] = useFullscreen(root);

  return (
    <div style={{ background: 'white' }}>
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
      </div>

      <h1>Home</h1>
      <button
        onClick={() => {
          history.push('/home/about');
        }}
      >
        Gotoabout
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
