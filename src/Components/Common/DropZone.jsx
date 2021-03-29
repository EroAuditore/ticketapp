import React from "react";

import { DropzoneArea } from "material-ui-dropzone";

const DropZone = ({ onChange, deleteFile}) => {
  return (
    <DropzoneArea
      
      onChange={(file) => onChange(file)}
      onDelete={() => deleteFile()}
      onAlert={(message, variant) => console.log(`${variant}: ${message}`)}
      maxFileSize={2000000}
      filesLimit={1}
      showFileNames={true}
      acceptedFiles={["text/*", ".pdf", ".xml", ".xlsx", ".docx"]}
    />
  );
};

export default DropZone;
