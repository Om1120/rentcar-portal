import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import './styles/dashboard.css';

// Admin components & pages
import Sidebar from './components/Sidebar.jsx';
import Navbar from './components/Navbar.jsx';
import Dashboard from './pages/Dashboard.jsx';
import CarsAdmin from './pages/Cars.jsx';
import BookingsAdmin from './pages/Bookings.jsx';
import CustomersAdmin from './pages/Customers.jsx';
import PaymentsAdmin from './pages/Payments.jsx';
import ReportsAdmin from './pages/Reports.jsx';
import ReviewsAdmin from './pages/Reviews.jsx';
import SettingsAdmin from './pages/Settings.jsx';
import AdminLogin from './components/AdminLogin.jsx';

// Customer components & pages
import CustomerNavbar from './components/customer/CustomerNavbar.jsx';
import CustomerFooter from './components/customer/CustomerFooter.jsx';
import Home from './pages/customer/Home.jsx';
import CarsPage from './pages/customer/Cars.jsx';
import CarDetailsPage from './pages/customer/CarDetails.jsx';
import AboutPage from './pages/customer/About.jsx';
import ReviewsPage from './pages/customer/Reviews.jsx';
import ContactPage from './pages/customer/Contact.jsx';
import InquiryModal from './components/customer/InquiryModal.jsx';

import car1 from './assets/car1.png';
import car2 from './assets/car2.png';
import car3 from './assets/car3.png';
import car4 from './assets/car4.png';
import car5 from './assets/car5.png';
import car6 from './assets/car6.png';
import car7 from './assets/car7.png';
import car8 from './assets/car8.png';
import car9 from './assets/car9.png';
import car10 from './assets/car10.png';
import car11 from './assets/car11.png';
import car12 from './assets/car12.png';
import car13 from './assets/car13.png';
import car14 from './assets/car14.png';
import car15 from './assets/car15.png';
import car16 from './assets/car16.png';

import r1 from './assets/r1.jpg';
import r2 from './assets/r2.jpg';
import r3 from './assets/r3.jpg';
import r4 from './assets/r4.jpg';
import r5 from './assets/r5.jpg';
import r6 from './assets/r6.jpg';

const localCarImages = [
  { name: 'Suzuki Swift Sport', file: car1 },
  { name: 'BMW M4 Coupé', file: car2 },
  { name: 'Mercedes G-Wagon', file: car3 },
  { name: 'Toyota Fortuner', file: car4 },
  { name: 'Hyundai Creta', file: car5 },
  { name: 'Kia Seltos', file: car6 },
  { name: 'Mahindra Thar', file: car7 },
  { name: 'Mustang Shelby GT', file: car8 },
  { name: 'Range Rover Sport', file: car9 },
  { name: 'Porsche 911 Carrera', file: car10 },
  { name: 'Tesla Model S', file: car11 },
  { name: 'Audi Q7', file: car12 },
  { name: 'Jeep Wrangler Rubicon', file: car13 },
  { name: 'Honda Civic Type R', file: car14 },
  { name: 'Toyota Innova Hycross', file: car15 },
  { name: 'Lexus RX 500h', file: car16 }
];

const localAvatars = [r1, r2, r3, r4, r5, r6];

