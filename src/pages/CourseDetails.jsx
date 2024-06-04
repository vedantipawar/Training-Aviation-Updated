import React from 'react';
import { useParams } from 'react-router-dom';
import '../Styles/CourseDetails.css'

function CourseDetails() {
    const { courseid } = useParams();

    return (
        <div>
            <h1>Course Details for Course ID: {courseid}</h1>
            {/* Fetch and display course details based on courseid */}
        </div>
    );
}

export default CourseDetails;
