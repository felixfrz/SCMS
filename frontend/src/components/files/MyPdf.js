import React from 'react';
import { useParams } from 'react-router-dom';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';


const MyPdf = () => {

  const { path } = useParams();

  return (
    <div>
      <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.3.122/build/pdf.worker.min.js`}>
        <Viewer fileUrl={`/uploads/${path}`} />
      </Worker>
    </div>
  )
};

export default MyPdf;
