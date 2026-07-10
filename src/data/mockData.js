import car1 from '../assets/car1.png';
import car2 from '../assets/car2.png';
import car3 from '../assets/car3.png';
import car4 from '../assets/car4.png';
import car5 from '../assets/car5.png';
import car6 from '../assets/car6.png';
import car7 from '../assets/car7.png';
import car8 from '../assets/car8.png';
import car9 from '../assets/car9.png';
import car10 from '../assets/car10.png';
import car11 from '../assets/car11.png';
import car12 from '../assets/car12.png';
import car13 from '../assets/car13.png';
import car14 from '../assets/car14.png';
import car15 from '../assets/car15.png';
import car16 from '../assets/car16.png';

import r1 from '../assets/r1.jpg';
import r2 from '../assets/r2.jpg';
import r3 from '../assets/r3.jpg';
import r4 from '../assets/r4.jpg';
import r5 from '../assets/r5.jpg';
import r6 from '../assets/r6.jpg';

export const statsData = [
  {
    id: 'total-cars',
    title: 'Total Cars',
    value: '36',
    icon: 'fa-car',
    gradient: 'linear-gradient(135deg, #7C3AED 0%, #06B6D4 100%)',
    change: '+3 new cars this month',
  },
  {
    id: 'available-cars',
    title: 'Available Cars',
    value: '22',
    icon: 'fa-check-circle',
    gradient: 'linear-gradient(135deg, #0F172A 0%, #7C3AED 100%)',
    change: 'Ready for rent',
  },
  {
    id: 'booked-cars',
    title: 'Booked Cars',
    value: '11',
    icon: 'fa-key',
    gradient: 'linear-gradient(135deg, #334155 0%, #4F46E5 100%)',
    change: 'Active on road',
  },
  {
    id: 'total-customers',
    title: 'Total Customers',
    value: '1,248',
    icon: 'fa-users',
    gradient: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)',
    change: '+12% increase',
  },
  {
    id: 'total-revenue',
    title: 'Total Revenue',
    value: '₹8,00,950',
    icon: 'fa-rupee-sign',
    gradient: 'linear-gradient(135deg, #06B6D4 0%, #3B82F6 100%)',
    change: '+15% from last month',
  },
  {
    id: 'pending-bookings',
    title: 'Pending Bookings',
    value: '3',
    icon: 'fa-clock',
    gradient: 'linear-gradient(135deg, #EF4444 0%, #7C3AED 100%)',
    change: 'Needs confirmation',
  },
];

export const monthlyRevenueData = [
  { month: 'Jan', Bookings: 45, Revenue: 302120 },
  { month: 'Feb', Bookings: 52, Revenue: 355240 },
  { month: 'Mar', Bookings: 68, Revenue: 474760 },
  { month: 'Apr', Bookings: 85, Revenue: 566060 },
  { month: 'May', Bookings: 99, Revenue: 683920 },
  { month: 'Jun', Bookings: 124, Revenue: 800950 },
];

export const categoryDistributionData = [
  { name: 'SUV', value: 45 },
  { name: 'Sedan', value: 30 },
  { name: 'Sports', value: 15 },
  { name: 'Luxury', value: 10 },
];

export const mostRentedCarsData = [
  { name: 'Tesla Model S', rentals: 42, revenue: 139440, color: '#3B82F6' },
  { name: 'Mustang Shelby GT', rentals: 35, revenue: 162680, color: '#F59E0B' },
  { name: 'Range Rover Sport', rentals: 28, revenue: 185920, color: '#10B981' },
  { name: 'Audi Q7', rentals: 25, revenue: 103750, color: '#8B5CF6' },
  { name: 'Porsche 911 Carrera', rentals: 18, revenue: 209160, color: '#EF4444' },
];

export const recentBookingsData = [
  {
    id: 'B-1029',
    customerName: 'David Miller',
    carName: 'Tesla Model S',
    pickupDate: '2026-06-12',
    returnDate: '2026-06-15',
    status: 'Confirmed',
    price: '₹9,960',
  },
  {
    id: 'B-1028',
    customerName: 'Smriti Mandhana',
    carName: 'Mustang Shelby GT',
    pickupDate: '2026-06-10',
    returnDate: '2026-06-14',
    status: 'Completed',
    price: '₹18,592',
  },
  {
    id: 'B-1027',
    customerName: 'Ricky Ponting',
    carName: 'Porsche 911 Carrera',
    pickupDate: '2026-06-14',
    returnDate: '2026-06-18',
    status: 'Pending',
    price: '₹46,480',
  },
  {
    id: 'B-1026',
    customerName: 'Virat Kohli',
    carName: 'Mercedes G-Wagon',
    pickupDate: '2026-06-08',
    returnDate: '2026-06-10',
    status: 'Completed',
    price: '₹58,100',
  },
  {
    id: 'B-1025',
    customerName: 'Mitchell Starc',
    carName: 'Honda Civic Type R',
    pickupDate: '2026-06-16',
    returnDate: '2026-06-19',
    status: 'Pending',
    price: '₹3,984',
  },
  {
    id: 'B-1024',
    customerName: 'John Wick',
    carName: 'Mustang Shelby GT',
    pickupDate: '2026-06-05',
    returnDate: '2026-06-07',
    status: 'Cancelled',
    price: '₹9,296',
  },
];

