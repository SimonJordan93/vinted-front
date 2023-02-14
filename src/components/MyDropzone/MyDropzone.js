import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const MyDropzone = ({ setPicture, picture }) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      console.log(acceptedFiles[0]);
      setPicture(acceptedFiles[0]);
    },
    [setPicture]
  );

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className="file-text" {...getRootProps()}>
      <input {...getInputProps()} />
      {picture ? (
        <div>
          {picture && (
            <div className="uploaded-pic">
              <button
                className="cancel-pic"
                onClick={(event) => {
                  event.stopPropagation();
                  setPicture(null);
                }}
              >
                X
              </button>
              <img src={URL.createObjectURL(picture)} alt="" />
            </div>
          )}
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
