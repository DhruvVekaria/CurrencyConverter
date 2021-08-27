import React, { useState } from "react";
import {Document, Page, pdfjs} from 'react-pdf';
import aboutdoc from './AboutAPP.pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

//import aboutApp from './AboutAPP.pdf';
//"D:/Hedado/currency_exchange/src/components/AboutAPP.pdf"
function Docs() {
    const [numPages, setNumPages] = useState(null);
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
      }
        return (
          <div align = 'center'>
        <Document
          file={aboutdoc}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          {Array.from(new Array(numPages), (el, index) => (
        <Page key={`page_${index + 1}`} pageNumber={index + 1} />
      ))}
        </Document>
       
      </div>
    );
}

export default Docs;
