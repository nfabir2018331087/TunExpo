import { useState, useRef } from "react";
import "./DragDropFiles.css";
import imgpng from '../../img/image.png'

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
          <h1 className="fs-4">
            Drag and Drop to upload Image <br /> or{" "}
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
            className="btn btn-primary text-light px-5 py-3"
            onClick={() => inputRef.current.click()}
          >
            <img src={imgpng} width="30px" className="me-2 ps-0" alt="icon"/>
            Choose image
          </button>
        </div>
      </div>
    </>
  );
};

export default DragDropFiles;
