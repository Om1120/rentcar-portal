# DriveX - Premium Car Rental & Admin Fleet Portal

DriveX is a full-featured, responsive React application containing both a consumer vehicle browsing portal and a comprehensive administrative dashboard for reservation, customer tracking, and fleet management.

---

## 🛠️ Technology Stack & Languages

This application is built with core web technologies following beginner-to-intermediate React guidelines:
1. **JavaScript (ES6) / JSX**: Drives all the logic, dynamic state mutations, routing, and calculations.
2. **HTML5**: Structured semantic layouts.
3. **CSS3**: Premium custom stylesheets (`App.css`, `dashboard.css`, and `index.css`) utilizing CSS custom properties for dark/light themes.
4. **Styled Components**: Component-level style capsules used for clean customer-facing pages.

---

## 📂 Project Pages (15 Pages)

The project divides its pages into two sections: **Customer (Consumer-Facing) Portal** and **Admin Dashboard**.

### 👤 Customer Pages
1. **Home (`/`)**: Dynamic landing page featuring active fleet highlights, promotional banners, customer testimonials, and live fleet stats.
2. **Cars (`/cars`)**: Full list of available vehicles with options to filter by category (SUV, Sedan, Sports, Luxury) and sort by daily rates.
3. **Car Details (`/cars/:id`)**: Technical specs (transmission, fuel type, seating), custom descriptions, and a direct inquiry hook for renting.
4. **About (`/about`)**: Legacy story, mission statement, corporate vision, and statistics dashboard.
5. **Reviews (`/reviews`)**: Client feedback board displaying ratings with a write-a-review portal.
6. **Contact (`/contact`)**: Global maps, address lists, and an online message form.

### 🔑 Admin Pages (Admin Authentication Required)
7. **Admin Login (`/admin`)**: Login panel using local storage credentials for administrator access.
8. **Dashboard Console (`/admin`)**: Overview of business analytics (total revenue, active fleet, booking metrics, monthly charts, and recent activity logs).
9. **Cars Management (`/admin/cars`)**: CRUD console to add, update, and remove fleet vehicles.
10. **Bookings (`/admin/bookings`)**: Central reservation manager to approve, complete, or reject client booking requests.
11. **Customers (`/admin/customers`)**: Directory tracking registered clients, contact info, and total spent.
12. **Payments (`/admin/payments`)**: Invoice logs displaying amounts, methods, dates, and transaction statuses.
13. **Reports (`/admin/reports`)**: Downloadable summaries and visual charts.
14. **Reviews Mod (`/admin/reviews`)**: Moderation page to view and remove customer reviews.
15. **Settings (`/admin/settings`)**: Database configurations and master reset controls.

---

## 🧩 Components List (25 Components)

The codebase leverages reusable, modular UI components to keep the layout organized and maintainable.

### Admin Components (15)
1. **Sidebar**: Collapsible navigational menu.
2. **Navbar**: Header control bar featuring search, user profile, and light/dark theme toggle.
3. **AdminLogin**: Gatekeeper authentication card.
4. **BookingTable**: Data grid with action handlers for approvals.
5. **CarCard**: Card template for admin fleet lists with edit/delete buttons.
6. **ChartCard**: Styled container wrapper for Recharts analytics graphs.
7. **DashboardCard**: Visual metric card displaying total numbers (e.g. revenue, total cars).
8. **FAQ**: Accordion layout displaying customer help questions.
9. **InquiryForm**: Quick booking form component.
10. **Services**: Service benefit highlight cards.
11. **Testimonials**: Customer quote cards.
12. **About**: Corporate history layout.
13. **Contact**: Corporate address card.
14. **Footer**: Navigation links and social icons.
15. **ActivityCard**: Individual log item in the recent activity feed.

### Customer Components (10)
16. **CustomButton**: Styled button component with options for sizes, fills, and outline modes.
17. **CustomerCarCard**: Visual showcase for car previews with specifications.
18. **CustomerChartCard**: Clean container wrapper for charts on the public page.
19. **CustomerFooter**: Public site footer with contact information.
20. **CustomerNavbar**: Floating pill navigation bar that remains sticky at the top.
21. **CustomerReviewCard**: Client testimonial layout with star rating icons.
22. **FeatureCard**: Icons highlight card used in "Why Choose Us" sections.
23. **InquiryModal**: Pop-up reservation wizard prompting details like pickup dates and locations.
24. **SectionTitle**: Heading helper that formats titles and descriptions consistently.
25. **StatsCard**: Highlight card containing large animated metrics.

---

## 🌟 Why This Website is Useful

DriveX bridges the gap between **vehicle rental customers** and **fleet administrators** by delivering value to both sides:

* **For Customers:** 
  * They get a fast, interactive experience to search, filter, and compare rates of high-end vehicles.
  * They can complete dynamic reservation bookings in under a minute.
  * Pricing is fully transparent, showcasing dynamic quotes based on daily rates and duration days.

* **For Admins:**
  * They gain a professional command console to track key performance indicators (KPIs) like total bookings and monthly revenue.
  * Fleet and customer directories can be updated instantly (CRUD actions).
  * Data stays preserved securely in Local Storage, ensuring nothing is lost when the page refreshes.

---

## ⚙️ How It Works for Users

### 1. The Customer Flow
1. **Browse:** The user lands on the website and navigates to the **Cars** catalog.
2. **Filter & Details:** The user filters by category or price, clicks on a vehicle, and reviews its specs (e.g., Tesla Model S - Electric - Automatic).
3. **Inquire:** The user clicks **Rent Now**, which opens the **Inquiry Modal**. They enter their name, contact details, pick-up date, and desired duration.
4. **Quote & Submit:** The system calculates a live quote (e.g., `Daily Rate x Days`) and the user submits the form. A success notification is displayed.

### 2. The Admin Flow
1. **Login:** The administrator visits `/admin` and logs in.
2. **Monitor Dashboard:** The dashboard displays real-time statistics, charts, and details about the pending booking.
3. **Approve Reservation:** The administrator goes to **Bookings**, reviews the customer's request, and clicks **Approve**.
4. **Fleet Update:** The system automatically changes the car's status to **Booked** and adds the payment transaction to the revenue logs.
