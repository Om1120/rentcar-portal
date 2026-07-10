import React from 'react';
import { toast } from 'react-toastify';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar
} from 'recharts';

import { monthlyRevenueData } from '../data/mockData';
import ChartCard from '../components/ChartCard';

function Reports() {
  const handleExport = (format) => {
    toast.success(`Exported fleet and revenue report in ${format.toUpperCase()} format!`);
  };

  const bookingPerformanceData = monthlyRevenueData.map(d => ({
    month: d.month,
    'Avg Price/Rent (₹)': Math.round(d.Revenue / d.Bookings)
  }));

  return (
    <div className="container-fluid px-0">
      <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center mb-4 gap-3">
        <div>
          <h2 className="fw-bold mb-1">Reports & Analytics</h2>
          <p className="text-muted mb-0">Review system activity, booking volume, average transaction pricing, and export logs.</p>
        </div>
        
        <div className="d-flex gap-2">
          <button className="btn btn-outline-light border border-secondary border-opacity-10" style={{ color: 'var(--text-main)', borderRadius: '10px' }} onClick={() => handleExport('csv')}>
            <i className="fas fa-file-csv me-2 text-success"></i>CSV Export
          </button>
          <button className="btn btn-primary" style={{ borderRadius: '10px' }} onClick={() => handleExport('pdf')}>
            <i className="fas fa-file-pdf me-2"></i>PDF Export
          </button>
        </div>
      </div>

      <div className="row g-4 mb-4">
        <div className="col-12 col-md-3">
          <div className="glass-card">
            <span className="text-muted fw-semibold" style={{ fontSize: '0.8rem' }}>AVERAGE BOOKING VALUE</span>
            <h4 className="fw-extrabold mb-1 mt-2">₹6,457</h4>
            <span className="text-success" style={{ fontSize: '0.75rem' }}><i className="fas fa-arrow-trend-up me-1"></i>+4.2% from Q1</span>
          </div>
        </div>
        <div className="col-12 col-md-3">
          <div className="glass-card">
            <span className="text-muted fw-semibold" style={{ fontSize: '0.8rem' }}>FLEET UTILIZATION RATE</span>
            <h4 className="fw-extrabold mb-1 mt-2">78%</h4>
            <span className="text-success" style={{ fontSize: '0.75rem' }}><i className="fas fa-arrow-trend-up me-1"></i>+2% peak season</span>
          </div>
        </div>
        <div className="col-12 col-md-3">
          <div className="glass-card">
            <span className="text-muted fw-semibold" style={{ fontSize: '0.8rem' }}>CUSTOMER RETENTION</span>
            <h4 className="fw-extrabold mb-1 mt-2">32.4%</h4>
            <span className="text-muted" style={{ fontSize: '0.75rem' }}>Repeat rental rate</span>
          </div>
        </div>
        <div className="col-12 col-md-3">
          <div className="glass-card">
            <span className="text-muted fw-semibold" style={{ fontSize: '0.8rem' }}>CUSTOMER RATING AVG</span>
            <h4 className="fw-extrabold mb-1 mt-2">4.8 / 5.0</h4>
            <span className="text-warning" style={{ fontSize: '0.75rem' }}><i className="fas fa-star me-1"></i>High satisfaction</span>
          </div>
        </div>
      </div>

      <div className="row g-4">
        <ChartCard title="Rentals Growth & Frequency" size="col-lg-6">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={monthlyRevenueData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" vertical={false} />
              <XAxis dataKey="month" stroke="var(--text-muted)" tickLine={false} />
              <YAxis stroke="var(--text-muted)" tickLine={false} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="Bookings" name="Total Rentals" stroke="#06B6D4" strokeWidth={3} dot={{ r: 5 }} activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Average Order Value per Month (₹)" size="col-lg-6">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={bookingPerformanceData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" vertical={false} />
              <XAxis dataKey="month" stroke="var(--text-muted)" tickLine={false} />
              <YAxis stroke="var(--text-muted)" tickLine={false} />
              <Tooltip />
              <Legend />
              <Bar dataKey="Avg Price/Rent (₹)" name="Average Spending (₹)" fill="#7C3AED" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
    </div>
  );
}

export default Reports;