export const recentActivityData = [
  {
    id: 'act-1',
    type: 'booking_created',
    text: 'New booking B-1027 pending review for Porsche 911',
    time: '5 mins ago',
    icon: 'fa-calendar-plus',
    badgeClass: 'bg-primary-subtle text-primary',
  },
  {
    id: 'act-2',
    type: 'payment_received',
    text: 'Payment of ₹18,592 received from Smriti Mandhana (B-1028)',
    time: '2 hours ago',
    icon: 'fa-receipt',
    badgeClass: 'bg-success-subtle text-success',
  },
  {
    id: 'act-3',
    type: 'car_returned',
    text: 'Tesla Model S returned and checked by inspector',
    time: '5 hours ago',
    icon: 'fa-undo',
    badgeClass: 'bg-info-subtle text-info',
  },
  {
    id: 'act-4',
    type: 'customer_added',
    text: 'New customer profile created for Sir Viv Richerd',
    time: '1 day ago',
    icon: 'fa-user-plus',
    badgeClass: 'bg-warning-subtle text-warning',
  },
];

export const initialCarsData = [
  {
    id: 'car-1',
    name: 'Tesla Model S',
    type: 'Electric / Sedan',
    pricePerDay: 3320,
    price: '₹3,320/day',
    status: 'Booked',
    image: car11,
    year: 2023,
    fuel: 'Electric',
    transmission: 'Automatic',
  },
  {
    id: 'car-2',
    name: 'BMW M4 Coupé',
    type: 'Sports / Coupe',
    pricePerDay: 4648,
    price: '₹4,648/day',
    status: 'Booked',
    image: car2,
    year: 2022,
    fuel: 'Petrol',
    transmission: 'Automatic',
  },
  {
    id: 'car-3',
    name: 'Range Rover Sport',
    type: 'Luxury / SUV',
    pricePerDay: 6640,
    price: '₹6,640/day',
    status: 'Available',
    image: car9,
    year: 2023,
    fuel: 'Diesel',
    transmission: 'Automatic',
  },
  {
    id: 'car-4',
    name: 'Porsche 911 Carrera',
    type: 'Supercar',
    pricePerDay: 11620,
    price: '₹11,620/day',
    status: 'Available',
    image: car10,
    year: 2021,
    fuel: 'Petrol',
    transmission: 'Automatic',
  },
  {
    id: 'car-5',
    name: 'Mercedes G-Wagon',
    type: 'Luxury / SUV',
    pricePerDay: 7470,
    price: '₹7,470/day',
    status: 'Available',
    image: car3,
    year: 2022,
    fuel: 'Petrol',
    transmission: 'Automatic',
  },
  {
    id: 'car-6',
    name: 'Mustang Shelby GT',
    type: 'Sports / Coupe',
    pricePerDay: 5312,
    price: '₹5,312/day',
    status: 'Maintenance',
    image: car8,
    year: 2022,
    fuel: 'Petrol',
    transmission: 'Manual',
  },
  {
    id: 'car-7',
    name: 'Toyota Fortuner',
    type: 'Luxury / SUV',
    pricePerDay: 2988,
    price: '₹2,988/day',
    status: 'Available',
    image: car4,
    year: 2023,
    fuel: 'Diesel',
    transmission: 'Automatic',
  },
  {
    id: 'car-8',
    name: 'Audi Q7',
    type: 'Luxury / SUV',
    pricePerDay: 4980,
    price: '₹4,980/day',
    status: 'Available',
    image: car12,
    year: 2022,
    fuel: 'Hybrid',
    transmission: 'Automatic',
  },
  {
    id: 'car-9',
    name: 'Jeep Wrangler Rubicon',
    type: 'Luxury / SUV',
    pricePerDay: 3652,
    price: '₹3,652/day',
    status: 'Available',
    image: car13,
    year: 2023,
    fuel: 'Petrol',
    transmission: 'Automatic',
  },
  {
    id: 'car-10',
    name: 'Honda Civic Type R',
    type: 'Sports / Coupe',
    pricePerDay: 2158,
    price: '₹2,158/day',
    status: 'Available',
    image: car14,
    year: 2022,
    fuel: 'Petrol',
    transmission: 'Manual',
  },
  {
    id: 'car-11',
    name: 'Lexus RX 500h',
    type: 'Luxury / SUV',
    pricePerDay: 4316,
    price: '₹4,316/day',
    status: 'Available',
    image: car16,
    year: 2023,
    fuel: 'Hybrid',
    transmission: 'Automatic',
  },
  {
    id: 'car-12',
    name: 'Suzuki Swift Sport',
    type: 'Sports / Hatchback',
    pricePerDay: 1328,
    price: '₹1,328/day',
    status: 'Available',
    image: car1,
    year: 2022,
    fuel: 'Petrol',
    transmission: 'Manual',
  },
  {
    id: 'car-13',
    name: 'Hyundai Creta',
    type: 'SUV',
    pricePerDay: 1800,
    price: '₹1,800/day',
    status: 'Available',
    image: car5,
    year: 2023,
    fuel: 'Petrol',
    transmission: 'Manual',
  },
  {
    id: 'car-14',
    name: 'Kia Seltos',
    type: 'SUV',
    pricePerDay: 2000,
    price: '₹2,000/day',
    status: 'Available',
    image: car6,
    year: 2023,
    fuel: 'Petrol',
    transmission: 'Automatic',
  },
  {
    id: 'car-15',
    name: 'Mahindra Thar',
    type: 'SUV / Offroad',
    pricePerDay: 2500,
    price: '₹2,500/day',
    status: 'Available',
    image: car7,
    year: 2023,
    fuel: 'Diesel',
    transmission: 'Manual',
  },
  {
    id: 'car-16',
    name: 'Toyota Innova Hycross',
    type: 'Luxury / SUV',
    pricePerDay: 3500,
    price: '₹3,500/day',
    status: 'Available',
    image: car15,
    year: 2024,
    fuel: 'Hybrid',
    transmission: 'Automatic',
  }
];

