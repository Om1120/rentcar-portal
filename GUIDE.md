# Project Guide & Documentation | પ્રોજેક્ટ માર્ગદર્શિકા અને દસ્તાવેજીકરણ (Extended Edition)

This guide provides a comprehensive, step-by-step review of the technologies, directory structure, state management, granular CRUD logic, page operations, and style implementation of the Car Rental Admin Dashboard. It is written in both **English** and **Gujarati** to serve as a detailed educational guide for learning React JS.

આ માર્ગદર્શિકા કાર રેન્ટલ એડમિન ડેશબોર્ડની ટેક્નોલોજી, પ્રોજેક્ટનું માળખું, સ્ટેટ મેનેજમેન્ટ, સીઆરયુડી (CRUD) લોજિક, પેજ ઓપરેશન્સ અને સીએસએસ સ્ટાઇલનું વિગતવાર વર્ણન કરે છે. આ દસ્તાવેજ તમને રીએક્ટ જેએસ (React JS) સરળતાથી શીખવા માટે **અંગ્રેજી** અને **ગુજરાતી** બંને ભાષાઓમાં ખૂબ ઊંડાણપૂર્વક સમજાવે છે.

---

## 1. Technology Stack & Package Configuration | વપરાયેલી ટેક્નોલોજી અને લાઇબ્રેરીઓ

### English
* **React JS (Vite)**: Standard frontend framework utilizing Virtual DOM for high-performance rendering. Built using functional components with state Hooks.
* **React Router DOM**: Manages client-side routing. It intercept links to swap visible components inside `<main>` without requesting a new document from the server.
* **Bootstrap 5**: Utilized specifically for responsive grid layouts (`container-fluid`, `row`, `col-lg-*`) and simple utility layouts (flexbox, borders).
* **Recharts**: D3-based customizable chart library. Configured to display premium dark theme graphics:
  * `AreaChart` (Total Revenue visualization with gradient fills)
  * `BarChart` (Most rented vehicles compared side by side)
  * `PieChart` (Vehicle category distributions)
* **React Toastify**: Injects alerts for all user events (e.g. adding cars, editing settings, deleting bookings) using toast notifications.
* **FontAwesome Icons**: Standard dashboard symbols used across panels and sidebar lists.
* **Offline-First Storage**: All dependencies and assets are locally bundled. No CDN or online URL paths are active.

### ગુજરાતી
* **React JS (Vite)**: હાઇ-પર્ફોર્મન્સ પેજ રેન્ડરિંગ માટે વર્ચ્યુઅલ ડોમ (Virtual DOM) નો ઉપયોગ કરતી ફ્રન્ટએન્ડ લાઇબ્રેરી. આ આખી એપ્લિકેશન ફંક્શનલ કોમ્પોનન્ટ્સ અને હુક્સ (Hooks) ના ઉપયોગથી બનેલી છે.
* **React Router DOM**: સિંગલ-પેજ એપ્લિકેશન માટે રાઉટિંગ હેન્ડલ કરે છે. બ્રાઉઝર પેજ રિલોડ કર્યા વિના વિવિધ સેક્શન્સ (જેવા કે Cars, Bookings, Customers) બદલે છે.
* **Bootstrap 5**: રિસ્પોન્સિવ ગ્રીડ સિસ્ટમ (`row`, `col-*`) અને ફ્લેક્સબોક્સ જેવી સીએસએસ ગોઠવણીઓ માટે વપરાય છે.
* **Recharts**: ચાર્ટ્સ દર્શાવવા માટે વપરાતી શ્રેષ્ઠ લાઇબ્રેરી:
  * `AreaChart` (માસિક આવક દર્શાવવા માટે ગ્રેડિયન્ટ ફિલ સાથે)
  * `BarChart` (સૌથી વધુ ભાડે આપેલી કારની સરખામણી માટે)
  * `PieChart` (કઈ કેટેગરીની કાર વધારે વપરાય છે તેનું વિભાજન દર્શાવવા)
