import { COLORS } from './assets/colors';
import ColorBox from './components/ColorBox';

function App() {
  return COLORS.map((color) => <ColorBox key={color} color={color} />);
}

export default App;
