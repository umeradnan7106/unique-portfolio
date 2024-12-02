import React from "react";


const DownloadImageButton = () => {

  const handleDownload = () => {

    const link = document.createElement('a');
    link.href = '/image/resume_page-0001.jpg'; // Correct path to your file
    link.download = 'example-image.jpg'; // Name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
  };

  return (
    <button onClick={handleDownload}>
      Download CV
    </button>
  );
};

export default DownloadImageButton;