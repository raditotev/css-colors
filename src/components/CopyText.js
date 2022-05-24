import CopyIcon from './icons/CopyIcon';
import FileTickIcon from './icons/FileTickIcon';

const CopyText = ({ color, copied }) => {
  const lightText = color === 'Black' ? '' : 'light';

  return (
    <div className={`copy-text ${lightText}`}>
      {copied ? <FileTickIcon /> : <CopyIcon />}
    </div>
  );
};

export default CopyText;
