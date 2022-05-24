import { COLORS } from './assets/colors';
import ColorBox from './components/ColorBox';

function App() {
  return COLORS.map((color) => <ColorBox color={color} />);
}

export default App;
