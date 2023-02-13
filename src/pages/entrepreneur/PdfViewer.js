import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

function PdfViewer({ title, file }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  return (
    <div className="flex flex-col items-center">
      <p className="font-bold text-4xl text-theme text-center font-montserrat mb-8 mt-12">
        {title}
      </p>
      <div className="">
        <Document
          className="drop-shadow-2xl"
          file={file}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          {/* {Array.from(new Array(numPages), (el, index) => (
              <Page key={`page_${index + 1}`} pageNumber={index + 1} />
            ))} */}
          <Page pageNumber={pageNumber}></Page>
        </Document>
        <div className="flex justify-center ">
          <button
            className="px-10 py-4 font-semibold text-text disabled:text-text/30 disabled:font-normal"
            type="button"
            disabled={pageNumber <= 1}
            onClick={previousPage}
          >
            Previous
          </button>
          <p className="px-10 py-4 text-text ">
            Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
          </p>
          <button
            className="px-10 py-4 font-semibold text-text disabled:text-text/30 disabled:font-normal"
            type="button"
            disabled={pageNumber >= numPages}
            onClick={nextPage}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default PdfViewer;
