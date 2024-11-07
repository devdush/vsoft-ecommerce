import React, { useState } from "react";
import AWS from "aws-sdk";


AWS.config.update({
  accessKeyId: ACCESS_KEY_ID,
  secretAccessKey: SECRET_ACCESS_KEY,
  region: REGION,
});

const s3 = new AWS.S3();

const CreateBrands = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  const handleFileInput = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const uploadFile = (file) => {
    const params = {
      Bucket: S3_BUCKET,
      Key: file.name,
      Body: file,
      ACL: "public-read", // Set to 'public-read' to allow access to the file URL
    };

    s3.upload(params, (err, data) => {
      if (err) {
        console.error("Error uploading file:", err);
      } else {
        console.log("File uploaded successfully:", data);
        setImageUrl(data.Location); // Set the image URL for display
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedFile) {
      uploadFile(selectedFile);
    } else {
      alert("Please select a file to upload.");
    }
  };

  return (
    <div>
      <h3>Upload Image to S3</h3>
      <input type="file" onChange={handleFileInput} />
      <button onClick={handleSubmit}>Upload</button>

      {imageUrl && (
        <div>
          <p>Uploaded Image URL:</p>
          <a href={imageUrl} target="_blank" rel="noopener noreferrer">
            {imageUrl}
          </a>
          <img src={imageUrl} alt="Uploaded" style={{ width: "200px" }} />
        </div>
      )}
    </div>
  );
};

export default CreateBrands;
