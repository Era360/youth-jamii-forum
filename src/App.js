import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Course from './components/courses/course';
import CourseDescription from './components/courses/course_description';
import Courses from './components/courses/courses';
import Login from './components/Login/login';

function App() {
  const [course, setCourse] = useState();

  return (
    <div>
      <Router>
        <Routes>
          <Route exact element={<Login />} path="/login" />
          <Route exact element={<Courses selectCourse={(cour) => setCourse(cour)} />} path="/" />
          <Route exact element={<CourseDescription course={course} />} path="/course_description" />
          <Route exact element={<Course course={course} />} path="/course_description/course" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
