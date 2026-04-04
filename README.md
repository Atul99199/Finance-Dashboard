# Finance Dashboard UI

A clean and interactive **Finance Dashboard** built using **React + Tailwind CSS**.  
This project demonstrates frontend development skills including UI design, state management, and data handling.

---

##  Features

### 📊 Dashboard Overview
- Summary cards:
  - Total Balance
  - Income
  - Expenses
- Visual charts:
  - Balance trend (time-based)
  - Spending breakdown (category-based)

---

### 📋 Transactions Section
- View all transactions with:
  - Date
  - Amount
  - Category
  - Type (Income / Expense)

- Functionalities:
  - 🔍 Search by category
  - 🎯 Filter by type (Income / Expense)
  - 🔃 Sort (Latest / Amount)

---

### 👥 Role-Based UI
- **Viewer**
  - Can only view transactions

- **Admin**
  - Can add new transactions
  - Can edit existing transactions

- Role switch available via dropdown (frontend simulation)

---

### ➕ Add / ✏️ Edit Transaction
- Modal-based form
- Fields:
  - Date
  - Amount
  - Category
  - Type (Income / Expense)
- Reusable modal for both add & edit

---

### 📈 Insights Section
- Highest spending category
- Monthly income vs expense comparison
- Smart financial insight:
  - 🔴 Red → Expenses > Income
  - 🟢 Green → Income > Expenses

---

### 💾 State Management
- Implemented using **React Context API**
- Handles:
  - Transactions data
  - Filters & search
  - Role state

---

### 💽 Data Persistence
- Uses **localStorage**
- Data remains after page refresh

---

## 🎨 UI / UX Highlights
- Clean and modern design
- Responsive layout
- Gradient cards and smooth hover effects
- Animated modal for better experience

---

## 🛠 Tech Stack

- ⚛️ React.js
- 🎨 Tailwind CSS
- 🧠 Context API (State Management)

---

## 📂 Project Structure
```
src/
│── components/
│ ├── LeftSideBar.jsx
│ ├── RightSideNavBar.jsx
│ ├── TransactionsTable.jsx
│ ├── Modal.jsx
│
│── pages/
│ ├── Dashboard.jsx
│ ├── Transactions.jsx
│ ├── Insights.jsx
│
│── context/
│ ├── AppContext.jsx
│
│── utils/
│ ├── helper.js
│ ├── insights.js
│
│── assets/
│ ├── icons/
│
│── data/
│ ├── mockdata.js
```

---

## ⚙️ Setup Instructions

1. Clone the repository:
```bash
git clone <your-repo-link>
cd finance-dashboard
npm install
npm run dev
```