import {
  initialCarsData,
  recentBookingsData,
  initialCustomersData,
  initialPaymentsData,
  reviewsData,
  adminSettingsData
} from './data/mockData';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileSidebarShow, setMobileSidebarShow] = useState(false);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(() => {
    return localStorage.getItem('isAdminAuthenticated') === 'true';
  });

  const [carsList, setCarsList] = useState(() => {
    const saved = localStorage.getItem('carsList');
    return saved ? JSON.parse(saved) : initialCarsData;
  });
  const [bookingsList, setBookingsList] = useState(() => {
    const saved = localStorage.getItem('bookingsList');
    return saved ? JSON.parse(saved) : recentBookingsData;
  });
  const [customersList, setCustomersList] = useState(() => {
    const saved = localStorage.getItem('customersList');
    return saved ? JSON.parse(saved) : initialCustomersData;
  });
  const [paymentsList, setPaymentsList] = useState(() => {
    const saved = localStorage.getItem('paymentsList');
    return saved ? JSON.parse(saved) : initialPaymentsData;
  });
  const [reviewsList, setReviewsList] = useState(() => {
    const saved = localStorage.getItem('reviewsList');
    return saved ? JSON.parse(saved) : reviewsData;
  });
  const [adminSettings, setAdminSettings] = useState(() => {
    const saved = localStorage.getItem('adminSettings');
    return saved ? JSON.parse(saved) : adminSettingsData;
  });

  useEffect(() => {
    localStorage.setItem('carsList', JSON.stringify(carsList));
  }, [carsList]);

  useEffect(() => {
    localStorage.setItem('bookingsList', JSON.stringify(bookingsList));
  }, [bookingsList]);

  useEffect(() => {
    localStorage.setItem('customersList', JSON.stringify(customersList));
  }, [customersList]);

  useEffect(() => {
    localStorage.setItem('paymentsList', JSON.stringify(paymentsList));
  }, [paymentsList]);

  useEffect(() => {
    localStorage.setItem('reviewsList', JSON.stringify(reviewsList));
  }, [reviewsList]);

  useEffect(() => {
    localStorage.setItem('adminSettings', JSON.stringify(adminSettings));
  }, [adminSettings]);

  const [inquiryCar, setInquiryCar] = useState(null);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  const [isAddCarOpen, setIsAddCarOpen] = useState(false);
  const [isEditCarOpen, setIsEditCarOpen] = useState(false);
  const [isCreateBookingOpen, setIsCreateBookingOpen] = useState(false);
  const [isAddCustomerOpen, setIsAddCustomerOpen] = useState(false);
  const [isEditCustomerOpen, setIsEditCustomerOpen] = useState(false);

  const [editingCar, setEditingCar] = useState(null);
  const [editingCustomer, setEditingCustomer] = useState(null);

  const [newCar, setNewCar] = useState({
    name: '', type: 'Sedan', pricePerDay: '', year: 2024, fuel: 'Electric', transmission: 'Automatic', status: 'Available', imageIndex: 0
  });

  const [newBooking, setNewBooking] = useState({
    customerName: '', carName: '', pickupDate: '', returnDate: '', price: '', status: 'Pending'
  });

  const [newCustomer, setNewCustomer] = useState({
    name: '', email: '', phone: '', initialSpent: ''
  });

  const handleToggleTheme = () => {
    setDarkMode(!darkMode);
    toast.info(`Switched to ${!darkMode ? 'Dark' : 'Light'} Theme`, {
      position: "top-right",
      autoClose: 1500
    });
  };

  const handleToggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const handleToggleMobileSidebar = () => {
    setMobileSidebarShow(!mobileSidebarShow);
  };

  const handleAddCarSubmit = (e) => {
    e.preventDefault();
    if (!newCar.name || !newCar.pricePerDay) {
      toast.error("Please fill in all required fields.");
      return;
    }
    
    const imgUrl = localCarImages[parseInt(newCar.imageIndex || 0)].file;
    
    const carObj = {
      id: `car-${Date.now()}`,
      name: newCar.name,
      type: newCar.type,
      pricePerDay: parseFloat(newCar.pricePerDay),
      status: newCar.status,
      image: imgUrl,
      year: parseInt(newCar.year) || 2024,
      fuel: newCar.fuel,
      transmission: newCar.transmission
    };

    setCarsList([carObj, ...carsList]);
    setIsAddCarOpen(false);
    setNewCar({ name: '', type: 'Sedan', pricePerDay: '', year: 2024, fuel: 'Electric', transmission: 'Automatic', status: 'Available', imageIndex: 0 });
    toast.success(`Successfully added ${carObj.name} to fleet!`);
  };

  const handleOpenEditCar = (car) => {
    const idx = localCarImages.findIndex(img => img.file === car.image);
    setEditingCar({
      ...car,
      imageIndex: idx !== -1 ? idx : 0
    });
    setIsEditCarOpen(true);
  };

  const handleEditCarSubmit = (e) => {
    e.preventDefault();
    if (!editingCar.name || !editingCar.pricePerDay) {
      toast.error("Model Name and Daily Price are required.");
      return;
    }

    const imgUrl = localCarImages[parseInt(editingCar.imageIndex || 0)].file;
    const updatedCar = {
      ...editingCar,
      image: imgUrl
    };

    setCarsList(carsList.map(car => car.id === editingCar.id ? updatedCar : car));
    setIsEditCarOpen(false);
    toast.success(`Successfully updated vehicle: ${editingCar.name}`);
    setEditingCar(null);
  };

  const handleDeleteCar = (id, name) => {
    setCarsList(carsList.filter(car => car.id !== id));
    toast.error(`Deleted vehicle: ${name}`);
  };

  const handleAddCustomerSubmit = (e) => {
    e.preventDefault();
    if (!newCustomer.name || !newCustomer.email || !newCustomer.phone) {
      toast.error("Name, Email and Phone are required.");
      return;
    }

    const randomAvatar = localAvatars[Math.floor(Math.random() * localAvatars.length)];

    const customerObj = {
      id: `cust-${Date.now()}`,
      name: newCustomer.name,
      email: newCustomer.email,
      phone: newCustomer.phone,
      totalBookings: 1,
      totalSpent: parseFloat(newCustomer.initialSpent) || 0,
      avatar: randomAvatar
    };

    setCustomersList([customerObj, ...customersList]);
    setIsAddCustomerOpen(false);
    setNewCustomer({ name: '', email: '', phone: '', initialSpent: '' });
    toast.success(`Registered customer profile for ${customerObj.name}`);
  };

  const handleOpenEditCustomer = (customer) => {
    setEditingCustomer(customer);
    setIsEditCustomerOpen(true);
  };

  const handleEditCustomerSubmit = (e) => {
    e.preventDefault();
    if (!editingCustomer.name || !editingCustomer.email || !editingCustomer.phone) {
      toast.error("Name, Email and Phone are required.");
      return;
    }

    setCustomersList(customersList.map(c => c.id === editingCustomer.id ? editingCustomer : c));
    setIsEditCustomerOpen(false);
    toast.success(`Updated details for customer: ${editingCustomer.name}`);
    setEditingCustomer(null);
  };

  const handleDeleteCustomer = (id, name) => {
    setCustomersList(customersList.filter(c => c.id !== id));
    toast.error(`Removed customer profile: ${name}`);
  };

  const handleDeleteReview = (id, customerName) => {
    setReviewsList(reviewsList.filter(r => r.id !== id));
    toast.error(`Review by ${customerName} has been deleted.`);
  };

  const upsertCustomerForBooking = (customerName, amount, isConfirmedOrCompleted) => {
    const exists = customersList.find(c => c.name.toLowerCase() === customerName.toLowerCase());
    if (exists) {
      setCustomersList(prevList => prevList.map(c => {
        if (c.name.toLowerCase() === customerName.toLowerCase()) {
          return {
            ...c,
            totalBookings: c.totalBookings + 1,
            totalSpent: c.totalSpent + (isConfirmedOrCompleted ? amount : 0)
          };
        }
        return c;
      }));
    } else {
      const randomAvatar = localAvatars[Math.floor(Math.random() * localAvatars.length)];
      const customerObj = {
        id: `cust-${Date.now()}`,
        name: customerName,
        email: `${customerName.toLowerCase().replace(/\s+/g, '')}@gmail.com`,
        phone: `+91 ${Math.floor(60000 + Math.random() * 39999)} ${Math.floor(10000 + Math.random() * 89999)}`,
        totalBookings: 1,
        totalSpent: isConfirmedOrCompleted ? amount : 0,
        avatar: randomAvatar
      };
      setCustomersList(prevList => [customerObj, ...prevList]);
    }
  };

  const handleCreateBookingSubmit = (e) => {
    e.preventDefault();
    if (!newBooking.customerName || !newBooking.carName || !newBooking.pickupDate || !newBooking.returnDate) {
      toast.error("Please fill in all booking fields.");
      return;
    }

    const pickup = new Date(newBooking.pickupDate);
    const returnDt = new Date(newBooking.returnDate);
    const timeDiff = Math.abs(returnDt - pickup);
    const days = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)) || 1;
    
    const matchedCar = carsList.find(c => c.name === newBooking.carName);
    const dailyPrice = matchedCar ? matchedCar.pricePerDay : 3000;
    const computedPrice = days * dailyPrice;

    const bookingObj = {
      id: `B-${Math.floor(1000 + Math.random() * 9000)}`,
      customerName: newBooking.customerName,
      carName: newBooking.carName,
      pickupDate: newBooking.pickupDate,
      returnDate: newBooking.returnDate,
      status: newBooking.status,
      price: `₹${computedPrice.toLocaleString()}`
    };

    if (newBooking.status === 'Confirmed' || newBooking.status === 'Completed') {
      setCarsList(carsList.map(c => c.name === newBooking.carName ? { ...c, status: 'Booked' } : c));
    }

    // Add payment record
    const paymentObj = {
      id: `pay-${bookingObj.id}`,
      invoiceId: `INV-2026-${Math.floor(100 + Math.random() * 900)}`,
      customerName: bookingObj.customerName,
      amount: computedPrice,
      date: bookingObj.pickupDate,
      method: 'Credit Card',
      status: bookingObj.status === 'Confirmed' || bookingObj.status === 'Completed' ? 'Completed' : bookingObj.status === 'Cancelled' ? 'Refunded' : 'Pending'
    };

    setPaymentsList(prevPayments => [paymentObj, ...prevPayments]);
    upsertCustomerForBooking(bookingObj.customerName, computedPrice, bookingObj.status === 'Confirmed' || bookingObj.status === 'Completed');
    setBookingsList([bookingObj, ...bookingsList]);
    setIsCreateBookingOpen(false);
    setNewBooking({ customerName: '', carName: '', pickupDate: '', returnDate: '', price: '', status: 'Pending' });
    toast.success(`Created reservation for ${bookingObj.customerName}!`);
  };

  const handleUpdateBookingStatus = (bookingId, newStatus) => {
    const matchedBooking = bookingsList.find(b => b.id === bookingId);
    if (!matchedBooking) return;

    setBookingsList(prevBookings => prevBookings.map(b => b.id === bookingId ? { ...b, status: newStatus } : b));
    
    // Update payment status
    setPaymentsList(prevPayments => prevPayments.map(p => {
      if (p.id === `pay-${bookingId}`) {
        let newPayStatus = 'Pending';
        if (newStatus === 'Confirmed' || newStatus === 'Completed') newPayStatus = 'Completed';
        else if (newStatus === 'Cancelled') newPayStatus = 'Refunded';
        return { ...p, status: newPayStatus };
      }
      return p;
    }));

    // Update customer stats
    const priceNum = parseInt(matchedBooking.price.replace(/[^\d]/g, '')) || 0;
    const oldStatus = matchedBooking.status;
    const wasConfirmed = oldStatus === 'Confirmed' || oldStatus === 'Completed';
    const isConfirmed = newStatus === 'Confirmed' || newStatus === 'Completed';

    let spentDiff = 0;
    if (!wasConfirmed && isConfirmed) {
      spentDiff = priceNum;
    } else if (wasConfirmed && !isConfirmed) {
      spentDiff = -priceNum;
    }

    if (spentDiff !== 0) {
      setCustomersList(prevList => prevList.map(c => {
        if (c.name.toLowerCase() === matchedBooking.customerName.toLowerCase()) {
          return {
            ...c,
            totalSpent: Math.max(0, c.totalSpent + spentDiff)
          };
        }
        return c;
      }));
    }
    
    // Update car status accordingly
    if (newStatus === 'Confirmed') {
      setCarsList(prevCars => prevCars.map(c => c.name === matchedBooking.carName ? { ...c, status: 'Booked' } : c));
      toast.success(`Booking ${bookingId} has been approved!`);
    } else if (newStatus === 'Completed' || newStatus === 'Cancelled') {
      setCarsList(prevCars => prevCars.map(c => c.name === matchedBooking.carName ? { ...c, status: 'Available' } : c));
      if (newStatus === 'Completed') {
        toast.success(`Booking ${bookingId} marked as completed.`);
      } else {
        toast.error(`Booking ${bookingId} has been cancelled.`);
      }
    }
  };

  const handleDeleteBooking = (bookingId) => {
    const matchedBooking = bookingsList.find(b => b.id === bookingId);
    if (!matchedBooking) return;

    if (matchedBooking.status === 'Confirmed' || matchedBooking.status === 'Pending') {
      setCarsList(prevCars => prevCars.map(c => c.name === matchedBooking.carName ? { ...c, status: 'Available' } : c));
    }

    const priceNum = parseInt(matchedBooking.price.replace(/[^\d]/g, '')) || 0;
    const wasConfirmed = matchedBooking.status === 'Confirmed' || matchedBooking.status === 'Completed';

    setCustomersList(prevList => prevList.map(c => {
      if (c.name.toLowerCase() === matchedBooking.customerName.toLowerCase()) {
        return {
          ...c,
          totalBookings: Math.max(0, c.totalBookings - 1),
          totalSpent: wasConfirmed ? Math.max(0, c.totalSpent - priceNum) : c.totalSpent
        };
      }
      return c;
    }));

    setPaymentsList(prevPayments => prevPayments.filter(p => p.id !== `pay-${bookingId}`));
    setBookingsList(prevBookings => prevBookings.filter(b => b.id !== bookingId));
    toast.error(`Booking ${bookingId} deleted.`);
  };

  const handleCreateReview = (newReview) => {
    const reviewObj = {
      id: `rev-${Date.now()}`,
      customerName: newReview.customerName,
      rating: parseInt(newReview.rating),
      comment: newReview.comment,
      carName: newReview.carName,
      date: new Date().toISOString().split('T')[0]
    };
    setReviewsList(prevReviews => [reviewObj, ...prevReviews]);
    toast.success("Thank you for your feedback! Review published.");
  };

  const handleResetSystemData = () => {
    localStorage.removeItem('carsList');
    localStorage.removeItem('bookingsList');
    localStorage.removeItem('customersList');
    localStorage.removeItem('paymentsList');
    localStorage.removeItem('reviewsList');
    localStorage.removeItem('adminSettings');
    
    setCarsList(initialCarsData);
    setBookingsList(recentBookingsData);
    setCustomersList(initialCustomersData);
    setPaymentsList(initialPaymentsData);
    setReviewsList(reviewsData);
    setAdminSettings(adminSettingsData);
    
    toast.warning("System database reset to initial defaults!", {
      position: "top-right",
      autoClose: 2000
    });
  };

  const handleRentCar = (car) => {
    if (car.status !== 'Available') {
      toast.error(`${car.name} is currently not available for rent.`);
      return;
    }
    setInquiryCar(car);
    setIsInquiryOpen(true);
  };

  const handleInquirySubmit = (inquiryData) => {
    const { car, customerName, email, phone, pickupDate, durationDays, dropoffLocation, purpose, specialRequests } = inquiryData;

    const pickup = new Date(pickupDate);
    const returnDt = new Date(pickup);
    returnDt.setDate(pickup.getDate() + durationDays);
    
    const totalAmount = car.pricePerDay * durationDays;

    const bookingObj = {
      id: `B-${Math.floor(1000 + Math.random() * 9000)}`,
      customerName,
      carName: car.name,
      pickupDate: pickupDate,
      returnDate: returnDt.toISOString().split('T')[0],
      status: 'Pending',
      price: `₹${totalAmount.toLocaleString()}`,
      dropoffLocation,
      purpose,
      specialRequests
    };

    // Create corresponding payment
    const paymentObj = {
      id: `pay-${bookingObj.id}`,
      invoiceId: `INV-2026-${Math.floor(100 + Math.random() * 900)}`,
      customerName,
      amount: totalAmount,
      date: bookingObj.pickupDate,
      method: 'Credit Card',
      status: 'Pending'
    };

    // Upsert customer profile
    const exists = customersList.find(c => c.email.toLowerCase() === email.toLowerCase());
    if (!exists) {
      const randomAvatar = localAvatars[Math.floor(Math.random() * localAvatars.length)];
      const customerObj = {
        id: `cust-${Date.now()}`,
        name: customerName,
        email: email,
        phone: phone,
        totalBookings: 1,
        totalSpent: 0,
        avatar: randomAvatar
      };
      setCustomersList(prevCustomers => [customerObj, ...prevCustomers]);
    } else {
      setCustomersList(prevList => prevList.map(c => {
        if (c.email.toLowerCase() === email.toLowerCase()) {
          return {
            ...c,
            totalBookings: c.totalBookings + 1
          };
        }
        return c;
      }));
    }

    setPaymentsList(prevPayments => [paymentObj, ...prevPayments]);
    setBookingsList(prevBookings => [bookingObj, ...prevBookings]);
    setCarsList(prevCars => prevCars.map(c => c.id === car.id ? { ...c, status: 'Booked' } : c));
    
    setIsInquiryOpen(false);
    setInquiryCar(null);

    toast.success(`Booking inquiry submitted for ${car.name}! Dynamic quote: ₹${totalAmount.toLocaleString()} for ${durationDays} days.`, {
      position: "top-right",
      autoClose: 5000
    });
  };

  const handleContactSubmit = (inquiry) => {
    const exists = customersList.find(c => c.email.toLowerCase() === inquiry.email.toLowerCase());
    if (!exists) {
      const newCustomerObj = {
        id: `cust-${Date.now()}`,
        name: inquiry.name,
        email: inquiry.email,
        phone: inquiry.phone,
        totalBookings: 0,
        totalSpent: 0,
        avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(inquiry.name)}&background=7C3AED&color=fff`
      };
      setCustomersList(prevCustomers => [newCustomerObj, ...prevCustomers]);
    }
  };

  return (
    <Router>
      <AppContent 
        darkMode={darkMode}
        sidebarCollapsed={sidebarCollapsed}
        mobileSidebarShow={mobileSidebarShow}
        carsList={carsList}
        setCarsList={setCarsList}
        bookingsList={bookingsList}
        setBookingsList={setBookingsList}
        customersList={customersList}
        setCustomersList={setCustomersList}
        reviewsList={reviewsList}
        paymentsList={paymentsList}
        setPaymentsList={setPaymentsList}
        adminSettings={adminSettings}
        isAddCarOpen={isAddCarOpen}
        setIsAddCarOpen={setIsAddCarOpen}
        isEditCarOpen={isEditCarOpen}
        setIsEditCarOpen={setIsEditCarOpen}
        isCreateBookingOpen={isCreateBookingOpen}
        setIsCreateBookingOpen={setIsCreateBookingOpen}
        isAddCustomerOpen={isAddCustomerOpen}
        setIsAddCustomerOpen={setIsAddCustomerOpen}
        isEditCustomerOpen={isEditCustomerOpen}
        setIsEditCustomerOpen={setIsEditCustomerOpen}
        editingCar={editingCar}
        setEditingCar={setEditingCar}
        editingCustomer={editingCustomer}
        setEditingCustomer={setEditingCustomer}
        newCar={newCar}
        setNewCar={setNewCar}
        newBooking={newBooking}
        setNewBooking={setNewBooking}
        newCustomer={newCustomer}
        setNewCustomer={setNewCustomer}
        handleToggleTheme={handleToggleTheme}
        handleToggleSidebar={handleToggleSidebar}
        handleToggleMobileSidebar={handleToggleMobileSidebar}
        handleAddCarSubmit={handleAddCarSubmit}
        handleOpenEditCar={handleOpenEditCar}
        handleEditCarSubmit={handleEditCarSubmit}
        handleDeleteCar={handleDeleteCar}
        handleAddCustomerSubmit={handleAddCustomerSubmit}
        handleOpenEditCustomer={handleOpenEditCustomer}
        handleEditCustomerSubmit={handleEditCustomerSubmit}
        handleDeleteCustomer={handleDeleteCustomer}
        handleDeleteReview={handleDeleteReview}
        handleCreateBookingSubmit={handleCreateBookingSubmit}
        onUpdateBookingStatus={handleUpdateBookingStatus}
        onDeleteBooking={handleDeleteBooking}
        isAdminAuthenticated={isAdminAuthenticated}
        setIsAdminAuthenticated={setIsAdminAuthenticated}
        onAddReview={handleCreateReview}
        onResetSystemData={handleResetSystemData}
        handleRentCar={handleRentCar}
        handleContactSubmit={handleContactSubmit}
        inquiryCar={inquiryCar}
        isInquiryOpen={isInquiryOpen}
        setIsInquiryOpen={setIsInquiryOpen}
        onInquirySubmit={handleInquirySubmit}
      />
    </Router>
  );
}

function AppContent({
  darkMode,
  sidebarCollapsed,
  mobileSidebarShow,
  carsList,
  setCarsList,
  bookingsList,
  setBookingsList,
  customersList,
  setCustomersList,
  reviewsList,
  paymentsList,
  adminSettings,
  isAddCarOpen,
  setIsAddCarOpen,
  isEditCarOpen,
  setIsEditCarOpen,
  isCreateBookingOpen,
  setIsCreateBookingOpen,
  isAddCustomerOpen,
  setIsAddCustomerOpen,
  isEditCustomerOpen,
  setIsEditCustomerOpen,
  editingCar,
  setEditingCar,
  editingCustomer,
  setEditingCustomer,
  newCar,
  setNewCar,
  newBooking,
  setNewBooking,
  newCustomer,
  setNewCustomer,
  handleToggleTheme,
  handleToggleSidebar,
  handleToggleMobileSidebar,
  handleAddCarSubmit,
  handleOpenEditCar,
  handleEditCarSubmit,
  handleDeleteCar,
  handleAddCustomerSubmit,
  handleOpenEditCustomer,
  handleEditCustomerSubmit,
  handleDeleteCustomer,
  handleDeleteReview,
  handleCreateBookingSubmit,
  onUpdateBookingStatus,
  onDeleteBooking,
  isAdminAuthenticated,
  setIsAdminAuthenticated,
  onAddReview,
  onResetSystemData,
  handleRentCar,
  handleContactSubmit,
  inquiryCar,
  isInquiryOpen,
  setIsInquiryOpen,
  onInquirySubmit
}) {
  const location = useLocation();
  const navigate = useNavigate();
  const isAdminPath = location.pathname.startsWith('/admin');

  if (isAdminPath) {
    if (!isAdminAuthenticated) {
      return (
        <AdminLogin 
          onLoginSuccess={() => setIsAdminAuthenticated(true)} 
          darkMode={darkMode}
        />
      );
    }
    return (
      <div className="dashboard-app" data-theme={darkMode ? 'dark' : 'light'}>
        <div className="dashboard-layout">
          
          <Sidebar 
            collapsed={sidebarCollapsed} 
            toggleCollapsed={handleToggleSidebar}
            mobileShow={mobileSidebarShow}
            toggleMobileShow={handleToggleMobileSidebar}
          />

          <div className={`main-panel ${sidebarCollapsed ? 'expanded' : ''}`}>
            
            <Navbar 
              darkMode={darkMode} 
              onToggleTheme={handleToggleTheme}
              onToggleMobileSidebar={handleToggleMobileSidebar}
              onLogout={() => {
                setIsAdminAuthenticated(false);
                localStorage.removeItem('isAdminAuthenticated');
                toast.info("Logged out successfully.");
                navigate('/');
              }}
            />

            <main className="dashboard-content">
              <Routes>
                <Route 
                  path="/admin" 
                  element={
                    <Dashboard 
                      onOpenAddCar={() => setIsAddCarOpen(true)}
                      onOpenCreateBooking={() => setIsCreateBookingOpen(true)}
                      onOpenAddCustomer={() => setIsAddCustomerOpen(true)}
                      bookingsList={bookingsList}
                      carsList={carsList}
                      customersList={customersList}
                      paymentsList={paymentsList}
                    />
                  } 
                />
                <Route 
                  path="/admin/cars" 
                  element={
                    <CarsAdmin 
                      carsList={carsList} 
                      onAddCar={() => setIsAddCarOpen(true)} 
                      onEditCar={handleOpenEditCar}
                      onDeleteCar={handleDeleteCar}
                    />
                  } 
                />
                <Route 
                  path="/admin/bookings" 
                  element={
                    <BookingsAdmin 
                      bookingsList={bookingsList} 
                      onOpenCreateBooking={() => setIsCreateBookingOpen(true)} 
                      onUpdateBookingStatus={onUpdateBookingStatus}
                      onDeleteBooking={onDeleteBooking}
                    />
                  } 
                />
                <Route 
                  path="/admin/customers" 
                  element={
                    <CustomersAdmin 
                      customersList={customersList} 
                      onOpenAddCustomer={() => setIsAddCustomerOpen(true)} 
                      onEditCustomer={handleOpenEditCustomer}
                      onDeleteCustomer={handleDeleteCustomer}
                    />
                  } 
                />
                <Route 
                  path="/admin/payments" 
                  element={
                    <PaymentsAdmin paymentsList={paymentsList} />
                  } 
                />
                <Route path="/admin/reports" element={<ReportsAdmin bookingsList={bookingsList} carsList={carsList} reviewsList={reviewsList} />} />
                <Route 
                  path="/admin/reviews" 
                  element={
                    <ReviewsAdmin 
                      reviewsList={reviewsList}
                      onDeleteReview={handleDeleteReview}
                    />
                  } 
                />
                <Route path="/admin/settings" element={<SettingsAdmin onResetSystemData={onResetSystemData} />} />
              </Routes>
            </main>
          </div>
        </div>

        {isAddCarOpen && (
          <div className="custom-modal-backdrop" onClick={() => setIsAddCarOpen(false)}>
            <div className="custom-modal" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h5 className="mb-0 fw-bold">Add New Fleet Vehicle</h5>
                <button className="btn-close text-reset" onClick={() => setIsAddCarOpen(false)} aria-label="Close"></button>
              </div>
              <form onSubmit={handleAddCarSubmit}>
                <div className="modal-body text-start">
                  <div className="mb-3">
                    <label htmlFor="carName" className="form-label">Car Model Name *</label>
                    <input 
                      type="text" 
                      id="carName"
                      className="form-control" 
                      placeholder="e.g. Tesla Model Y" 
                      value={newCar.name}
                      onChange={(e) => setNewCar({ ...newCar, name: e.target.value })}
                      required
                    />
                  </div>
                  
                  <div className="row">
                    <div className="col-6 mb-3">
                      <label htmlFor="carType" className="form-label">Category</label>
                      <select 
                        id="carType"
                        className="form-select"
                        value={newCar.type}
                        onChange={(e) => setNewCar({ ...newCar, type: e.target.value })}
                      >
                        <option value="SUV">SUV</option>
                        <option value="Sedan">Sedan</option>
                        <option value="Sports">Sports</option>
                        <option value="Luxury">Luxury</option>
                        <option value="Supercar">Supercar</option>
                      </select>
                    </div>
                    <div className="col-6 mb-3">
                      <label htmlFor="carPrice" className="form-label">Price / Day (₹) *</label>
                      <input 
                        type="number" 
                        id="carPrice"
                        className="form-control" 
                        placeholder="e.g. 15000" 
                        value={newCar.pricePerDay}
                        onChange={(e) => setNewCar({ ...newCar, pricePerDay: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-6 mb-3">
                      <label htmlFor="carFuel" className="form-label">Fuel Type</label>
                      <select 
                        id="carFuel"
                        className="form-select"
                        value={newCar.fuel}
                        onChange={(e) => setNewCar({ ...newCar, fuel: e.target.value })}
                      >
                        <option value="Electric">Electric</option>
                        <option value="Petrol">Petrol</option>
                        <option value="Diesel">Diesel</option>
                        <option value="Hybrid">Hybrid</option>
                      </select>
                    </div>
                    <div className="col-6 mb-3">
                      <label htmlFor="carTransmission" className="form-label">Transmission</label>
                      <select 
                        id="carTransmission"
                        className="form-select"
                        value={newCar.transmission}
                        onChange={(e) => setNewCar({ ...newCar, transmission: e.target.value })}
                      >
                        <option value="Automatic">Automatic</option>
                        <option value="Manual">Manual</option>
                      </select>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-6 mb-3">
                      <label htmlFor="carStatus" className="form-label">Status</label>
                      <select 
                        id="carStatus"
                        className="form-select"
                        value={newCar.status}
                        onChange={(e) => setNewCar({ ...newCar, status: e.target.value })}
                      >
                        <option value="Available">Available</option>
                        <option value="Booked">Booked</option>
                        <option value="Maintenance">Maintenance</option>
                      </select>
                    </div>
                    <div className="col-6 mb-3">
                      <label htmlFor="carImage" className="form-label">Select Car Image *</label>
                      <select 
                        id="carImage"
                        className="form-select"
                        value={newCar.imageIndex}
                        onChange={(e) => setNewCar({ ...newCar, imageIndex: parseInt(e.target.value) })}
                      >
                        {localCarImages.map((img, idx) => (
                          <option key={idx} value={idx}>{img.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-outline-light text-muted border border-secondary border-opacity-20" onClick={() => setIsAddCarOpen(false)}>Cancel</button>
                  <button type="submit" className="btn btn-primary">Save Vehicle</button>
                </div>
              </form>
            </div>
          </div>
        )}

        {isEditCarOpen && editingCar && (
          <div className="custom-modal-backdrop" onClick={() => { setIsEditCarOpen(false); setEditingCar(null); }}>
            <div className="custom-modal" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h5 className="mb-0 fw-bold">Edit Vehicle Details</h5>
                <button className="btn-close text-reset" onClick={() => { setIsEditCarOpen(false); setEditingCar(null); }} aria-label="Close"></button>
              </div>
              <form onSubmit={handleEditCarSubmit}>
                <div className="modal-body text-start">
                  <div className="mb-3">
                    <label htmlFor="editCarName" className="form-label">Car Model Name *</label>
                    <input 
                      type="text" 
                      id="editCarName"
                      className="form-control" 
                      value={editingCar.name}
                      onChange={(e) => setEditingCar({ ...editingCar, name: e.target.value })}
                      required
                    />
                  </div>
                  
                  <div className="row">
                    <div className="col-6 mb-3">
                      <label htmlFor="editCarType" className="form-label">Category</label>
                      <select 
                        id="editCarType"
                        className="form-select"
                        value={editingCar.type}
                        onChange={(e) => setEditingCar({ ...editingCar, type: e.target.value })}
                      >
                        <option value="SUV">SUV</option>
                        <option value="Sedan">Sedan</option>
                        <option value="Sports">Sports</option>
                        <option value="Luxury">Luxury</option>
                        <option value="Supercar">Supercar</option>
                      </select>
                    </div>
                    <div className="col-6 mb-3">
                      <label htmlFor="editCarPrice" className="form-label">Price / Day (₹) *</label>
                      <input 
                        type="number" 
                        id="editCarPrice"
                        className="form-control" 
                        value={editingCar.pricePerDay}
                        onChange={(e) => setEditingCar({ ...editingCar, pricePerDay: parseFloat(e.target.value) || 0 })}
                        required
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-6 mb-3">
                      <label htmlFor="editCarFuel" className="form-label">Fuel Type</label>
                      <select 
                        id="editCarFuel"
                        className="form-select"
                        value={editingCar.fuel}
                        onChange={(e) => setEditingCar({ ...editingCar, fuel: e.target.value })}
                      >
                        <option value="Electric">Electric</option>
                        <option value="Petrol">Petrol</option>
                        <option value="Diesel">Diesel</option>
                        <option value="Hybrid">Hybrid</option>
                      </select>
                    </div>
                    <div className="col-6 mb-3">
                      <label htmlFor="editCarTransmission" className="form-label">Transmission</label>
                      <select 
                        id="editCarTransmission"
                        className="form-select"
                        value={editingCar.transmission}
                        onChange={(e) => setEditingCar({ ...editingCar, transmission: e.target.value })}
                      >
                        <option value="Automatic">Automatic</option>
                        <option value="Manual">Manual</option>
                      </select>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-6 mb-3">
                      <label htmlFor="editCarStatus" className="form-label">Status</label>
                      <select 
                        id="editCarStatus"
                        className="form-select"
                        value={editingCar.status}
                        onChange={(e) => setEditingCar({ ...editingCar, status: e.target.value })}
                      >
                        <option value="Available">Available</option>
                        <option value="Booked">Booked</option>
                        <option value="Maintenance">Maintenance</option>
                      </select>
                    </div>
                    <div className="col-6 mb-3">
                      <label htmlFor="editCarImage" className="form-label">Select Car Image *</label>
                      <select 
                        id="editCarImage"
                        className="form-select"
                        value={editingCar.imageIndex}
                        onChange={(e) => setEditingCar({ ...editingCar, imageIndex: parseInt(e.target.value) })}
                      >
                        {localCarImages.map((img, idx) => (
                          <option key={idx} value={idx}>{img.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-outline-light text-muted border border-secondary border-opacity-20" onClick={() => { setIsEditCarOpen(false); setEditingCar(null); }}>Cancel</button>
                  <button type="submit" className="btn btn-primary">Update Vehicle</button>
                </div>
              </form>
            </div>
          </div>
        )}

        {isCreateBookingOpen && (
          <div className="custom-modal-backdrop" onClick={() => setIsCreateBookingOpen(false)}>
            <div className="custom-modal" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h5 className="mb-0 fw-bold">Create New Booking</h5>
                <button className="btn-close text-reset" onClick={() => setIsCreateBookingOpen(false)} aria-label="Close"></button>
              </div>
              <form onSubmit={handleCreateBookingSubmit}>
                <div className="modal-body text-start">
                  <div className="mb-3">
                    <label htmlFor="bkCust" className="form-label">Customer Name *</label>
                    <input 
                      type="text" 
                      id="bkCust"
                      className="form-control" 
                      placeholder="e.g. Bruce Banner" 
                      value={newBooking.customerName}
                      onChange={(e) => setNewBooking({ ...newBooking, customerName: e.target.value })}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="bkCar" className="form-label">Select Car *</label>
                    <select 
                      id="bkCar"
                      className="form-select"
                      value={newBooking.carName}
                      onChange={(e) => setNewBooking({ ...newBooking, carName: e.target.value })}
                      required
                    >
                      <option value="">-- Choose a Fleet Car --</option>
                      {carsList.map(c => (
                        <option key={c.id} value={c.name}>{c.name} (₹{c.pricePerDay}/day) - {c.status}</option>
                      ))}
                    </select>
                  </div>

                  <div className="row">
                    <div className="col-6 mb-3">
                      <label htmlFor="bkPickup" className="form-label">Pickup Date *</label>
                      <input 
                        type="date" 
                        id="bkPickup"
                        className="form-control" 
                        value={newBooking.pickupDate}
                        onChange={(e) => setNewBooking({ ...newBooking, pickupDate: e.target.value })}
                        required
                      />
                    </div>
                    <div className="col-6 mb-3">
                      <label htmlFor="bkReturn" className="form-label">Return Date *</label>
                      <input 
                        type="date" 
                        id="bkReturn"
                        className="form-control" 
                        value={newBooking.returnDate}
                        onChange={(e) => setNewBooking({ ...newBooking, returnDate: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="bkStatus" className="form-label">Reservation Status</label>
                    <select 
                      id="bkStatus"
                      className="form-select"
                      value={newBooking.status}
                      onChange={(e) => setNewBooking({ ...newBooking, status: e.target.value })}
                    >
                      <option value="Pending">Pending</option>
                      <option value="Confirmed">Confirmed</option>
                      <option value="Completed">Completed</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-outline-light text-muted border border-secondary border-opacity-20" onClick={() => setIsCreateBookingOpen(false)}>Cancel</button>
                  <button type="submit" className="btn btn-primary">Create Booking</button>
                </div>
              </form>
            </div>
          </div>
        )}

        {isAddCustomerOpen && (
          <div className="custom-modal-backdrop" onClick={() => setIsAddCustomerOpen(false)}>
            <div className="custom-modal" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h5 className="mb-0 fw-bold">Register Customer Profile</h5>
                <button className="btn-close text-reset" onClick={() => setIsAddCustomerOpen(false)} aria-label="Close"></button>
              </div>
              <form onSubmit={handleAddCustomerSubmit}>
                <div className="modal-body text-start">
                  <div className="mb-3">
                    <label htmlFor="custName" className="form-label">Customer Name *</label>
                    <input 
                      type="text" 
                      id="custName"
                      className="form-control" 
                      placeholder="e.g. Natasha Romanoff" 
                      value={newCustomer.name}
                      onChange={(e) => setNewCustomer({ ...newCustomer, name: e.target.value })}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="custEmail" className="form-label">Email ID *</label>
                    <input 
                      type="email" 
                      id="custEmail"
                      className="form-control" 
                      placeholder="natasha@avengers.org" 
                      value={newCustomer.email}
                      onChange={(e) => setNewCustomer({ ...newCustomer, email: e.target.value })}
                      required
                    />
                  </div>

                  <div className="row">
                    <div className="col-6 mb-3">
                      <label htmlFor="custPhone" className="form-label">Phone Number *</label>
                      <input 
                        type="text" 
                        id="custPhone"
                        className="form-control" 
                        placeholder="+1 (555) 000-1111" 
                        value={newCustomer.phone}
                        onChange={(e) => setNewCustomer({ ...newCustomer, phone: e.target.value })}
                        required
                      />
                    </div>
                    <div className="col-6 mb-3">
                      <label htmlFor="custSpent" className="form-label">Initial Spent Amount (₹)</label>
                      <input 
                        type="number" 
                        id="custSpent"
                        className="form-control" 
                        placeholder="e.g. 120000" 
                        value={newCustomer.initialSpent}
                        onChange={(e) => setNewCustomer({ ...newCustomer, initialSpent: e.target.value })}
                      />
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-outline-light text-muted border border-secondary border-opacity-20" onClick={() => setIsAddCustomerOpen(false)}>Cancel</button>
                  <button type="submit" className="btn btn-primary">Add Customer</button>
                </div>
              </form>
            </div>
          </div>
        )}

        {isEditCustomerOpen && editingCustomer && (
          <div className="custom-modal-backdrop" onClick={() => { setIsEditCustomerOpen(false); setEditingCustomer(null); }}>
            <div className="custom-modal" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h5 className="mb-0 fw-bold">Edit Customer Details</h5>
                <button className="btn-close text-reset" onClick={() => { setIsEditCustomerOpen(false); setEditingCustomer(null); }} aria-label="Close"></button>
              </div>
              <form onSubmit={handleEditCustomerSubmit}>
                <div className="modal-body text-start">
                  <div className="mb-3">
                    <label htmlFor="editCustName" className="form-label">Customer Name *</label>
                    <input 
                      type="text" 
                      id="editCustName"
                      className="form-control" 
                      value={editingCustomer.name}
                      onChange={(e) => setEditingCustomer({ ...editingCustomer, name: e.target.value })}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="editCustEmail" className="form-label">Email ID *</label>
                    <input 
                      type="email" 
                      id="editCustEmail"
                      className="form-control" 
                      value={editingCustomer.email}
                      onChange={(e) => setEditingCustomer({ ...editingCustomer, email: e.target.value })}
                      required
                    />
                  </div>

                  <div className="row">
                    <div className="col-12 mb-3">
                      <label htmlFor="editCustPhone" className="form-label">Phone Number *</label>
                      <input 
                        type="text" 
                        id="editCustPhone"
                        className="form-control" 
                        value={editingCustomer.phone}
                        onChange={(e) => setEditingCustomer({ ...editingCustomer, phone: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-outline-light text-muted border border-secondary border-opacity-20" onClick={() => { setIsEditCustomerOpen(false); setEditingCustomer(null); }}>Cancel</button>
                  <button type="submit" className="btn btn-primary">Update Profile</button>
                </div>
              </form>
            </div>
          </div>
        )}

        <ToastContainer 
          position="top-right" 
          autoClose={3000} 
          hideProgressBar={false} 
          newestOnTop={false} 
          closeOnClick 
          rtl={false} 
          pauseOnFocusLoss 
          draggable 
          pauseOnHover 
          theme={darkMode ? "dark" : "light"}
        />
      </div>
    );
  }

  // Customer website output
  return (
    <div className="customer-app" style={{ background: 'var(--website-bg-dark, #0B0F19)', color: '#ffffff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <style>
        {`
          :root {
            --website-primary: ${adminSettings.themeColors.primary};
            --website-secondary: ${adminSettings.themeColors.secondary};
            --website-bg-dark: ${adminSettings.themeColors.bgDark};
            --website-bg-light: ${adminSettings.themeColors.bgLight};
            --website-card-bg: ${adminSettings.themeColors.cardDark};
            --website-text-main: ${adminSettings.themeColors.textDark};
          }
          
          /* Customer overrides */
          .customer-app {
            background-color: var(--website-bg-dark) !important;
            color: var(--website-text-main) !important;
            font-family: 'Inter', sans-serif !important;
          }
          
          .customer-app h1, .customer-app h2, .customer-app h3, .customer-app h4, .customer-app h5, .customer-app h6 {
            color: #ffffff !important;
          }
          
          .customer-app a {
            color: var(--website-secondary);
          }
          
          .customer-app a:hover {
            color: var(--website-primary);
          }
          
          /* Carousel customization */
          .customer-app .carousel-indicators [data-bs-target] {
            background-color: var(--website-secondary);
          }
          
          .customer-app .carousel-control-prev-icon,
          .customer-app .carousel-control-next-icon {
            filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.5));
          }
        `}
      </style>

      <CustomerNavbar websiteName={adminSettings.websiteName} />

      <main style={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<Home carsList={carsList} reviewsList={reviewsList} adminSettings={adminSettings} onRent={handleRentCar} />} />
          <Route path="/cars" element={<CarsPage carsList={carsList} onRent={handleRentCar} />} />
          <Route path="/cars/:id" element={<CarDetailsPage carsList={carsList} onRent={handleRentCar} />} />
          <Route path="/about" element={<AboutPage about={adminSettings.aboutContent} />} />
          <Route path="/reviews" element={<ReviewsPage reviewsList={reviewsList} carsList={carsList} onAddReview={onAddReview} />} />
          <Route path="/contact" element={<ContactPage contact={adminSettings.contactInformation} onContactSubmit={handleContactSubmit} />} />
        </Routes>
      </main>

      <CustomerFooter footer={adminSettings.footerContent} contact={adminSettings.contactInformation} websiteName={adminSettings.websiteName} />

      <InquiryModal 
        car={inquiryCar}
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        onSubmit={onInquirySubmit}
      />

      <ToastContainer 
        position="top-right" 
        autoClose={3000} 
        hideProgressBar={false} 
        newestOnTop={false} 
        closeOnClick 
        rtl={false} 
        pauseOnFocusLoss 
        draggable 
        pauseOnHover 
        theme="dark"
      />
    </div>
  );
}

export default App;
