
import { QRCodeCanvas } from "qrcode.react";
import React, { useState } from "react";

const App = () => {
  const [data, setData] = useState("https://www.google.com/");
  const handleDownload = () =>{
    const imgUrl = document.querySelector("canvas");
    const url = imgUrl.toDataURL("image/png");
    const el = document.createElement("a");
    el.href = url;
    el.download = "code.png"
    el.click()
    

  }

  return (
    <div className="flex flex-col items-center min-h-screen p-4">
      <h1 className="text-4xl font-bold text-center my-4">QR Code Generator</h1>

      <input
        type="url"
        name="qr-input"
        value={data}
        onChange={(e) => setData(e.target.value)}
        placeholder="Enter URL here..."
        className="border-2 border-green-600 w-[50%] px-4 py-2 text-lg rounded-xl hover:ring-2 ring-blue-600 outline-none"
      />

      <div className="mt-8">
        {data && (
          <QRCodeCanvas
            value={data}
            size={200}
            level="M"
            className="shadow-lg p-2 border border-gray-300 rounded-md"
          />
        )}
      </div>
      <button onClick={handleDownload} className="px-4 py-1 bg-green-500 my-4 text-white shadow-2xl rounded-xl " >Download</button>
    </div>
  );
};

export default App;
