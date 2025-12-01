import React from 'react';

const statusStyles = {
  'On Schedule': 'bg-green-100 text-green-700',
  'Action Required': 'bg-orange-100 text-orange-700',
  'Berthed': 'bg-blue-100 text-blue-700',
  'Delayed': 'bg-red-100 text-red-700',
  'Departed': 'bg-gray-100 text-gray-800',
};

const ActivityTable = ({ activities }) => {
  return (
    <div className="rounded-xl bg-surface-light border border-border-light">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 border-b border-border-light">
        <h3 className="font-bold text-base">Port Call Activity</h3>
        <div className="flex flex-col md:flex-row md:items-center gap-3">
          <div className="flex-1">
            <label className="flex flex-col min-w-40 h-10 w-full">
              <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                <div className="text-text-light-secondary flex border-none bg-background-light items-center justify-center pl-3 rounded-l-lg">
                  <span className="material-symbols-outlined text-xl">search</span>
                </div>
                <input
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-lg text-sm text-text-light-primary focus:outline-0 focus:ring-0 border-none bg-background-light h-full placeholder:text-text-light-secondary px-2"
                  placeholder="Search vessel or IMO..."
                  defaultValue=""
                />
              </div>
            </label>
          </div>
          <div className="flex gap-2">
            <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-background-light pl-3 pr-2 border border-border-light">
              <p className="text-sm font-medium">Status</p>
              <span className="material-symbols-outlined text-lg">expand_more</span>
            </button>
            <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-background-light pl-3 pr-2 border border-border-light">
              <p className="text-sm font-medium">Port</p>
              <span className="material-symbols-outlined text-lg">expand_more</span>
            </button>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="text-xs uppercase text-text-light-secondary bg-background-light">
            <tr>
              <th scope="col" className="px-6 py-3">Vessel Name</th>
              <th scope="col" className="px-6 py-3">IMO</th>
              <th scope="col" className="px-6 py-3">ETA / ETD</th>
              <th scope="col" className="px-6 py-3">Status</th>
              <th scope="col" className="px-6 py-3">Agent</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((activity) => (
              <tr key={activity.imo} className="border-b border-border-light hover:bg-primary/10">
                <td className="px-6 py-4 font-medium">{activity.vesselName}</td>
                <td className="px-6 py-4 text-text-light-secondary">{activity.imo}</td>
                <td className="px-6 py-4">{activity.etaEtd}</td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                      statusStyles[activity.status]
                    }`}
                  >
                    {activity.status}
                  </span>
                </td>
                <td className="px-6 py-4">{activity.agent}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ActivityTable;