* **React Toastify**: યુઝરની પ્રત્યેક ક્રિયા (નવી કાર ઉમેરવી, ડિલીટ કરવી) પર સરસ નાના એલર્ટ નોટિફિકેશન સ્ક્રીન પર દર્શાવે છે.
* **FontAwesome Icons**: સાઇડબાર અને ડેશબોર્ડ કાર્ડ્સમાં વપરાતા પ્રીમિયમ ચિહ્નો.
* **ઓફલાઇન-ફર્સ્ટ ડિઝાઇન**: બધી જ લાઇબ્રેરી અને ચિત્રો (Assets) સ્થાનિક ડાયરેક્ટરીમાં સ્ટોર કરેલા છે જેથી નેટ વગર પણ પ્રોજેક્ટ ચાલી શકે.

---

## 2. Directory Structure | પ્રોજેક્ટ ફાઇલ માળખું

```text
e:/web1/rentcar/
├── GUIDE.md                 <-- This comprehensive documentation file
├── index.html               <-- Base HTML loader containing mounting root div
├── package.json             <-- Project dependencies, scripts and settings
├── src/
│   ├── main.jsx             <-- Mounting point that renders <App /> under StrictMode
│   ├── App.jsx              <-- Central coordinator containing states, hooks, and modals
│   ├── App.css              <-- Main styling sheet
│   │
│   ├── assets/              <-- Local media storage (Offline images)
│   │   ├── car1.png to car16.png (Fleet images)
│   │   └── r1.jpg to r6.jpg (Customer avatars)
│   │
│   ├── data/
│   │   └── mockData.js      <-- Database file containing Initial Arrays
│   │
│   ├── components/          <-- Small Reusable UI units
│   │   ├── Sidebar.jsx      <-- Navigation panel toggled by collapse state
│   │   ├── Navbar.jsx       <-- Top panel with search, alerts, dark mode switcher
│   │   ├── CarCard.jsx      <-- Card with specifications, status badge and action buttons
│   │   └── BookingTable.jsx <-- Log tables with status indicator colors
│   │
│   ├── pages/               <-- Dedicated Route views
│   │   ├── Dashboard.jsx    <-- Quick stats, visual charts and activities
│   │   ├── Cars.jsx         <-- Fleet management, search, and action commands
│   │   ├── Bookings.jsx     <-- Master logs of all bookings
│   │   ├── Customers.jsx    <-- List of customers, bookings count, and spent logs
│   │   ├── Payments.jsx     <-- Invoices and payment statuses
│   │   ├── Reports.jsx      <-- Analytics and revenue summaries
│   │   ├── Reviews.jsx      <-- Rating logs and reviews left by users
│   │   └── Settings.jsx     <-- Profile settings and system configs
│   │
│   └── styles/
│       └── dashboard.css    <-- Dedicated theme styling implementing Dark Theme variables
```

---

## 3. State Management & Props Hierarchy | સ્ટેટ મેનેજમેન્ટ અને પ્રોપ્સ

