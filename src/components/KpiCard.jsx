import React from 'react';

const KpiCard = ({ icon, label, value, percentage, isPositive }) => {
  return (
    <div className="flex flex-col gap-2 rounded-xl bg-surface-light p-6 border border-border-light">
      <div className="flex items-center gap-2 text-text-light-secondary">
        <span className="material-symbols-outlined text-base">{icon}</span>
        <p className="text-sm font-medium">{label}</p>
      </div>
      <p className="text-3xl font-bold">{value}</p>
      <p className={`text-sm font-medium ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
        {percentage}
      </p>
    </div>
  );
};

export default KpiCard;
