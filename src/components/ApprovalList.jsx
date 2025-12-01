import React from 'react';

const ApprovalList = ({ approvals }) => {
  return (
    <div className="rounded-xl bg-surface-light border border-border-light p-4">
      <h3 className="font-bold text-base px-2 pb-2">Pending Approvals</h3>
      <ul className="flex flex-col gap-2">
        {approvals.map((approval, index) => (
          <li
            key={index}
            className="flex items-center justify-between p-2 rounded-lg hover:bg-background-light"
          >
            <div>
              <p className="font-medium text-sm">{approval.title}</p>
              <p className="text-xs text-text-light-secondary">{approval.vessel}</p>
            </div>
            <button className="text-primary text-sm font-bold">View</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApprovalList;
