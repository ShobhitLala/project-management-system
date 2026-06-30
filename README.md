# 🚀 Project Management System Backend

A production-ready backend application for managing **Workspaces, Projects, and Tasks** with secure authentication and authorization.

## ✨ Features

- 🔐 JWT Authentication
- 👤 User Registration & Login
- 🏢 Workspace Management
- 📁 Project Management
- ✅ Task Management
- 👥 Task Assignment
- 📊 Task Status Management
- 🔒 Protected REST APIs
- 🗑️ Cascade Deletion (Workspace → Projects → Tasks)
- 🌐 MongoDB Atlas Integration
- ☁️ Deployed on Render

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt
- Render
- MongoDB Atlas

---

## 📂 Project Structure

```text
src/
├── database/
├── middleware/
├── modules/
│   ├── auth/
│   ├── user/
│   ├── workspace/
│   ├── project/
│   └── task/
├── routes/
├── app.js
└── server.js
```

---

## 📌 Architecture

```
Client
   │
   ▼
Express API
   │
   ▼
Authentication Middleware
   │
   ▼
Controllers
   │
   ▼
Services
   │
   ▼
MongoDB Atlas

---

# 📡 API Endpoints

## Authentication

| Method | Endpoint |
|---------|----------|
| POST | /api/v1/auth/register |
| POST | /api/v1/auth/login |

## Workspace

| Method | Endpoint |
|---------|----------|
| POST | /api/v1/workspaces |
| GET | /api/v1/workspaces/:workspaceId |
| DELETE | /api/v1/workspaces/:workspaceId |

## Projects

| Method | Endpoint |
|---------|----------|
| POST | /api/v1/projects |
| GET | /api/v1/projects/workspace/:workspaceId |
| DELETE | /api/v1/projects/:projectId |

## Tasks

| Method | Endpoint |
|---------|----------|
| POST | /api/v1/tasks |
| GET | /api/v1/tasks/projects/:projectId/tasks |
| GET | /api/v1/tasks/:taskId |
| PATCH | /api/v1/tasks/:taskId/status |
| PATCH | /api/v1/tasks/:taskId/assign |
| DELETE | /api/v1/tasks/:taskId |

```
---

# ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/ShobhitLala/project-management-system.git
```

Move into the project directory

```bash
cd project-management-system
```

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm run dev
```
---

# 🔑 Environment Variables

Create a `.env` file in the project root.

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```
---

# 🚀 Live Deployment

Backend API

https://project-management-system-9z26.onrender.com
---

# 👨‍💻 Author

**Shobhit Srivastava**

GitHub: https://github.com/ShobhitLala

LinkedIn: https://linkedin.com/in/shobhit-srivastava-8457052a7
