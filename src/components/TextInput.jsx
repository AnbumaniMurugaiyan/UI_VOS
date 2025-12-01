import React from 'react';

const TextInput = ({ label, id, placeholder, value }) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-slate-700" htmlFor={id}>
        {label}
      </label>
      <input
        className="form-input w-full rounded-lg border-slate-200 bg-white focus:border-primary/50 focus:ring-primary/50 placeholder:text-slate-400"
        id={id}
        placeholder={placeholder}
        type="text"
        defaultValue={value}
      />
    </div>
  );
};

export default TextInput;
