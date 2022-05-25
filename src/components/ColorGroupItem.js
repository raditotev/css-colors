const ColorGroupItem = ({ group, active, selectHandler }) => {
  const style = active ? { borderColor: group } : {};
  return (
    <span
      className={`${active ? 'active' : ''}`}
      style={style}
      onClick={() => selectHandler(group)}
    >
      {group}
    </span>
  );
};

export default ColorGroupItem;
