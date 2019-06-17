import React, { Component } from 'react'
import './FileUploader.css'
import Upload from './Upload'

class FileUploader extends Component {
  render() {
    return (
      <div className="App">
        <div className="Card">
          <Upload />
        </div>
      </div>
    )
  }
}

export default FileUploader;
