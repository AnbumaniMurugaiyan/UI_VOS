import React from 'react';
import TextInput from '../components/TextInput';
import SelectInput from '../components/SelectInput';
import FileUpload from '../components/FileUpload';

const Onboarding = () => {
  return (
    <div className="flex flex-1 justify-center py-5 sm:px-6 lg:px-8">
      <div className="flex flex-col w-full max-w-4xl flex-1">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-slate-200 px-6 sm:px-8 py-3">
          <div className="flex items-center gap-4 text-slate-900">
            <h2 className="text-lg font-bold leading-tight tracking-tight">New Entity Onboarding</h2>
          </div>
          <div className="flex gap-2">
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-slate-200/80 text-slate-900 text-sm font-bold leading-normal tracking-wide hover:bg-slate-200">
              <span className="truncate">Cancel</span>
            </button>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-wide hover:bg-primary/90">
              <span className="truncate">Save</span>
            </button>
          </div>
        </header>
        <main className="flex-1 p-6 sm:p-8 space-y-8">
          <div className="flex flex-wrap justify-between gap-3">
            <div className="flex flex-col gap-1">
              <h1 className="text-slate-900 text-3xl font-black leading-tight tracking-tighter">Onboard a New Vessel</h1>
              <p className="text-slate-500 text-base font-normal leading-normal">Enter the details for the new vessel and its port call.</p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-slate-900 text-lg font-bold leading-tight tracking-tight">General Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <TextInput label="Vessel Name" id="vessel-name" placeholder="e.g., MV Ever Ace" value="TBN" />
              <TextInput label="IMO Number" id="imo-number" placeholder="e.g., 9893890" />
            </div>
          </div>

          <hr className="border-slate-200" />

          <div className="space-y-6">
            <h3 className="text-slate-900 text-lg font-bold leading-tight tracking-tight">Technical Specifications</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <TextInput label="DWT" id="dwt" placeholder="e.g., 58,713" />
              <TextInput label="GRT" id="grt" placeholder="e.g., 34,349" />
              <TextInput label="NRT" id="nrt" placeholder="e.g., 34,349" />
              <TextInput label="LOA" id="loa" placeholder="e.g., 196" />
              <TextInput label="BEAM" id="beam" placeholder="e.g., 32.26" />
            </div>
          </div>

          <hr className="border-slate-200" />

          <div className="space-y-6">
            <h3 className="text-slate-900 text-lg font-bold leading-tight tracking-tight">Port Call Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <TextInput label="Port" id="port" placeholder="e.g., Nhava Sheva" />
              <SelectInput label="Service Type" id="service-type" options={['Full agency', 'Charted agency', 'Husbanding agency', 'Bunkering agency', 'Operator protective agency']} />
              <TextInput label="ETA" id="eta" placeholder="e.g., 45695" />
              <TextInput label="ETD" id="etd" />
            </div>
          </div>

          <hr className="border-slate-200" />

          <div className="space-y-6">
            <h3 className="text-slate-900 text-lg font-bold leading-tight tracking-tight">Cargo & Operation Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <TextInput label="Cargo Type" id="cargo-type" placeholder="e.g., ROCK PHOS" />
                <TextInput label="Cargo Quantity" id="cargo-quantity" placeholder="e.g., 57050" />
                <TextInput label="ROE (Rate of Exchange)" id="roe" placeholder="e.g., INR=1USD87" />
                <SelectInput label="Operation Type" id="operation-type" options={['Discharge', 'Load']} />
                <SelectInput label="Call Type" id="call-type" options={['Foreign', 'Coastal']} />
            </div>
          </div>

          <hr className="border-slate-200" />

          <div className="space-y-6">
            <h3 className="text-slate-900 text-lg font-bold leading-tight tracking-tight">Documents</h3>
            <FileUpload />
          </div>

          <div className="flex justify-end gap-3 pt-6">
            <button className="flex min-w-[120px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-11 px-5 bg-slate-200/80 text-slate-900 text-sm font-bold leading-normal tracking-wide hover:bg-slate-200">
              <span className="truncate">Save as Draft</span>
            </button>
            <button className="flex min-w-[120px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-11 px-5 bg-primary text-white text-sm font-bold leading-normal tracking-wide hover:bg-primary/90">
              <span className="truncate">Submit Onboarding</span>
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Onboarding;
