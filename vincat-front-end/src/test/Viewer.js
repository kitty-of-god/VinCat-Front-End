//Dependencies
import React, {Component} from 'react';
import { Document,Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import test from "./test.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


class Viewer extends Component{
  state = {
  numPages: null,
  pageNumber: 1,
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }

  render(){
    const { pageNumber, numPages } = this.state;
    return(
      <div>
        <Document
          file={test}
          onLoadSuccess={this.onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <p>Page {pageNumber} of {numPages}</p>
      </div>
    );
  }
}

export default Viewer;