export const initialCustomersData = [
  {
    id: 'cust-1',
    name: 'David Miller',
    email: 'david.miller@gmail.com',
    phone: '+1 (555) 019-2834',
    totalBookings: 8,
    totalSpent: 79680,
    avatar: r1,
  },
  {
    id: 'cust-2',
    name: 'Smriti Mandhana',
    email: 'smriti.mandhana@gmail.com',
    phone: '+1 (555) 045-8822',
    totalBookings: 12,
    totalSpent: 147740,
    avatar: r2,
  },
  {
    id: 'cust-3',
    name: 'Ricky Ponting',
    email: 'ricky.ponting@gmail.com',
    phone: '+1 (555) 999-0000',
    totalBookings: 15,
    totalSpent: 308760,
    avatar: r3,
  },
  {
    id: 'cust-4',
    name: 'Virat Kohli',
    email: 'virat.kohli@gmail.com',
    phone: '+1 (555) 444-3000',
    totalBookings: 22,
    totalSpent: 471440,
    avatar: r4,
  },
  {
    id: 'cust-5',
    name: 'Mitchell Starc',
    email: 'mitchell.starc@gmail.com',
    phone: '+1 (555) 123-4567',
    totalBookings: 3,
    totalSpent: 11952,
    avatar: r5,
  },
  {
    id: 'cust-6',
    name: 'Sir Viv Richerd',
    email: 'viv.richerd@gmail.com',
    phone: '+1 (555) 777-8888',
    totalBookings: 6,
    totalSpent: 65570,
    avatar: r6,
  },
];

export const initialPaymentsData = [
  {
    id: 'pay-1',
    invoiceId: 'INV-2026-042',
    customerName: 'Smriti Mandhana',
    amount: 18592,
    date: '2026-06-13',
    method: 'Credit Card',
    status: 'Completed',
  },
  {
    id: 'pay-2',
    invoiceId: 'INV-2026-041',
    customerName: 'David Miller',
    amount: 9960,
    date: '2026-06-12',
    method: 'PayPal',
    status: 'Completed',
  },
  {
    id: 'pay-3',
    invoiceId: 'INV-2026-040',
    customerName: 'Virat Kohli',
    amount: 58100,
    date: '2026-06-10',
    method: 'Bank Transfer',
    status: 'Completed',
  },
  {
    id: 'pay-4',
    invoiceId: 'INV-2026-039',
    customerName: 'John Wick',
    amount: 9296,
    date: '2026-06-07',
    method: 'Credit Card',
    status: 'Refunded',
  },
  {
    id: 'pay-5',
    invoiceId: 'INV-2026-038',
    customerName: 'Ricky Ponting',
    amount: 46480,
    date: '2026-06-14',
    method: 'Bank Transfer',
    status: 'Pending',
  },
  {
    id: 'pay-6',
    invoiceId: 'INV-2026-037',
    customerName: 'Mitchell Starc',
    amount: 3984,
    date: '2026-06-16',
    method: 'Credit Card',
    status: 'Pending',
  },
];

