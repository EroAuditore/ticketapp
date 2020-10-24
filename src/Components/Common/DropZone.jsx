import React from "react";

import { DropzoneArea, DropzoneAreaBase } from "material-ui-dropzone";

const DropZone = ({ onChange }) => {
  return (
    <DropzoneArea
      onChange={(file) => onChange(file)}
      onDelete={(fileObj) => console.log("Removed File:", fileObj)}
      onAlert={(message, variant) => console.log(`${variant}: ${message}`)}
      maxFileSize={2000000}
      filesLimit={1}
      showFileNames={true}
      acceptedFiles={["text/*", ".pdf", ".xml", ".xlsx", ".docx"]}
    />
  );
};

export default DropZone;
