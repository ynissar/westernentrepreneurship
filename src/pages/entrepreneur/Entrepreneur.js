import React, { useState } from "react";
import Subheader from "../../components/Subheader";
import { Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import PdfViewer from "./PdfViewer";

function Entrepreneur() {
  return (
    <div>
      <Subheader
        subtitle="Learn from successful entrepreneurs"
        title="The Entrepreneur"
      ></Subheader>
      <PdfViewer
        title="The Entrepreneur 5: The Building Entrepreneur"
        file="issue5.pdf"
      ></PdfViewer>
      <PdfViewer
        title="The Entrepreneur 4: The Exploring Entrepreneur"
        file="issue4.pdf"
      ></PdfViewer>
      <PdfViewer
        title="The Entrepreneur 3: The Adventurous Entrepreneur"
        file="issue3.pdf"
      ></PdfViewer>
      <PdfViewer
        title="The Entrepreneur 2: The Versatile Entrepreneur"
        file="issue2.pdf"
      ></PdfViewer>
      <PdfViewer
        title="The Entrepreneur 1: The Accidental Entrepreneur"
        file="issue1.pdf"
      ></PdfViewer>
    </div>
  );
}

export default Entrepreneur;
