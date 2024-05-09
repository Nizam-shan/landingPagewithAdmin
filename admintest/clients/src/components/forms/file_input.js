import React from "react";

const FileInput = ({ id, onChange }) => {
  return (
    <div>
      <input
        type="file"
        id={id}
        onChange={onChange}
        accept=".pdf,.doc,.docx" // Allow only PDF, DOC, and DOCX files
        maxFileSize={20 * 1024 * 1024} // Maximum file size: 20 MB
      />
    </div>
  );
};

export default FileInput;
