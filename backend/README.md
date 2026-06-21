# Internship Monitoring System - Backend

Backend API for the Web-Based Internship Monitoring System built with Node.js, Express.js, and MongoDB.

## Installation

1. Navigate to backend folder:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install express mongoose dotenv cors bcryptjs jsonwebtoken multer nodemailer socket.io express-validator helmet morgan cookie-parser pdfkit moment
```

3. Create `.env` file with the provided environment variables

4. Start the server:
```bash
npm run dev
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user
- `POST /api/auth/forgot-password` - Request password reset
- `POST /api/auth/reset-password/:token` - Reset password

### Users
- `GET /api/users/me` - Get current user profile
- `GET /api/users/student/:id` - Get student by ID
- `GET /api/users/lecturer/:id` - Get lecturer by ID
- `PUT /api/users/profile` - Update user profile

### Supervision
- `POST /api/supervision/create-student` - Create student form
- `POST /api/supervision/create-lecturer` - Create lecturer form
- `GET /api/supervision/departments` - Get all departments
- `GET /api/supervision/department/:department` - Get department profiles
- `GET /api/supervision/status` - Get supervision status

### Feedback
- `POST /api/feedback/create` - Create feedback
- `PUT /api/feedback/:feedbackId` - Update feedback
- `GET /api/feedback/lecturer/:lecturerId` - Get feedback for lecturer
- `GET /api/feedback/student/:studentId` - Get feedback for student
- `PUT /api/feedback/submit/:feedbackId` - Submit feedback
- `GET /api/feedback/pdf/:studentId` - Generate PDF report

### Chat
- `POST /api/chat/room` - Create/get chat room
- `GET /api/chat/messages/:roomId` - Get messages
- `POST /api/chat/message` - Add message
- `POST /api/chat/attachment/:roomId` - Upload file
- `DELETE /api/chat/message/:roomId/:messageId` - Delete message
- `DELETE /api/chat/attachment/:roomId/:messageId/:attachmentId` - Delete file
- `GET /api/chat/rooms/:userId/:userType` - Get user chat rooms

### Upload
- `POST /api/upload/file` - Upload student file
- `GET /api/upload/student` - Get student uploads
- `GET /api/upload/lecturer/:studentId` - Get uploads for lecturer
- `DELETE /api/upload/:uploadId` - Delete upload

### Dashboard
- `GET /api/dashboard/stats` - Get dashboard statistics
- `GET /api/dashboard/department-stats` - Get department statistics

## Features

- User authentication with JWT
- Role-based access control (student/lecturer)
- Real-time messaging with Socket.io
- File uploads with validation
- Email notifications
- Password reset functionality
- PDF report generation
- Dashboard statistics
