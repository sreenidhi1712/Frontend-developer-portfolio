import React, { useState } from 'react';

function Resume() {
   

  return (
    <div>
        <h2>PDF Viewer</h2>
      <iframe
        title="PDF Viewer"
        width="70%"
        height="1000px"
        src="/src/assets/SreeResume.pdf"
      ></iframe>
    </div>
  );
}

export default Resume;
