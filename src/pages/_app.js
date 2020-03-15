import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/mapbox-gl/dist/mapbox-gl.css';
import '../../node_modules/semantic-ui-css/semantic.min.css';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  try {
    require('../../node_modules/bootstrap/dist/js/bootstrap.min.js');
  } catch(e) {}
  return <Component {...pageProps} />
}