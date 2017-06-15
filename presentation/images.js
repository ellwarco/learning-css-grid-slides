import preloader from 'spectacle/lib/utils/preloader';

const images = {
  colouredSucculents: require('../assets/andrew-phillips-22549.jpg'),
  winkervsbecks: require('../assets/winkervsbecks.jpg'),
  cactus: require('../assets/annie-spratt-79272.jpg'),
  inspector: require('../assets/grid-inspector.png'),
  inspector2: require('../assets/grid-inspector2.png'),
};

preloader(images);

export default images;
