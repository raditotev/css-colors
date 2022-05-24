import { useState } from 'react';

import { darkColors } from '../assets/colors';
import CopyText from './CopyText';

const ColorBox = ({ color }) => {
  const [copied, setCopied] = useState(false);

  const style = {
    backgroundColor: color,
    color: darkColors.includes(color) ? 'WhiteSmoke' : 'Black',
  };

  const copyHandler = (color) => {
    navigator.clipboard.writeText(color.toLowerCase());
    setCopied(true);
  };

  return (
    <div
      className="color-box"
      style={style}
      onClick={() => copyHandler(color)}
      onMouseLeave={() => setCopied(false)}
    >
      <CopyText color={style.color} copied={copied} />
      <h3>{color}</h3>
    </div>
  );
};

export default ColorBox;
