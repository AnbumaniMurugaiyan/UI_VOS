import React from 'react';

const FileUpload = () => {
  return (
    <div className="flex items-center justify-center w-full">
      <label
        className="flex flex-col items-center justify-center w-full h-48 border-2 border-slate-300 border-dashed rounded-xl cursor-pointer bg-slate-50 hover:bg-slate-100"
        htmlFor="dropzone-file"
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <span className="material-symbols-outlined text-4xl text-slate-400">
            cloud_upload
          </span>
          <p className="mb-2 text-sm text-slate-500">
            <span className="font-semibold text-primary">Click to upload</span> or drag and drop
          </p>
          <p className="text-xs text-slate-500">PDF, PNG, JPG (MAX. 10MB)</p>
        </div>
        <input className="hidden" id="dropzone-file" type="file" />
      </label>
    </div>
  );
};

export default FileUpload;
