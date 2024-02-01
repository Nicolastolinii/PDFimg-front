import './draganddrop.css';
import React, { useState, useRef } from 'react';
import uploadImg from "../assets/cloud-upload-regular-240.png"
import Loading from "../assets/loading.png"

export function DragAndDrop() {
  const [processing, setProcessing] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    handleFile(file);
  };

  const handleFile = (file) => {
    setProcessing(true);
    const formData = new FormData();
    formData.append('file', file);

    fetch('http://127.0.0.1:5000/process', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        const downloadLink = document.createElement('a');
        downloadLink.href = url;
        downloadLink.download = 'output.pdf';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        setProcessing(false);
        document.body.removeChild(downloadLink);

        // Restablece el valor del input de archivo
        if (fileInputRef.current) {
          fileInputRef.current.value = null;
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        setProcessing(false);
      });
  };

  return (
    <div className={`drop-file-input transition-all ${processing ? 'bg-[#212132]' : 'bg-[#f5f8ff15]'}`}>
      <div className="drop-file-input__label">
        <img className={processing ? 'rotating-image' : ''} src={processing ? Loading : uploadImg} alt="" />
        <p>{processing ? "PROCESANDO ARCHIVO. ESPERE..." : "Arrastra y suelta tu archivo aquí"}</p>
        <p className='text-xs text-gray-500'>{processing ? "Esto puede tardar varios minutos." : ""}</p>
      </div>
      <input ref={fileInputRef} type="file" onChange={handleFileInput} />
    </div>
  )

};