import React from 'react';

const CostSummary = ({ costs }) => {
  const total = costs.reduce((acc, cost) => acc + cost.amount, 0);

  return (
    <div className="rounded-xl bg-surface-light border border-border-light p-4">
      <h3 className="font-bold text-base px-2 pb-2">Cost Summary</h3>
      <ul className="flex flex-col gap-4 p-2">
        {costs.map((cost, index) => (
          <li key={index} className="flex justify-between items-center text-sm">
            <span className="text-text-light-secondary">{cost.label}</span>
            <span className="font-medium">
              ${cost.amount.toLocaleString()}
            </span>
          </li>
        ))}
        <li className="mt-2 pt-4 border-t border-border-light flex justify-between items-center text-sm">
          <span className="font-bold">Total</span>
          <span className="font-bold text-lg">
            ${total.toLocaleString()}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default CostSummary;
