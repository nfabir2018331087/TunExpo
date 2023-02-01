import { useState, useRef } from "react";
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import "./DragDropFiles.css";
import imgpng from '../../img/image.png'
import drag from '../../img/drag2.png'

const DragDropFiles = () => {
  const [files, setFiles] = useState(null);
  const inputRef = useRef();

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setFiles(event.dataTransfer.files);
  };

  // send files to the server // learn from my other video
  const handleUpload = () => {
    const formData = new FormData();
    formData.append("Files", files);
    console.log(formData.getAll());
    // fetch(
    //   "link", {
    //     method: "POST",
    //     body: formData
    //   }
    // )
  };

  if (files)
    return (
      <div className="uploads">
        <ul>
          {Array.from(files).map((file, idx) => (
            <li key={idx}>{file.name}</li>
          ))}
        </ul>
        <div className="actions">
          <button onClick={() => setFiles(null)}>Cancel</button>
          <button onClick={handleUpload}>Upload</button>
        </div>
      </div>
    );

  return (
    <>
      <div className="bg-theme-d py-md-5">
        <div
          className="dropzone active-d container rounded-3"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <img src={drag} alt="" width="140px" height="100px"/>
          <h1 className="fs-5 my-3">
            Drag and Drop <br />
          </h1>

          <input
            type="file"
            multiple
            onChange={(event) => setFiles(event.target.files)}
            hidden
            accept="image/png, image/jpeg"
            ref={inputRef}
          />
          <button
            className="btn btn-p text-light px-4 d-flex py-2"
            onClick={() => inputRef.current.click()}
          >
            < DriveFolderUploadIcon/>
           <p className="my-auto ms-2"> Choose image</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default DragDropFiles;
