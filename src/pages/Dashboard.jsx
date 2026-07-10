import React from 'react';
import { toast } from 'react-toastify';
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

import {
  statsData,
  monthlyRevenueData,
  categoryDistributionData,
  mostRentedCarsData,
  recentActivityData
} from '../data/mockData';

import DashboardCard from '../components/DashboardCard';
import ChartCard from '../components/ChartCard';
import BookingTable from '../components/BookingTable';
import ActivityCard from '../components/ActivityCard';
import CarCard from '../components/CarCard.jsx';

function Dashboard({ 
  onOpenAddCar, 
  onOpenCreateBooking, 
  onOpenAddCustomer,
  bookingsList,
  carsList
}) {
  const COLORS = ['#7C3AED', '#06B6D4', '#4F46E5', '#334155'];

  const handleGenerateReport = () => {
    toast.info("Generating analytics report...", {
      icon: "📊"
    });
    setTimeout(() => {
      toast.success("Report generated and downloaded successfully!", {
        icon: "✅"
      });
    }, 1500);
  };

  return (
    <div className="container-fluid px-0">
      <div className="mb-4">
        <h2 className="fw-bold mb-1">Overview Dashboard</h2>
        <p className="text-muted mb-0">Monitor car fleet, analytics, bookings, and customer activities in real-time.</p>
      </div>

      <div className="row g-4 mb-4">
        {statsData.map((card) => (
          <DashboardCard
            key={card.id}
            title={card.title}
            value={card.id === 'total-revenue' ? `₹${(800950).toLocaleString()}` : card.value}
            icon={card.icon}
            gradient={card.gradient}
            change={card.change}
          />
        ))}
      </div>

      <div className="row g-4 mb-4">
        <ChartCard title="Monthly Revenue Trend (₹)" size="col-lg-8">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={monthlyRevenueData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#7C3AED" stopOpacity={0.4}/>
                  <stop offset="95%" stopColor="#7C3AED" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" vertical={false} />
              <XAxis dataKey="month" stroke="var(--text-muted)" tickLine={false} />
              <YAxis stroke="var(--text-muted)" tickLine={false} />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="Revenue" name="Revenue (₹)" stroke="#7C3AED" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue)" />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Fleet Distribution" size="col-lg-4">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={categoryDistributionData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {categoryDistributionData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `${value}%`} />
              <Legend verticalAlign="bottom" align="center" iconType="circle" />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Most Rented Cars Analytics" size="col-lg-12">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={mostRentedCarsData} margin={{ top: 15, right: 10, left: -10, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" vertical={false} />
              <XAxis dataKey="name" stroke="var(--text-muted)" tickLine={false} />
              <YAxis stroke="var(--text-muted)" tickLine={false} />
              <Tooltip formatter={(value, name) => [value, name === 'rentals' ? 'Rentals Count' : 'Revenue (₹)']} />
              <Legend />
              <Bar dataKey="rentals" name="Total Rentals" fill="#7C3AED" radius={[6, 6, 0, 0]} />
              <Bar dataKey="revenue" name="Revenue Generated (₹)" fill="#06B6D4" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      <div className="row g-4">
        <div className="col-12 col-xl-8">
          <div className="glass-card h-100">
            <div className="d-flex justify-content-between align-items-center mb-4 pb-2 border-bottom border-secondary border-opacity-10">
              <h5 className="mb-0 fw-bold">Recent Bookings</h5>
              <span className="badge bg-primary-subtle text-primary px-3 py-2 rounded-pill fw-semibold">
                Live Updates
              </span>
            </div>
            <BookingTable bookings={bookingsList.slice(0, 5)} />
          </div>
        </div>

        <div className="col-12 col-xl-4 d-flex flex-column gap-4">
          <div className="glass-card">
            <h5 className="fw-bold mb-4 pb-2 border-bottom border-secondary border-opacity-10">Quick Actions</h5>
            <div className="action-grid">
              <button className="action-btn" onClick={onOpenAddCar}>
                <i className="fas fa-plus-circle"></i>
                <span>Add New Car</span>
              </button>
              <button className="action-btn" onClick={onOpenCreateBooking}>
                <i className="fas fa-calendar-plus"></i>
                <span>Create Booking</span>
              </button>
              <button className="action-btn" onClick={onOpenAddCustomer}>
                <i className="fas fa-user-plus"></i>
                <span>Add Customer</span>
              </button>
              <button className="action-btn" onClick={handleGenerateReport}>
                <i className="fas fa-file-invoice"></i>
                <span>Generate Report</span>
              </button>
            </div>
          </div>

          <div className="glass-card flex-grow-1">
            <h5 className="fw-bold mb-4 pb-2 border-bottom border-secondary border-opacity-10">Recent Activity</h5>
            <div className="activity-list">
              {recentActivityData.map((act) => (
                <ActivityCard
                  key={act.id}
                  text={act.text}
                  time={act.time}
                  icon={act.icon}
                  badgeClass={act.badgeClass}
                />
              ))}
          </div>
        </div>
      </div>
    </div>

    {/* Featured Vehicles Section */}
      <div className="mb-4 mt-5">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div>
            <h4 className="fw-bold mb-1">Premium Fleet Highlights</h4>
            <p className="text-muted mb-0">High-performance luxury vehicles currently available in the system.</p>
          </div>
        </div>
        <div className="row g-4">
          {carsList && carsList.slice(0, 3).map((car) => (
            <div key={car.id} className="col-12 col-md-4">
              <CarCard car={car} isAdminMode={false} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
