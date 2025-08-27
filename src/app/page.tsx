'use client';

import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import DashboardContent from '@/components/DashboardContent';

export default function Dashboard() {
  const [activePage, setActivePage] = useState('dashboard');

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <DashboardContent activePage={activePage} />
    </div>
  );
}
