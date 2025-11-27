# 🧠 SmartTaskify – Employee Task Management System

SmartTaskify is a smart and efficient **employee task management system** built using **React JS**. It allows Admins to create and assign tasks, while employees can view and update their task progress.

---

## 🌐 Live Demo (Deployed Link)

🔗 **Live Website:** https://smart-taskify-ten.vercel.app/  
> Access SmartTaskify online anytime using the link above ✔

---

## 🚀 Features

### 👨‍💼 Admin Panel
- Login as Admin
- View all employees and their task status
- Create and assign tasks
- Track statistics (Active, New, Completed, Failed)

### 👨‍💻 Employee Panel
- Login as Employee
- View assigned tasks
- Update task status (Active → Completed / Failed)
- Profile-based login

### 🎨 UI Highlights
- Modern dark UI with emerald accent
- Minimal and clean dashboard design
- Fully responsive layout
- Glass-style cards & smart typography

---

## 🛠️ Tech Stack

| Technology | Used For |
|------------|----------|
| React JS | Frontend UI |
| Tailwind CSS | Styling |
| LocalStorage | Data Persistence |
| Context API | State Management |
| Vercel | Deployment & Hosting |

---

## 📁 Folder Structure

```
SmartTaskify/
├── src/
│   ├── components/
│   │   ├── Auth/ (Login.jsx)
│   │   ├── Dashboard/
│   │   │   ├── AdminDashboard.jsx
│   │   │   ├── EmployeeDashboard.jsx
│   │   └── TaskList/ (Task Components)
│   ├── context/ (AuthProvider.jsx)
│   ├── utils/ (LocalStorage helpers)
│   ├── App.jsx
│   └── index.js
└── README.md
```

---

## 🔐 Login Credentials

### 👑 Admin Login
```
Email: admin@example.com
Password: 123
```

### 👨‍💻 Employee Login
> Employees are stored in LocalStorage.  

Example employee format:
```json
{
  "firstName": "Arjun",
  "email": "e@e.com",
  "password": "123",
  "taskCounts": {
    "newTask": 1,
    "active": 2,
    "completed": 1,
    "failed": 0
  },
  "tasks": []
}
```

---

## 📦 Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/Kalpesh-S-Mahajan/SmartTaskify.git
```

### 2️⃣ Navigate to project folder
```bash
cd SmartTaskify
```

### 3️⃣ Install dependencies
```bash
npm install
```

### 4️⃣ Start development server
```bash
npm start
```

---

## 🐞 Troubleshooting

### ❓ Login Error?
Clear LocalStorage and reload:
```
localStorage.clear()
```

---

## 📌 Future Enhancements
- 🔐 JWT Authentication + Database Backend
- 💾 MongoDB / Firebase Integration
- 📱 Mobile App (React Native)
- 📨 Notification System
- 👥 Multi-Admin Role Support
- ⏳ Task Deadline Reminder + Task Priority

---

## 🤝 Contributing
Contributions are welcome! Feel free to **fork**, **raise issues**, or submit **pull requests.**

---

## 🪪 License
This project is licensed under the **MIT License.**

---

### 🌍 Visit SmartTaskify Live

🔗 **Live Application:** https://smart-taskify-ten.vercel.app/

> Made with 💚 using React & Tailwind  
> **SmartTaskify – Manage tasks smarter & faster. 🚀**
