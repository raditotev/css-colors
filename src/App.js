import { useState } from 'react';

import { getColors, getColorGroups } from './lib/helpers';
import ColorBox from './components/ColorBox';
import ColorGroupItem from './components/ColorGroupItem';

function App() {
  const [selectedColor, setSelectedColor] = useState('all');
  const colors = getColors(selectedColor);

  const selectHandler = (group) => {
    setSelectedColor((state) => (state === group ? 'all' : group));
  };

  return (
    <>
      <div className="color-groups">
        <h3>Color categories</h3>
        {getColorGroups.map((group) => (
          <ColorGroupItem
            key={group}
            group={group}
            active={group === selectedColor}
            selectHandler={selectHandler}
          />
        ))}
      </div>
      <div className="list-colors">
        {colors.map((color) => (
          <ColorBox key={color} color={color} />
        ))}
      </div>
    </>
  );
}

export default App;
