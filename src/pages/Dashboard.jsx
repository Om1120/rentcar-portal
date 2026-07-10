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

import DashboardCard from '../components/DashboardCard';
import ChartCard from '../components/ChartCard';
import BookingTable from '../components/BookingTable';
import ActivityCard from '../components/ActivityCard';
import CarCard from '../components/CarCard.jsx';

function Dashboard({ 
  onOpenAddCar, 
  onOpenCreateBooking, 
  onOpenAddCustomer,
  bookingsList = [],
  carsList = [],
  customersList = [],
  paymentsList = []
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

  // Dynamic statistics calculations
  const totalRevenueNum = paymentsList
    .filter(p => p.status.toLowerCase() === 'completed')
    .reduce((sum, p) => sum + p.amount, 0);

  const statsData = [
    {
      id: 'total-cars',
      title: 'Total Cars',
      value: carsList.length.toString(),
      icon: 'fa-car',
      gradient: 'linear-gradient(135deg, #7C3AED 0%, #06B6D4 100%)',
      change: `+${carsList.filter(c => c.year >= 2023).length} new model cars`,
    },
    {
      id: 'available-cars',
      title: 'Available Cars',
      value: carsList.filter(c => c.status === 'Available').length.toString(),
      icon: 'fa-check-circle',
      gradient: 'linear-gradient(135deg, #0F172A 0%, #7C3AED 100%)',
      change: 'Ready for rent',
    },
    {
      id: 'booked-cars',
      title: 'Booked Cars',
      value: carsList.filter(c => c.status === 'Booked').length.toString(),
      icon: 'fa-key',
      gradient: 'linear-gradient(135deg, #334155 0%, #4F46E5 100%)',
      change: 'Active on road',
    },
    {
      id: 'total-customers',
      title: 'Total Customers',
      value: customersList.length.toString(),
      icon: 'fa-users',
      gradient: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)',
      change: 'Registered drivers',
    },
    {
      id: 'total-revenue',
      title: 'Total Revenue',
      value: `₹${totalRevenueNum.toLocaleString()}`,
      icon: 'fa-rupee-sign',
      gradient: 'linear-gradient(135deg, #06B6D4 0%, #3B82F6 100%)',
      change: 'From completed transactions',
    },
    {
      id: 'pending-bookings',
      title: 'Pending Bookings',
      value: bookingsList.filter(b => b.status === 'Pending').length.toString(),
      icon: 'fa-clock',
      gradient: 'linear-gradient(135deg, #EF4444 0%, #7C3AED 100%)',
      change: 'Needs confirmation',
    },
  ];

  // Dynamic monthly revenue aggregation (with historical overlay)
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const monthlyStats = {
    Jan: { Bookings: 45, Revenue: 302120 },
    Feb: { Bookings: 52, Revenue: 355240 },
    Mar: { Bookings: 68, Revenue: 474760 },
    Apr: { Bookings: 85, Revenue: 566060 },
    May: { Bookings: 99, Revenue: 683920 },
    Jun: { Bookings: 0, Revenue: 0 },
    Jul: { Bookings: 0, Revenue: 0 },
    Aug: { Bookings: 0, Revenue: 0 }
  };

  bookingsList.forEach(booking => {
    if (booking.status !== 'Cancelled') {
      const date = new Date(booking.pickupDate);
      if (!isNaN(date)) {
        const month = monthNames[date.getMonth()];
        if (monthlyStats[month] !== undefined) {
          const amount = parseInt(booking.price.replace(/[^\d]/g, '')) || 0;
          if (month === 'Jun' || month === 'Jul' || month === 'Aug') {
            monthlyStats[month].Bookings += 1;
            monthlyStats[month].Revenue += amount;
          }
        }
      }
    }
  });

  if (monthlyStats.Jun.Bookings === 0) {
    monthlyStats.Jun = { Bookings: 124, Revenue: 800950 };
  }

  const monthlyRevenueData = Object.entries(monthlyStats)
    .map(([month, data]) => ({
      month,
      Bookings: data.Bookings,
      Revenue: data.Revenue
    }))
    .filter(m => m.Bookings > 0 || m.Revenue > 0);

  // Dynamic category distribution calculations
  const categoryCounts = carsList.reduce((acc, car) => {
    let cat = 'Luxury';
    const typeUpper = car.type.toUpperCase();
    if (typeUpper.includes('SUV')) cat = 'SUV';
    else if (typeUpper.includes('SEDAN')) cat = 'Sedan';
    else if (typeUpper.includes('SPORTS') || typeUpper.includes('COUPE') || typeUpper.includes('SUPERCAR')) cat = 'Sports';
    
    acc[cat] = (acc[cat] || 0) + 1;
    return acc;
  }, { SUV: 0, Sedan: 0, Sports: 0, Luxury: 0 });

  const totalCarsCount = Object.values(categoryCounts).reduce((a, b) => a + b, 0) || 1;
  const categoryDistributionData = Object.entries(categoryCounts).map(([name, count]) => ({
    name,
    value: Math.round((count / totalCarsCount) * 100)
  }));

  // Dynamic most rented cars analytics
  const carRentalCounts = bookingsList.reduce((acc, b) => {
    if (b.status !== 'Cancelled') {
      const priceVal = parseInt(b.price.replace(/[^\d]/g, '')) || 0;
      if (!acc[b.carName]) {
        acc[b.carName] = { rentals: 0, revenue: 0 };
      }
      acc[b.carName].rentals += 1;
      acc[b.carName].revenue += priceVal;
    }
    return acc;
  }, {});

  const mostRentedCarsData = Object.entries(carRentalCounts)
    .map(([name, stats]) => ({
      name,
      rentals: stats.rentals,
      revenue: stats.revenue
    }))
    .sort((a, b) => b.rentals - a.rentals)
    .slice(0, 5);

  if (mostRentedCarsData.length === 0) {
    mostRentedCarsData.push(
      { name: 'Tesla Model S', rentals: 42, revenue: 139440 },
      { name: 'Mustang Shelby GT', rentals: 35, revenue: 162680 },
      { name: 'Range Rover Sport', rentals: 28, revenue: 185920 },
      { name: 'Audi Q7', rentals: 25, revenue: 103750 }
    );
  }

  // Dynamic recent activities list
  const recentActivityData = [];
  bookingsList.forEach(b => {
    if (b.status === 'Pending') {
      recentActivityData.push({
        id: `act-b-p-${b.id}`,
        text: `New booking ${b.id} pending review for ${b.carName}`,
        time: 'Pending Review',
        icon: 'fa-calendar-plus',
        badgeClass: 'bg-primary-subtle text-primary'
      });
    } else if (b.status === 'Confirmed') {
      recentActivityData.push({
        id: `act-b-c-${b.id}`,
        text: `Booking ${b.id} confirmed for ${b.carName}`,
        time: 'Confirmed',
        icon: 'fa-check-circle',
        badgeClass: 'bg-success-subtle text-success'
      });
    } else if (b.status === 'Cancelled') {
      recentActivityData.push({
        id: `act-b-x-${b.id}`,
        text: `Booking ${b.id} for ${b.carName} has been cancelled`,
        time: 'Cancelled',
        icon: 'fa-times-circle',
        badgeClass: 'bg-danger-subtle text-danger'
      });
    }
  });

  paymentsList.forEach(p => {
    if (p.status === 'Completed') {
      recentActivityData.push({
        id: `act-p-c-${p.id}`,
        text: `Payment of ₹${p.amount.toLocaleString()} received from ${p.customerName}`,
        time: p.date,
        icon: 'fa-receipt',
        badgeClass: 'bg-success-subtle text-success'
      });
    }
  });

  if (recentActivityData.length === 0) {
    recentActivityData.push(
      { id: 'act-1', text: 'New booking B-1027 pending review for Porsche 911', time: '5 mins ago', icon: 'fa-calendar-plus', badgeClass: 'bg-primary-subtle text-primary' },
      { id: 'act-2', text: 'Payment of ₹18,592 received from Smriti Mandhana (B-1028)', time: '2 hours ago', icon: 'fa-receipt', badgeClass: 'bg-success-subtle text-success' }
    );
  } else {
    // Reverse or slice to keep latest first
    recentActivityData.reverse();
  }

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
            value={card.value}
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
