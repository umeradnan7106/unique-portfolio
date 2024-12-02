import copy from 'clipboard-copy';
import { useState } from 'react';


const CopyToClipboardButton = ({ text }:any) => {
    const [isCopied, setIsCopied] = useState(false);
  
    const handleCopyClick = async () => {
      try {
        await copy(text);
        setIsCopied(true);
      } catch (error) {
        console.error('Failed to copy text to clipboard', error);
      }
    } 

    
  return (
    <div>
      <button onClick={handleCopyClick}>
        {isCopied ? 'Copied!' : 'Copy'}
      </button>
    </div>
  );
};

export default CopyToClipboardButton;