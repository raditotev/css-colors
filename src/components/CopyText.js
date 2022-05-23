import CopyIcon from './CopyIcon';
import FileTickIcon from './FileTickIcon';

const CopyText = ({ color, copied }) => {
  const lightText = color === 'Black' ? '' : 'light';

  return (
    <div className={`copy-text ${lightText}`}>
      {copied ? <FileTickIcon /> : <CopyIcon />}
    </div>
  );
};

export default CopyText;
