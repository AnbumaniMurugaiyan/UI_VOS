import React from 'react';
import KpiCard from '../components/KpiCard';
import ActivityTable from '../components/ActivityTable';
import ApprovalList from '../components/ApprovalList';
import CostSummary from '../components/CostSummary';

const mockData = {
  kpis: [
    {
      icon: 'anchor',
      label: 'Vessels in Port',
      value: '12',
      percentage: '+2.5%',
      isPositive: true,
    },
    {
      icon: 'hourglass_top',
      label: 'Pending Approvals',
      value: '8',
      percentage: '+5.1%',
      isPositive: true,
    },
    {
      icon: 'monetization_on',
      label: 'Total Costs',
      value: '$1.2M',
      percentage: '-1.2%',
      isPositive: false,
    },
  ],
  activities: [
    {
      vesselName: 'Stellar Voyager',
      imo: '9337168',
      etaEtd: '2024-10-26 / 2024-10-28',
      status: 'On Schedule',
      agent: 'J. Smith',
    },
    {
      vesselName: 'Oceanic Pioneer',
      imo: '9450237',
      etaEtd: '2024-10-27 / 2024-10-29',
      status: 'Action Required',
      agent: 'A. Wong',
    },
    {
      vesselName: "Neptune's Chariot",
      imo: '9784321',
      etaEtd: '2024-10-25 / 2024-10-27',
      status: 'Berthed',
      agent: 'L. Chen',
    },
    {
      vesselName: 'Crimson Tide',
      imo: '9542189',
      etaEtd: '2024-10-24 / 2024-10-26',
      status: 'Delayed',
      agent: 'M. Rodriguez',
    },
    {
      vesselName: 'North Star',
      imo: '9293114',
      etaEtd: '2024-10-23 / 2024-10-25',
      status: 'Departed',
      agent: 'J. Smith',
    },
  ],
  approvals: [
    {
      title: 'Invoice #INV-007',
      vessel: 'Stellar Voyager',
    },
    {
      title: 'Customs Declaration',
      vessel: 'Oceanic Pioneer',
    },
    {
      title: 'Service Request',
      vessel: 'Crimson Tide',
    },
  ],
  costs: [
    {
      label: 'Port Dues',
      amount: 450000,
    },
    {
      label: 'Pilotage',
      amount: 120500,
    },
    {
      label: 'Bunkering',
      amount: 310200,
    },
    {
      label: 'Agency Fees',
      amount: 85000,
    },
  ],
};

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-8">
      <div className="lg:col-span-2 flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mockData.kpis.map((kpi, index) => (
            <KpiCard key={index} {...kpi} />
          ))}
        </div>
        <ActivityTable activities={mockData.activities} />
      </div>
      <div className="flex flex-col gap-6">
        <ApprovalList approvals={mockData.approvals} />
        <CostSummary costs={mockData.costs} />
      </div>
    </div>
  );
};

export default Dashboard;
