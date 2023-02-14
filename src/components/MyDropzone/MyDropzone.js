import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const MyDropzone = ({ setPicture, picture }) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      // console.log(acceptedFiles[0]);
      setPicture(acceptedFiles[0]);
    },
    [setPicture]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="file-text" {...getRootProps()}>
      <input {...getInputProps()} />
      {picture ? (
        <div>
          <span>{`${picture.path} viens d'être ajoutée`}</span>
        </div>
      ) : (
        <div>
          <span>Glissez votre photo ici, ou cliquez pour ouvrir</span>
        </div>
      )}
    </div>
  );
};

export default MyDropzone;
