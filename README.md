
# Restaurant Admin Panel

A full-featured restaurant admin dashboard built with Next.js and Redux Toolkit. This panel allows restaurant staff to manage dine-in and takeaway orders, monitor order status, and perform administrative tasks such as user authentication and role-based access control.

<!-- ## 🌐 Live Demo

> _(Add your deployed URL here if available)_ -->

## ⚙️ Tech Stack

- **Frontend**: Next.js, React
- **State Management**: Redux Toolkit
- **Backend**: Node.js, Express.js (in `/backend`)
- **Styling**: Tailwind CSS
- **Others**: Axios, MUI (Material UI)

## 📦 Features

- 🔐 Secure login with admin verification
- 📋 View and filter Dine-In & Takeaway orders
- 🚦 Real-time food status updates (e.g., "Pending", "Cooking", "Ready")
- 📦 Order details via `OrderInfoCard`
- 🗂 Organized UI with tab filtering (All, Pending, etc.)
- 👨‍🍳 Admin-only protected routes via JWT and role-based checks

## 📁 Folder Structure

```
adminpanel/
├── components/       # Reusable UI components
├── features/         # Redux slices and async thunks
├── pages/            # Next.js pages (Home, Login, etc.)
├── public/           # Static assets
├── styles/           # Tailwind CSS & global styles
└── utils/            # Axios and helper functions
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or newer)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Bipana-Rai/ResturantAdmin.git
   cd ResturantAdmin/adminpanel
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env.local` file:

   ```env
   NEXT_PUBLIC_API_BASE_URL=http://localhost:5000/api
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```



---

## 🔒 Admin Access

To access admin-only features, you must log in with an account that has the `"admin"` role. Admin verification is done via JWT through a protected route:

```js
GET /admin/verify
```

Make sure your backend returns a valid `user.role = "admin"` in the decoded JWT.

---

## 🛠 Backend

The backend code (API, authentication, database) is assumed to be in the `/backend` folder. Ensure it’s running in parallel with the frontend for full functionality.

---
## 📸 Screenshots
### 🏠 Dashboard
![Dashboard](https://github.com/Bipana-Rai/ResturantAdmin/blob/main/screenshot/Screenshot%202025-06-08%20191559.png
)
###  Order Line
![Order Line](https://github.com/Bipana-Rai/ResturantAdmin/blob/main/screenshot/Screenshot%202025-06-08%20191623.png)

###  Manage Dishesh
![Manage Dishesh](https://github.com/Bipana-Rai/ResturantAdmin/blob/main/screenshot/Screenshot%202025-06-08%20191701.png)

###  Manage table
![Manage table](https://github.com/Bipana-Rai/ResturantAdmin/blob/main/screenshot/Screenshot%202025-06-08%20191740.png)

###  Manage booking
![Manage booking](https://github.com/Bipana-Rai/ResturantAdmin/blob/main/screenshot/Screenshot%202025-06-08%20191834.png)

###  Manage notification
![Manage notification](https://github.com/Bipana-Rai/ResturantAdmin/blob/main/screenshot/Screenshot%202025-06-08%20191854.png)



## 🙌 Acknowledgements

Built and maintained by [Bipana Rai](https://github.com/Bipana-Rai)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
