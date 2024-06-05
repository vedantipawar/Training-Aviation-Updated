import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../Styles/CourseDetails.css';
import { FaStar } from "react-icons/fa";
import { MdRadioButtonChecked } from "react-icons/md";

function CourseDetails() {
    const { courseid } = useParams();
    const [course, setCourse] = useState(null);
    const [isActive, setIsActive] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('/courses.json')
            .then(response => response.json())
            .then(data => {
                const courseData = data.find(course => course.courseid === courseid);
                setCourse(courseData);
            })
            .catch(error => console.error('Error fetching course data:', error));
    }, [courseid]);

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 3; i++) {
            if (i <= rating) {
                stars.push(<FaStar key={i} className='redstar'/>); // Use filled star icon with unique key
            } else {
                stars.push(<FaStar key={i} className='greystar'/>); // Use outline star icon with unique key
            }
        }
        return stars;
    };

    // Directs user to a new page after clicking on start button
    const handleStart = () => {
        console.log("Procedure has started!");
        navigate('/new-page');
    }

    // Toggle active state of the radio button icon
    const toggleActive = () => {
        setIsActive(!isActive);
    }

    return (
        <div className="container">
            <div className="left-container">
                <div onClick={toggleActive} className={`radio-icon ${isActive ? 'active' : ''}`}>
                    <MdRadioButtonChecked />
                </div>
            </div>
            <div className="right-container">
                <div className='textbox'>
                    {course ? (
                        <>
                            <div className="completion-stars">
                                {renderStars(course.rating)}
                                <span>{course.completion}%</span>
                            </div>
                            <div className='titlesize'>{course.rpctitle}</div>
                            <div className='subtitlesize'>{course.rpcsubtitle}</div>
                            <div className='courseinfo'>{course.information}</div>
                            <button className="start-button" onClick={handleStart}>Start</button>
                        </>
                    ) : (
                        <p>Loading course details...</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default CourseDetails;