### English
React uses a **Uni-Directional Data Flow**. Since multiple routes need to access, filter, or update the list of cars, bookings, and customers, the states are declared inside the parent component [App.jsx](file:///e:/web1/rentcar/src/App.jsx). 
These states are passed down to child components as **Props**. When a sub-component triggers an event (like deleting a car), it calls a handler function passed from `App.jsx` as a prop.

### ગુજરાતી
રીએક્ટમાં ડેટા વહન હંમેશા **એક-તરફી (Uni-Directional)** હોય છે. ડેશબોર્ડના ઘણા બધા પેજ (જેવા કે Cars, Bookings, Customers) કારની સંખ્યા કે ગ્રાહકોની વિગત પર આધારિત છે. તેથી, બધી વિગતોના સ્ટેટ્સ (States) વાલી કોમ્પોનન્ટ [App.jsx](file:///e:/web1/rentcar/src/App.jsx) ની અંદર સેટ કરવામાં આવ્યા છે.
આ સ્ટેટ્સ નીચેના ચાઇલ્ડ પેજીસમાં **Props** ના માધ્યમથી મોકલવામાં આવે છે. જ્યારે સબ-પેજ પર કોઈ ક્રિયા થાય (દા.ત. કાર ડિલીટ કરવી), ત્યારે તે વાલી કોમ્પોનન્ટમાંથી મોકલેલા ફંક્શનને ટ્રિગર કરે છે.

### Application State Directory | એપ્લિકેશન સ્ટેટ ડિરેક્ટરી

| Variable Name (સ્ટેટ વેરિયેબલ) | Data Type | Default Value | Purpose (હેતુ) |
| :--- | :--- | :--- | :--- |
| `darkMode` | `Boolean` | `true` | Controls overall app skin (`dark` / `light`) via `data-theme` attribute. |
| `sidebarCollapsed` | `Boolean` | `false` | Collapses the sidebar width to `80px` for a wider content view. |
| `carsList` | `Array` | `initialCarsData` | Stores the list of vehicles in the fleet. |
| `bookingsList` | `Array` | `recentBookingsData` | Stores the active, completed, or pending reservation logs. |
| `customersList` | `Array` | `initialCustomersData` | Stores customer records (spent metrics, emails, avatars). |
| `paymentsList` | `Array` | `initialPaymentsData` | Stores invoice entries and payment transaction statuses. |
| `reviewsList` | `Array` | `reviewsData` | Stores reviews and comments left by customers. |
| `isAddCarOpen` | `Boolean` | `false` | Controls the visibility of the Add Fleet Vehicle modal. |
| `isEditCarOpen` | `Boolean` | `false` | Controls the visibility of the Edit Vehicle Details modal. |
| `editingCar` | `Object / null` | `null` | Holds the temporary car object being updated in the form. |

---

## 4. Deep-Detail CRUD Logic & Code Breakdown | સીઆરયુડી (CRUD) લોજિક અને કોડ વિશ્લેષણ

Here is how Javascript arrays are mutated inside our React state using core functional methods.

### A. List Rendering & Data Lookup using `.map()` | `.map()` પદ્ધતિ વડે ડેટા દર્શાવવો

#### English
To dynamically render an array of items as JSX tags, we use `.map()`. It loops through the array, returning a custom React element for each item. React requires a unique `key` prop on the top-level element inside the loop to optimize Virtual DOM comparisons.

For example, when displaying the dropdown selector of available cars inside the booking modal:
```jsx
<select 
  value={newBooking.carName}
  onChange={(e) => setNewBooking({ ...newBooking, carName: e.target.value })}
  required
>
  <option value="">-- Choose a Fleet Car --</option>
  {carsList.map(c => (
    <option key={c.id} value={c.name}>
      {c.name} (${c.pricePerDay}/day) - {c.status}
    </option>
  ))}
</select>
```

#### ગુજરાતી
એરે (Array) માં રહેલા ડેટાને વારાફરતી સ્ક્રીન પર બતાવવા માટે જાવાસ્ક્રિપ્ટની `.map()` પદ્ધતિનો ઉપયોગ થાય છે. રીએક્ટને આ પ્રક્રિયામાં દરેક વસ્તુ માટે એક અનન્ય `key` (સામાન્ય રીતે `id`) જોઈએ છે, જેથી તે ડેટામાં ક્યાં ફેરફાર થયો છે તે સચોટ રીતે શોધી શકે.

બુકિંગ મોડલની અંદર ઉપલબ્ધ કારોનું લિસ્ટ બતાવવા માટે નીચેનો કોડ વપરાયો છે:
```jsx
{carsList.map(c => (
  <option key={c.id} value={c.name}>
    {c.name} (${c.pricePerDay}/day) - {c.status}
  </option>
))}
```

---

### B. Appending Items (Create) using Spread Operator `[...]` | નવી આઇટમ ઉમેરવા માટે સ્પ્રેડ ઓપરેટર

#### English
React states must be treated as **immutable**. You cannot push items directly into an array state (e.g. `carsList.push(car)` will not trigger UI updates). Instead, you copy the existing array using the spread operator `...` and prepend/append the new object into a brand new array.

Here is the logic inside `handleAddCarSubmit` in [App.jsx](file:///e:/web1/rentcar/src/App.jsx):
```javascript
const handleAddCarSubmit = (e) => {
  e.preventDefault();
  
  // Select matching local image file based on index choice
  const imgUrl = localCarImages[parseInt(newCar.imageIndex || 0)].file;
  
  const carObj = {
    id: `car-${Date.now()}`, // Generates unique ID using timestamp
    name: newCar.name,
    type: newCar.type,
    pricePerDay: parseFloat(newCar.pricePerDay),
    status: newCar.status,
    image: imgUrl,
    year: parseInt(newCar.year) || 2024,
    fuel: newCar.fuel,
    transmission: newCar.transmission
  };

  // setCarsList takes a new array containing the new car, followed by all existing cars
  setCarsList([carObj, ...carsList]);
  setIsAddCarOpen(false); // Close Modal
  toast.success(`Successfully added ${carObj.name} to fleet!`);
};
```

#### ગુજરાતી
રીએક્ટના સ્ટેટ્સ અપરિવર્તનીય (Immutable) હોય છે. તેથી આપણે મૂળ એરેમાં ડાયરેક્ટ ફેરફાર કરવાના બદલે સ્પ્રેડ ઓપરેટર `...` નો ઉપયોગ કરીને નવો એરે બનાવીએ છીએ અને તેમાં નવો ઓબ્જેક્ટ દાખલ કરીએ છીએ.

[App.jsx](file:///e:/web1/rentcar/src/App.jsx) માં નવી કાર ઉમેરવા માટેનો કોડ:
```javascript
const handleAddCarSubmit = (e) => {
  e.preventDefault();
  
  // પસંદ કરેલી કારનું લોકલ ચિત્ર મેળવવું
  const imgUrl = localCarImages[parseInt(newCar.imageIndex || 0)].file;
  
  const carObj = {
    id: `car-${Date.now()}`, // સમય (timestamp) આધારિત અજોડ આઇડી બનાવવું
    name: newCar.name,
    type: newCar.type,
    pricePerDay: parseFloat(newCar.pricePerDay),
    status: newCar.status,
    image: imgUrl,
    year: parseInt(newCar.year) || 2024,
    fuel: newCar.fuel,
    transmission: newCar.transmission
  };

  // કાર લિસ્ટ સ્ટેટ અપડેટ કરવું: નવી કારને સૌથી આગળ રાખી બાકીની બધી કારને પાછળ જોડી દેવી
  setCarsList([carObj, ...carsList]);
  setIsAddCarOpen(false); // મોડલ બંધ કરવું
  toast.success(`Successfully added ${carObj.name} to fleet!`);
};
```

---

### C. Updating/Editing Items using `.map()` & Conditionals | ડેટા અપડેટ અને સુધારવાની પદ્ધતિ

#### English
To edit an item in a list without altering other items, we use `.map()` to iterate through the list. For each element, we check if its `id` matches the `editingCar.id`. If yes, we return the new modified object; if not, we return the original object.

Here is the update handler code:
```javascript
const handleEditCarSubmit = (e) => {
  e.preventDefault();
  
  const imgUrl = localCarImages[parseInt(editingCar.imageIndex || 0)].file;
  const updatedCar = {
    ...editingCar,
    image: imgUrl
  };

  // If IDs match, swap with updatedCar, else keep current car intact
  setCarsList(carsList.map(car => car.id === editingCar.id ? updatedCar : car));
  setIsEditCarOpen(false);
  toast.success(`Successfully updated vehicle: ${editingCar.name}`);
  setEditingCar(null);
};
```

#### ગુજરાતી
કોઈ ચોક્કસ આઇટમને સુધારવા માટે એરે પર `.map()` લૂપ ચલાવીએ છીએ. જો કોઈ કારનો `id` આપણા સુધારેલી કાર (editingCar) ના `id` સાથે મેચ થાય, તો તેની જગ્યાએ નવો ડેટા (updatedCar) મૂકવામાં આવે છે, બાકીની કારને એમ જ રાખવામાં આવે છે.

કાર સુધારવાનો કોડ:
```javascript
const handleEditCarSubmit = (e) => {
  e.preventDefault();
  
  const imgUrl = localCarImages[parseInt(editingCar.imageIndex || 0)].file;
  const updatedCar = {
    ...editingCar,
    image: imgUrl
  };

  // જો આઇડી સરખા હોય તો ડેટા બદલાશે, નહીંતર એ જ જૂનો ઓબ્જેક્ટ પરત થશે
  setCarsList(carsList.map(car => car.id === editingCar.id ? updatedCar : car));
  setIsEditCarOpen(false);
  toast.success(`Successfully updated vehicle: ${editingCar.name}`);
  setEditingCar(null);
};
```

---

### D. Deleting Items using `.filter()` | ડેટા ડિલીટ કરવા માટે `.filter()` પદ્ધતિ

#### English
To remove an item from state, we use `.filter()`. This method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function. We filter out the item whose `id` matches the deleted object's `id`.

Here is the delete handler code:
```javascript
const handleDeleteCar = (id, name) => {
  // Keeps all cars EXCEPT the one with the deleted ID
  setCarsList(carsList.filter(car => car.id !== id));
  toast.error(`Deleted vehicle: ${name}`);
};
```

#### ગુજરાતી
ડેટામાંથી કોઈ તત્વ કાઢી નાખવા માટે જાવાસ્ક્રિપ્ટની ફિલ્ટર `.filter()` પદ્ધતિનો ઉપયોગ થાય છે. આ પદ્ધતિ એવો નવો એરે બનાવે છે જેમાં તે આપેલા ટેસ્ટમાંથી પાસ થતા તમામ તત્વો જ રાખે છે. અહીં આપણે ડિલીટ કરેલા `id` સિવાયના તમામ તત્વોને નવા એરેમાં રાખીએ છીએ.

કાર ડિલીટ કરવાનો કોડ:
```javascript
const handleDeleteCar = (id, name) => {
  // જે કારનું આઇડી આપણે કાઢી નાખવા માંગીએ છીએ તેના સિવાયની બધી કાર રાખવી
  setCarsList(carsList.filter(car => car.id !== id));
  toast.error(`Deleted vehicle: ${name}`);
};
```

---

## 5. Custom Booking Cost Logic | બુકિંગ અને કિંમત ગણતરી લોજિક

### English
When a new booking is registered in the dashboard modal, the application automatically computes the total rental price.
1. It calculates the date difference in milliseconds by subtracting the raw Javascript Date objects: `returnDate - pickupDate`.
2. It converts milliseconds to total days: `Math.ceil(timeDiff / (1000 * 60 * 60 * 24))`.
3. It finds the selected car inside `carsList` to extract its daily rental rate `pricePerDay`.
4. It multiplies days by `pricePerDay` and registers a formatted price (e.g. `$600`) into the database.

Code snippet:
```javascript
const pickup = new Date(newBooking.pickupDate);
const returnDt = new Date(newBooking.returnDate);
const timeDiff = Math.abs(returnDt - pickup);
const days = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)) || 1;

const matchedCar = carsList.find(c => c.name === newBooking.carName);
const dailyPrice = matchedCar ? matchedCar.pricePerDay : 150;
const computedPrice = days * dailyPrice;
```

### ગુજરાતી
નવું બુકિંગ ઉમેરતી વખતે પિકઅપ અને રિટર્ન ડેટ વચ્ચેના ગાળાની ગણતરી કરીને કુલ કિંમત આપોઆપ નક્કી થાય છે:
1. તે બંને તારીખોની બાદબાકી કરે છે: `returnDate - pickupDate` (જે મિલિસેકન્ડમાં ડેટા આપે છે).
2. મિલિસેકન્ડને દિવસોમાં ફેરવે છે: `Math.ceil(timeDiff / (1000 * 60 * 60 * 24))`.
3. પસંદ કરેલી કારને `carsList` માં શોધી તેનો રોજનો ભાડા દર મેળવે છે.
4. દિવસોને દૈનિક દર સાથે ગુણીને કુલ બુકિંગ કિંમત (દા.ત. `$600`) એરેમાં ઉમેરે છે.

કોડ નીચે મુજબ છે:
```javascript
const pickup = new Date(newBooking.pickupDate);
const returnDt = new Date(newBooking.returnDate);
const timeDiff = Math.abs(returnDt - pickup);
const days = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)) || 1;

const matchedCar = carsList.find(c => c.name === newBooking.carName);
const dailyPrice = matchedCar ? matchedCar.pricePerDay : 150;
const computedPrice = days * dailyPrice;
```

---

## 6. System Settings & Profile Configuration | સિસ્ટમ સેટિંગ્સ અને પ્રોફાઇલ કન્ફિગ્યુરેશન

### English
Inside [Settings.jsx](file:///e:/web1/rentcar/src/pages/Settings.jsx), local component states are declared to handle form entries for the logged-in administrator:
* **Admin Profile**: Manages `name`, `email`, and `password`. Updates are handled via form field state binds (`onChange={(e) => setProfile({ ...profile, name: e.target.value })}`).
* **System Settings**: Manages system currency options (`USD`, `INR`, `EUR`, `GBP`), timezone coordinates, email/push notification switches, and auto-approval toggles.
* **Form Action**: Updates trigger user feedback toast alerts using React Toastify: `toast.success("Admin profile updated successfully!")`.

### ગુજરાતી
સેટિંગ્સ પેજ [Settings.jsx](file:///e:/web1/rentcar/src/pages/Settings.jsx) માં લોકલ સ્ટેટનો ઉપયોગ કરીને એડમિનિસ્ટ્રેટરની વિગતો અને આખી એપ માટેનું ચલણ (Currency) અને નોટિફિકેશન સેટિંગ્સ સંચાલિત થાય છે:
* **એડમિન પ્રોફાઇલ**: જેમાં એડમિનનું નામ, ઇમેઇલ અને પાસવર્ડ સેટ થાય છે. ઇનપુટ બોક્સમાં લખવાથી સ્ટેટ બદલાય છે: `onChange={(e) => setProfile({ ...profile, name: e.target.value })}`.
* **સિસ્ટમ સેટિંગ્સ**: મુખ્ય ચલણનું પ્રતીક (Currency symbol), ટાઈમ ઝોન અને સ્વચાલિત બુકિંગ અપ્રૂવલ (Auto-approve) ચાલુ કે બંધ કરવાનો વિકલ્પ આપે છે.
* **સેવ પ્રોસેસ**: સબમિટ પર ક્લિક કરવાથી તે ડેટાને સિસ્ટમમાં સંગ્રહિત કરે છે અને સ્ક્રીન પર સફળતાનો સંદેશ દર્શાવે છે: `toast.success("Admin profile updated successfully!")`.

---

## 7. Premium Dark UI & CSS Layout System | પ્રીમિયમ સીએસએસ ડિઝાઇન અને લેઆઉટ

### English
The visual theme relies on dynamic CSS custom properties (variables) defined under `:root` and `[data-theme="dark"]` in `src/styles/dashboard.css`.

* **Royal Purple & Cyan Theme**:
  * `--primary`: `#7C3AED` (Royal Purple for active selections and buttons)
  * `--secondary`: `#06B6D4` (Cyan Blue for accents and highlights)
  * `--bg-color`: `#0F172A` (Rich dark blue-slate background)
  * `--card-bg`: `#1E293B` (Sleek slate colored cards)
  * `--sidebar-bg`: `#111827` (Deep charcoal color)
* **Glassmorphism**: Cards use `backdrop-filter: blur(16px)` along with a semi-transparent border `rgba(51, 65, 85, 0.5)` to create a premium depth illusion.
* **Fixed Viewport Scroll Control**:
  * The outer parent `.dashboard-app` is fixed to `height: 100vh; overflow: hidden;`.
  * The main navigation and sidebar are static/fixed to prevent browser scrolling.
  * Only `.dashboard-content` is scrollable with `overflow-y: auto`, providing a premium dashboard user experience where components scroll smoothly while headers remain pinned.

### ગુજરાતી
આખા પ્રોજેક્ટની સુંદર ડિઝાઇન `src/styles/dashboard.css` માં વેરિયેબલ્સ સેટ કરીને તૈયાર કરવામાં આવી છે જેથી થીમ એકદમ આધુનિક અને લક્ઝરી લુક આપે.

* **થીમ કલર સ્કીમ**:
  * `--primary`: `#7C3AED` (રોયલ પર્પલ - મુખ્ય એક્ટિવ બટનો માટે)
  * `--secondary`: `#06B6D4` (સ્યાન બ્લુ - હાઇલાઇટ્સ અને સરહદો માટે)
  * `--bg-color`: `#0F172A` (એકદમ ડાર્ક બ્લેક-બ્લુ બેકગ્રાઉન્ડ)
  * `--card-bg`: `#1E293B` (કાર્ડ્સ માટે આછો ડાર્ક કલર)
* **ગ્લાસમોરફીઝમ**: કાર્ડ્સમાં કાચ જેવી ઇફેક્ટ આપવા માટે `backdrop-filter: blur(16px)` અને બોર્ડર માટે પારદર્શક રંગ `rgba(51, 65, 85, 0.5)` નો ઉપયોગ કરવામાં આવ્યો છે.
* **સ્ક્રોલિંગ કંટ્રોલ**:
  * મુખ્ય બોડી `overflow: hidden` હોવાથી બ્રાઉઝરનું મૂળ પેજ ક્યારેય હલતું નથી.
  * સાઇડબાર અને ઉપરનું નેવિગેશન સ્થિર રહે છે.
  * ફક્ત જમણી બાજુનું મધ્ય વિભાગ `.dashboard-content` જ સ્ક્રોલ થાય છે, જેથી યુઝરને એક પ્રોફેશનલ સોફ્ટવેર જેવો અનુભવ થાય.

---

## 8. Bilingual React Concepts Glossary | સવિસ્તાર શબ્દાવલી

| React Term (રીએક્ટ પરિભાષા) | Gujarati Translation (ગુજરાતી અર્થ) | Technical Definition |
| :--- | :--- | :--- |
| **Component** | કોમ્પોનન્ટ / ઘટક | A self-contained reusable module that outputs HTML structure via JSX. |
| **State** | સ્ટેટ / સ્થિતિ | A local data storage object that triggers a re-render when values change. |
| **Props** | પ્રોપ્સ / ગુણધર્મો | Read-only attributes passed down from a parent component to child components. |
| **Event Handler** | ઇવેન્ટ હેન્ડલર | A function that executes in response to user input (e.g. click, input change). |
| **List Rendering** | લિસ્ટ રેન્ડરિંગ | Creating arrays of JSX elements from a data list, using `.map()` with keys. |
| **Conditional Rendering** | શરતી રેન્ડરિંગ | Showing or hiding elements based on a logic check (e.g. `isAddCarOpen && <Modal />`). |
| **SPA Router** | એસપીએ રાઉટર | A mechanism that switches pages on client-side paths without reloading the tab. |
| **Virtual DOM** | વર્ચ્યુઅલ ડોમ | A lightweight representation of the real DOM used by React to compute diff updates. |