export const reviewsData = [
  {
    id: 'rev-1',
    customerName: 'David Miller',
    rating: 5,
    comment: 'The Mustang GT was in pristine condition. Accelerates beautifully. Quick handover. Will definitely rent again!',
    date: '2026-06-14',
    carName: 'Ford Mustang GT',
  },
  {
    id: 'rev-2',
    customerName: 'Smriti Mandhana',
    rating: 4,
    comment: 'Great service. The Audi R8 was a blast to drive. Only complaint is the tire pressure was slightly low, but fixed immediately by support.',
    date: '2026-06-09',
    carName: 'Audi R8 Spyder',
  },
  {
    id: 'rev-3',
    customerName: 'Ricky Ponting',
    rating: 5,
    comment: 'Seamless renting process! Autopilot on the Tesla Model 3 worked perfectly for my road trip. Extremely clean interior.',
    date: '2026-06-05',
    carName: 'Tesla Model 3',
  },
  {
    id: 'rev-4',
    customerName: 'Virat Kohli',
    rating: 5,
    comment: 'Professional staff and gorgeous fleet. The Range Rover was spotless and spacious. Five stars!',
    date: '2026-06-02',
    carName: 'Range Rover Sport',
  },
];

export const adminSettingsData = {
  websiteName: 'DriveX',
  logoText: 'DriveX',
  promotionalText: '✦ Premium Rental Experience: Get 15% off on your first reservation with code DRIVEX15! ✦',
  themeColors: {
    primary: '#7C3AED',     // Royal Purple
    secondary: '#06B6D4',   // Cyan Accent
    bgDark: '#0B0F19',      // Sleek Dark Background
    bgLight: '#F8FAFC',     // Clean Light Background
    cardDark: '#111827',    // Dark Card
    cardLight: '#FFFFFF',   // Light Card
    textDark: '#F3F4F6',    // Dark Mode Text
    textLight: '#1F2937'    // Light Mode Text
  },
  heroBanner: {
    title: 'Experience The Elite Drive',
    subtitle: 'Rent uncompromising luxury, sports, and supercar vehicles at competitive rates. Premium fleet, seamless booking, and 24/7 support.',
    ctaText: 'Explore Fleet',
    slides: [
      {
        image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1800&q=80',
        title: 'Uncompromising Luxury. Seamless Journeys.',
        subtitle: 'Experience the prestige and thrill of driving our curated fleet of premium vehicles.'
      },
      {
        image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1800&q=80',
        title: 'Performance Redefined.',
        subtitle: 'Unleash the power of high-performance sports cars and supercars tailored to your desires.'
      },
      {
        image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1800&q=80',
        title: 'Sleek & Sophisticated Travel.',
        subtitle: 'Elevate your business trips and luxury weekends with elite executive sedans.'
      }
    ]
  },
  aboutContent: {
    story: 'Founded with a vision to redefine luxury travel, DriveX has been at the forefront of premium car rentals for over a decade. We curate only the most exceptional high-performance and luxury vehicles to deliver an unparalleled driving experience. From elite corporate travels to thrilling weekend escapes, our service is tailored to your highest expectations.',
    mission: 'To deliver a seamless, prestige rental experience by combining an elite fleet of vehicles with state-of-the-art booking technology and unwavering, high-touch client support.',
    vision: 'To be the ultimate global symbol of luxury vehicle rentals, inspiring sophisticated journeys and setting the industry standard for customer-centric elegance.'
  },
  contactInformation: {
    phone: '+91 78782 89727',
    email: 'drivex007@gmail.com',
    address: "Shopper's Plaza, Chimanlal Girdharlal Rd, Navrangpura, Ahmedabad, Gujarat 380009",
    mapCoords: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.6961474274945!2d72.55938887603507!3d23.034954479164803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f509e53bf9%3A0xe54d8fb85c5717ef!2sShoppers%20Plaza%203!5e0!3m2!1sen!2sin!4v1718430000000!5m2!1sen!2sin',
    socialMedia: [
      { name: 'facebook', url: 'https://facebook.com/drivex', icon: 'FaFacebookF' },
      { name: 'twitter', url: 'https://twitter.com/drivex', icon: 'FaTwitter' },
      { name: 'instagram', url: 'https://instagram.com/drivex', icon: 'FaInstagram' },
      { name: 'linkedin', url: 'https://linkedin.com/company/drivex', icon: 'FaLinkedinIn' }
    ]
  },
  footerContent: {
    description: 'DriveX is the ultimate luxury car rental service. Rent SUVs, sedans, sports cars, and supercars with ease. Your journey, our priority.',
    copyright: '© 2026 DriveX Car Rentals. All Rights Reserved.'
  }
};

