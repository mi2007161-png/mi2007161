import express from 'express';
import User from '../models/User.js';
import Student from '../models/Student.js';
import Lecturer from '../models/Lecturer.js';
import { authenticate } from '../middleware/auth.js';
import moment from 'moment';

const router = express.Router();

// Get dashboard statistics
router.get('/stats', authenticate, async (req, res) => {
  try {
    const supervisionStart = moment(process.env.SUPERVISION_START);
    const supervisionEnd = moment(process.env.SUPERVISION_END);

    const totalStudents = await User.countDocuments({ role: 'student' });
    const totalLecturers = await User.countDocuments({ role: 'lecturer' });

    const supervisedStudents = await Student.countDocuments({
      supervisionStatus: 'supervised',
    });

    const pendingStudents = await Student.countDocuments({
      supervisionStatus: 'pending',
    });

    const stats = {
      totalStudents,
      totalLecturers,
      supervisedStudents,
      pendingStudents,
      supervisionStart: supervisionStart.format('YYYY-MM-DD'),
      supervisionEnd: supervisionEnd.format('YYYY-MM-DD'),
    };

    res.status(200).json(stats);
  } catch (error) {
    console.error('Get stats error:', error);
    res.status(500).json({ message: 'Failed to fetch statistics' });
  }
});

// Get department statistics
router.get('/department-stats', authenticate, async (req, res) => {
  try {
    const departments = [
      'IT Department',
      'Languages Department',
      'Engineering Department',
      'Mathematics Department',
      'Accounting Department',
      'Construction Department',
      'Social Studies and Economics Department',
      'Catering Department',
      'Agric Department',
      'Biochemistry Department',
      'Medicine Department',
    ];

    const departmentStats = [];

    for (const dept of departments) {
      const students = await Student.countDocuments({ department: dept });
      const lecturers = await Lecturer.countDocuments({ department: dept });
      departmentStats.push({
        department: dept,
        students,
        lecturers,
      });
    }

    res.status(200).json(departmentStats);
  } catch (error) {
    console.error('Get department stats error:', error);
    res.status(500).json({ message: 'Failed to fetch department statistics' });
  }
});

export default router;
