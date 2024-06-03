const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(express.json());
app.use(cors());
app.use('/images', express.static(path.join(__dirname, './images'))); // Serve static images

const coursesFilePath = path.join(__dirname, './database/courses.json');

// Helper function to read courses from the JSON file
const readCoursesFromFile = () => {
  const coursesData = fs.readFileSync(coursesFilePath);
  return JSON.parse(coursesData);
};

// Helper function to write courses to the JSON file
const writeCoursesToFile = (courses) => {
  fs.writeFileSync(coursesFilePath, JSON.stringify(courses, null, 2));
};

// API Routes
app.get('/courses', (req, res) => {
  const courses = readCoursesFromFile();
  res.json(courses);
});

app.post('/courses', (req, res) => {
  const newCourse = req.body;
  const courses = readCoursesFromFile();
  courses.push(newCourse);
  writeCoursesToFile(courses);
  res.json(newCourse);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
