"use client";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";

function MyComponent() {
  const [open, setOpen] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleAddFile = (event) => {
    const files = event.target.files;
    const updatedSelectedFiles = [...selectedFiles];

    for (let i = 0; i < files.length; i++) {
      updatedSelectedFiles.push(files[i]);
    }

    setSelectedFiles(updatedSelectedFiles);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedFiles([]);
  };

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles(files);
  };

  const handleFileDrop = (event) => {
    event.preventDefault();
    const files = Array.from(event.dataTransfer.files);
    setSelectedFiles(files);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleUpload = () => {
    handleClose();
  };

  return (
    <div>
      <Button onClick={handleOpen} sx={{ backgroundColor: "blue" }}>
        Open Modal
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: {
              xss: "40%",
              xs: "100%",
              lg: "40%",
              md: "40%",
              sm: "70%",
            },

            maxHeight: "80vh",
            bgcolor: "#d9dbde",
            borderRadius: "22px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
            p: 4,
            textAlign: "center",
          }}
        >
          {selectedFiles.length > 0 ? (
            <div>
              <Typography id="modal-description" sx={{ mb: 2 }}>
                Selected Files:
              </Typography>
              <ul>
                {selectedFiles.map((file, index) => (
                  <li className="text-[#8f9194]" key={index}>
                    {file.name}
                  </li>
                ))}
              </ul>
              <Button
                onClick={handleUpload}
                variant="outlined"
                color="primary"
                sx={{ mt: 2 }}
              >
                Send Files
              </Button>
              <Button
                onClick={() => {
                  setSelectedFiles([]);
                }}
                variant="outlined"
                color="secondary"
                sx={{ mt: 2, ml: 2 }}
              >
                Clear Files
              </Button>
              <input
                type="file"
                accept=".jpg, .jpeg, .png, .pdf"
                onChange={handleAddFile}
                style={{ display: "none" }}
                id="file-input"
                multiple
              />
              <label htmlFor="file-input">
                <Button
                  component="span"
                  variant="outlined"
                  color="primary"
                  sx={{ mt: 2, ml: 2 }}
                >
                  Upload Files
                </Button>
              </label>
            </div>
          ) : (
            <div>
              <div
                onDrop={handleFileDrop}
                onDragOver={handleDragOver}
                style={{
                  border: "2px dashed #ccc",
                  borderRadius: "4px",
                  padding: "20px",
                  cursor: "pointer",
                  marginBottom: "20px",
                  width: "80%",
                  height: "40vh",
                  margin: "0 auto",
                  backgroundColor: "#00FFB6",
                  position: "relative",
                }}
              >
                <Image
                  src="csv.svg"
                  alt="login image"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{
                    width: "20%",
                    height: "auto",
                    position: "absolute",
                    top: "50px",
                    left: "-10%",
                  }}
                />
                <Typography id="modal-description" sx={{ mb: 2 }}>
                  Drag & Drop
                </Typography>
                <input
                  type="file"
                  accept=".jpg, .jpeg, .png, .pdf"
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                  id="file-input"
                  multiple // Allow multiple file selection
                />
                <label htmlFor="file-input">
                  <Button
                    component="span"
                    variant="contained"
                    color="primary"
                    sx={{ mt: 2 }}
                  >
                    <Image
                      src="upload.svg"
                      alt="login image"
                      variant="contained"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{
                        width: "15%",
                        height: "auto",
                        marginRight: "2px",
                      }}
                    />
                    Upload Files
                  </Button>
                </label>
                <Image
                  src="pdf.svg"
                  alt="login image"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{
                    width: "20%",
                    height: "auto",
                    position: "absolute",
                    top: "180px",
                    right: "-10%",
                  }}
                />
                <Image
                  src="dock.svg"
                  alt="login image"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{
                    width: "20%",
                    height: "auto",
                    position: "absolute",
                    top: "200px",
                    right: "90%",
                  }}
                />
              </div>
            </div>
          )}
        </Box>
      </Modal>
    </div>
  );
}

export default MyComponent;
