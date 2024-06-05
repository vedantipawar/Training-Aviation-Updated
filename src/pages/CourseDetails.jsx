import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../Styles/CourseDetails.css';
import { FaStar, FaCircle } from "react-icons/fa";
import lockedIcon from '../images/LockedIcon.png';
import dashed1 from '../images/dashed1.png'
import dashed3 from '../images/dashed3.png'
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function CourseDetails() {
    const { courseid } = useParams();
    const [course, setCourse] = useState(null);
    const [activeCourseId, setActiveCourseId] = useState(courseid);
    const [isActive, setIsActive] = useState(null);
    const [courses, setCourses] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('/courses.json')
            .then(response => response.json())
            .then(data => {
                setCourses(data);
                const initialCourse = data.find(course => course.courseid === courseid);
                setCourse(initialCourse);
            })
            .catch(error => console.error('Error fetching course data:', error));
    }, [courseid]);

    useEffect(() => {
        const selectedCourse = courses.find(course => course.courseid === activeCourseId);
        setCourse(selectedCourse);
    }, [activeCourseId, courses]);

    const renderStars = (rating, status) => {
        const stars = [];
        if (status === 'UnLocked') {
            for (let i = 1; i <= 3; i++) {
                if (i <= rating) {
                    stars.push(<FaStar key={i} className='redstar'/>);
                } else {
                    stars.push(<FaStar key={i} className='greystar'/>);
                }
            }
        } else {
            for (let i = 1; i <= 3; i++) {
                stars.push(<FaStar key={i} className='greystar'/>);
            }
        }
        return stars;
    };

    const handleStart = () => {
        console.log("Procedure has started!");
        navigate('/new-page');
    };

    const toggleActive = (courseId) => {
        setActiveCourseId(courseId);
        setIsActive(courseId);
    };

    const unlockedCourses = courses.filter(courseItem => courseItem.status === "UnLocked");
    const lockedCourses = courses.filter(courseItem => courseItem.status === "Locked");

    return (
        <div className="container">
            <div className="left-container">
                <img src={dashed1} className='dashed1' alt='dashed'/>
                <img src={dashed3} className='dashed3' alt='dashed3'/>
                <img src={dashed1} className='dashed2' alt='dashed2'/>
                {unlockedCourses.map((courseItem) => (
                    <div key={courseItem.courseid} className={`course-item course-item-${courseItem.courseid}`}>
                        <div 
                            onClick={() => toggleActive(courseItem.courseid)} 
                            className={`radio-icon ${isActive === courseItem.courseid ? 'active' : ''}`}
                        >
                            <div className='progressbar-container'>
                                <CircularProgressbarWithChildren 
                                    value={courseItem.completion} 
                                    styles={buildStyles({
                                        textColor: "#000",
                                        pathColor: "#fe0143",
                                        trailColor: "#d1d1d1"
                                    })}
                                >
                                    <FaCircle style={{ fontSize: '65px', marginBottom: 50 }} />
                                </CircularProgressbarWithChildren>
                            </div>
                        </div>
                        <div className='details-container'>
                            <div className="stars-container">
                                {renderStars(courseItem.rating, courseItem.status)}
                            </div>
                            <div className='leftcontainertext'>{courseItem.rpctitle}</div>
                            <div className='leftcontainertext'>{courseItem.rpcsubtitle}</div>
                        </div>
                    </div>
                ))}
                {lockedCourses.map((courseItem) => (
                    <div key={courseItem.courseid} className={`course-item course-item-${courseItem.courseid}`}>
                        <div className='lockedIcon'>
                            
                            <img src={lockedIcon} alt="Locked Icon" />
                        </div>
                        <div className='details-container-l'>
                            <div className="stars-container-l">
                                {renderStars(courseItem.rating, courseItem.status)}
                            </div>
                            <div className='leftcontainertext-l'>{courseItem.rpctitle}</div>
                            <div className='leftcontainertext-l'>{courseItem.rpcsubtitle}</div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="right-container">
                <div className='textbox'>
                    {course ? (
                        <>
                            <div className="completion-stars">
                                {renderStars(course.rating, course.status)}
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
