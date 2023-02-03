import React, { useState } from "react";

const Dicd = () => {
  const [img, setImg] = useState<any>();

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', img)
    console.log(formData);
  };
  return (
    <div style={{ marginTop: "200px" }}>
      <input
        onChange={(e) => {
          if (e.target.files && e.target.files[0]) {
            setImg(e.target.files[0]);
          }
        }}
        type="file"
        name=""
      />
      <button onClick={handleUpload}>suvdcccccccccccccccmi</button>
    </div>
  );
};

export default Dicd;
