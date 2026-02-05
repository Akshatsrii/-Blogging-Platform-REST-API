<div align="center">

# 📝 Blogging Platform REST API

### *A modern, full-featured RESTful API for personal blogging*

[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

<img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" width="700">

### 🌐 [View Project Requirements](https://roadmap.sh/projects/blogging-platform-api)

---

</div>

## 🎯 Overview

A **production-ready** blogging platform API built with modern JavaScript technologies. This project demonstrates RESTful API design principles, MongoDB integration, and clean architecture patterns. Perfect for learning backend development or as a foundation for your own blogging application!

---

## ✨ Features

<table>
<tr>
<td>

- ✅ **Create** new blog posts
- 📝 **Update** existing posts
- 🗑️ **Delete** posts
- 📖 **Retrieve** single or all posts
- 🔍 **Search** posts by title, content, or category
- ⚡ **Fast & Efficient** MongoDB queries

</td>
<td>

- 🎯 **RESTful** API design
- 🔒 **Proper** error handling
- 📊 **Status codes** compliance
- 🏗️ **Clean** code architecture
- 🚀 **Scalable** structure
- 📱 **CORS** enabled

</td>
</tr>
</table>

---

## 🛠️ Tech Stack

<div align="center">

| Technology | Description |
|------------|-------------|
| ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white) | JavaScript runtime environment |
| ![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white) | Fast, minimalist web framework |
| ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white) | NoSQL database for flexibility |
| ![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=flat&logo=mongoose&logoColor=white) | Elegant MongoDB object modeling |

</div>

---

## 📦 Dependencies

```json
{
  "cors": "^2.8.6",
  "dotenv": "^16.6.1",
  "express": "^4.22.1",
  "mongoose": "^7.8.9",
  "nodemon": "^3.1.11"
}
```

---

## 📁 Project Structure

```
blog-api/
│
├── 📂 config/
│   └── db.js                 # Database configuration
│
├── 📂 controllers/
│   └── postController.js     # Business logic
│
├── 📂 models/
│   └── Post.js               # Mongoose schema
│
├── 📂 routes/
│   └── postRoutes.js         # API routes
│
├── 📄 server.js              # Entry point
├── 📄 .env                   # Environment variables
├── 📄 package.json           # Dependencies
└── 📄 README.md              # Documentation
```

---

## ⚙️ Environment Setup

Create a `.env` file in the root directory:

```env
MONGO_URI=mongodb://127.0.0.1:27017/blogdb
PORT=5000
```

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- MongoDB installed and running

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/blogging-platform-api.git

# Navigate to project directory
cd blogging-platform-api

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Server Status

```
✅ Server running at: http://localhost:5000
✅ MongoDB connected successfully
```

---

## 📌 API Endpoints

<div align="center">

| Method | Endpoint | Description | Status Code |
|--------|----------|-------------|-------------|
| `POST` | `/api/posts` | Create a new blog post | `201 Created` |
| `GET` | `/api/posts` | Retrieve all blog posts | `200 OK` |
| `GET` | `/api/posts?term=tech` | Search posts by keyword | `200 OK` |
| `GET` | `/api/posts/:id` | Get a single post by ID | `200 OK` |
| `PUT` | `/api/posts/:id` | Update an existing post | `200 OK` |
| `DELETE` | `/api/posts/:id` | Delete a post | `204 No Content` |

</div>

---

## 💡 API Examples

### ➕ Create a New Post

```bash
POST /api/posts
Content-Type: application/json

{
  "title": "Getting Started with Node.js",
  "content": "Node.js is a powerful JavaScript runtime...",
  "category": "Technology",
  "tags": ["JavaScript", "Backend", "Node.js"]
}
```

**Response:**
```json
{
  "id": "64f1a2c9e3",
  "title": "Getting Started with Node.js",
  "content": "Node.js is a powerful JavaScript runtime...",
  "category": "Technology",
  "tags": ["JavaScript", "Backend", "Node.js"],
  "createdAt": "2024-02-06T10:30:00Z",
  "updatedAt": "2024-02-06T10:30:00Z"
}
```

### 📄 Get All Posts

```bash
GET /api/posts
```

### 🔍 Search Posts

```bash
GET /api/posts?term=technology
```

### ✏️ Update a Post

```bash
PUT /api/posts/64f1a2c9e3
Content-Type: application/json

{
  "title": "Updated Title",
  "content": "Updated content..."
}
```

### ❌ Delete a Post

```bash
DELETE /api/posts/64f1a2c9e3
```

---

## 📊 HTTP Status Codes

<div align="center">

| Code | Description |
|------|-------------|
| ![200](https://img.shields.io/badge/200-OK-success) | Request successful |
| ![201](https://img.shields.io/badge/201-Created-success) | Resource created |
| ![204](https://img.shields.io/badge/204-No%20Content-success) | Successfully deleted |
| ![400](https://img.shields.io/badge/400-Bad%20Request-orange) | Invalid request |
| ![404](https://img.shields.io/badge/404-Not%20Found-red) | Resource not found |
| ![500](https://img.shields.io/badge/500-Server%20Error-critical) | Internal error |

</div>

---

## 🎓 Learning Outcomes

This project demonstrates:

- ✅ RESTful API design principles
- ✅ CRUD operations implementation
- ✅ MongoDB database integration
- ✅ Express.js middleware usage
- ✅ Error handling best practices
- ✅ Clean code architecture
- ✅ Environment variable management

---

## 📝 Notes

> **Note:** This project intentionally excludes pagination, authentication, and authorization to focus on core RESTful API concepts and CRUD operations. These features can be added as extensions to the base implementation.

---

## 🎯 Future Enhancements

- [ ] User authentication (JWT)
- [ ] Pagination support
- [ ] Rate limiting
- [ ] Input validation with Joi
- [ ] Unit and integration tests
- [ ] API documentation with Swagger
- [ ] Image upload functionality
- [ ] Comments system

---

## ⭐ Acknowledgments

- Thanks to [roadmap.sh](https://roadmap.sh) for the excellent project idea and requirements
- Inspired by modern blogging platforms and best practices in REST API design
- Special thanks to the open-source community

---

<div align="center">

### 🌟 If you found this project helpful, please consider giving it a star!

[![Star on GitHub](https://img.shields.io/github/stars/yourusername/blogging-platform-api?style=social)](https://github.com/yourusername/blogging-platform-api)

**Made with ❤️ and ☕ by Akshat Srivastava**

<img src="https://user-images.githubusercontent.com/74038190/212284115-f47cd8ff-2ffb-4b04-b5bf-4d1c14c0247f.gif" width="400">

</div>
