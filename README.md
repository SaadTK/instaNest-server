
# InstaNest - Modern Hotel Booking Platform

## Project Overview

InstaNest is a modern, responsive hotel booking platform designed to provide users with a seamless and engaging experience to discover and book hotel rooms. This platform combines interactive design, robust functionality, secure authentication, and real-time booking management to ensure a trustworthy and user-friendly service.

---

## Live Demo

[Insert your live frontend URL here, e.g., https://instanest.example.com]

---

## Features

### Homepage
- Interactive banner slider with title, description, and navigation to Rooms page.
- Embedded map showing hotel location using React-Leaflet.
- Featured rooms showcase (top 6) with images, descriptions, and "Book Now" buttons.
- User reviews carousel displaying authentic feedback sorted by date (latest first).
- Special offers and promotions highlighted with a popup modal.
- Additional relevant and attractive sections to enhance user engagement.

### User Authentication
- Email & password login and registration.
- Google social login integration.
- Password validation: minimum 6 characters, includes uppercase and lowercase letters.
- Toast/SweetAlert notifications for successful login/register or errors.
- Protected routes: "My Bookings" page accessible only to logged-in users.

### Rooms Management
- Rooms page displaying all rooms from the database in card format.
- Filter system on rooms page to filter rooms by price range (server-side).
- Clicking a room card redirects to a detailed Room Details page.

### Room Details
- Detailed room information including images, features, and availability.
- Display of all reviews for the room; shows a meaningful message if no reviews.
- Booking button triggers a modal for booking with date picker for selecting booking date.
- Booking confirmation disables room availability for the booked date.

### My Bookings
- Displays logged-in user's booked rooms with image, name, price, and booking date.
- Booking cancellation allowed 1 day prior to booked date, with confirmation modal.
- Update booking date functionality with date picker and success notification.
- Users can post reviews for rooms they have booked via a review modal.

### Review System
- Reviews include username (non-editable), rating (1-5), comment, and timestamp.
- Reviews shown on Room Details and home page testimonial carousel.
- Only logged-in users who booked a room can post reviews.

### Navigation and Access Control
- Navigation bar links to Rooms, My Bookings, Login, and Register pages.
- Non-authenticated users can browse rooms but cannot book or review.
- Unauthorized access redirects users to the login page.

### Additional Features
- Responsive design for mobile, tablet, and desktop.
- Uses JWT authentication with tokens stored on client side for secure API access.
- 404 page with user-friendly message and navigation back to home.
- Implements React Helmet for SEO metadata.
- Animation effects with Framer Motion.
- Map implemented with React-Leaflet.
- Meaningful commit history with descriptive messages.

---

## Technologies Used

- **Frontend:** React, React Router, React Leaflet, Framer Motion, React Helmet, Date Picker npm packages
- **Backend:** Node.js, Express, MongoDB, Mongoose, JWT Authentication
- **Authentication:** Firebase Authentication (email/password and Google login)
- **Deployment:** Frontend deployed on Surge (or your choice), Backend deployed on Render
- **Other:** SweetAlert2 for notifications, Moment.js for date comparisons

---

## Installation & Setup

### Backend

1. Clone the backend repository:
```

git clone [https://github.com/SaadTK/instaNest-server.git](https://github.com/SaadTK/instaNest-server.git)

```
2. Install dependencies:
```

cd instaNest-server
npm install

```
3. Create a `.env` file with your environment variables:
```

PORT=5000
MONGODB\_URI=your\_mongo\_connection\_string
JWT\_SECRET=your\_jwt\_secret\_key

```
4. Start the server:
```

npm run dev

```

### Frontend

1. Clone the frontend repository:
```

git clone [https://github.com/SaadTK/instaNest-client.git](https://github.com/SaadTK/instaNest-client.git)

```
2. Install dependencies:
```

cd instaNest-client
npm install

```
3. Create a `.env` file with your environment variables (e.g., Firebase config, backend API URL):
```

REACT\_APP\_FIREBASE\_API\_KEY=your\_api\_key
REACT\_APP\_API\_URL=[https://your-backend-url.onrender.com](https://your-backend-url.onrender.com)

```
4. Start the development server:
```

npm start

```

---

## Usage

- Register or log in using email/password or Google.
- Browse available rooms, filter by price.
- View detailed room information and book available rooms.
- Manage your bookings from the "My Bookings" page.
- Post reviews on rooms you have booked.
- Cancel or update your bookings as per the policy.

---

## Commit History

- 15+ meaningful commits on frontend with descriptive messages.
- 8+ meaningful commits on backend with descriptive messages.

---

## Notes

- Environment variables are secured and never pushed to GitHub.
- The website is fully responsive and accessible.
- JWT token-based authentication protects private routes.
- MongoDB and Firebase credentials are securely managed.
- Booking cancellations allowed only 1 day before the booked date.
- Ensure the live site and API do not produce CORS or other errors.

---

## Live Links

- Frontend: [Your Frontend Live URL]
- Backend API: [Your Backend Live URL]

---

## Author

Tahmid Karim Saad  
tahmid.karim.saad@gmail.com```

---
