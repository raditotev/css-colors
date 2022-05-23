import { useState } from 'react';

import { COLORS, darkColors } from './assets/colors';
import CopyText from './components/CopyText';

function App() {
  const [copied, setCopied] = useState(false);

  const copyHandler = (color) => {
    navigator.clipboard.writeText(color);
    setCopied(true);
  };

  return COLORS.map((color) => {
    const style = {
      backgroundColor: color,
      color: darkColors.includes(color) ? 'WhiteSmoke' : 'Black',
    };
    return (
      <div
        key={color}
        className="colorbox"
        style={style}
        onClick={() => copyHandler(color)}
        onMouseLeave={() => setCopied(false)}
      >
        <CopyText color={style.color} copied={copied} />
        <h3>{color}</h3>
      </div>
    );
  });
}

export default App;
