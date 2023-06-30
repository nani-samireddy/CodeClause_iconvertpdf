import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { convertToDocx } from './api';
import Loader from "./components/loader/loader";

function App() {
  const [filename, setFilename] = useState(""); // filename is the name of the file
  const [loading, setLoading] = useState(false); // loading is a boolean to show the loader

  const handleFileChange = (e) => {
    const file = e.target.files[0]; // get the file from the input
    setFilename(file.name); // update the state
  };

  const handleConvert = async (e) => {
    e.preventDefault();
    setLoading(true);
    const file = document.getElementById("uploadFile").files[0];

    const response = await convertToDocx(file);
    let base64 = response.file;
    console.log(base64);
    const byteCharacters = atob(base64);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], {
      type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    });

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename.replace(".pdf", "_converted.docx");
    link.click();
    setLoading(false);
  };

  return (
    <>
      {loading && <Loader />}
      <h1>iConvert PDF v.1.0</h1>
      <p>A simple PDF converter to convert your pdf files into docx</p>
      <div className="read-the-docs">
        <ul>
          Steps
          <li>Upload your file</li>
          <li>Click on convert</li>
          <li>Download your file</li>
        </ul>
      </div>
      <div className="card">
        <form action="">
          <input
            className="input-file"
            type="file"
            name="uploadFile"
            id="uploadFile"
            onChange={handleFileChange}
            accept=".pdf"
            required
          />

          <button onClick={handleConvert}>Convert to WORD (.docx)</button>
        </form>
      </div>
    </>
  );
}

export default App
