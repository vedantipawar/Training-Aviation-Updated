import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../Styles/CourseDetails.css';
import { FaStar, FaCircle } from "react-icons/fa";
import { MdRadioButtonChecked } from "react-icons/md";
import lockedIcon from '../images/LockedIcon.png';
import { CircularProgressbarWithChildren,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

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

    const handleStart = () => {
        console.log("Procedure has started!");
        navigate('/new-page');
    }

    const [activeIcon, setActiveIcon] = useState(null);
    const toggleActive = (icon) => {
        setActiveIcon(icon === activeIcon ? null : icon);
    };

    return (
        <div className="container">
            <div className="left-container">
                <div onClick={() => toggleActive(1)} className={`radio-icon ${activeIcon === 1 ? 'active' : ''}`} > 
                    <div className='progressbar-container'>
                        <CircularProgressbarWithChildren value={course ? course.completion : 0} 
                            
                            styles={buildStyles({
                                textColor: "#000",
                                pathColor: "#fe0143",
                                trailColor: "#d1d1d1"
                            })}
                        >
                            <FaCircle style={{ fontSize: '65px', marginBottom: 50}}  />
                        </CircularProgressbarWithChildren>
                    </div>                    

                    <div className="stars-container">
                        {course && renderStars(course.rating)}
                    </div>
                </div>
                <div className='leftcontainertext'>{course && course.rpctitle}</div>
                <div className='leftcontainertext'>{course && course.rpcsubtitle}</div>
                <div 
                    onClick={() => toggleActive(2)} 
                    className={`radio-icon2 ${activeIcon === 2 ? 'active' : ''}`}>
                        <div className='progressbar-container'>
                        <CircularProgressbarWithChildren value={course ? course.completion : 0} 
                            
                            styles={buildStyles({
                                textColor: "#000",
                                pathColor: "#fe0143",
                                trailColor: "#d1d1d1"
                            })}
                        >
                            <FaCircle style={{ fontSize: '65px', marginBottom: 50}}  />
                        </CircularProgressbarWithChildren>
                    </div>  
                    
                </div>
                <div 
                    onClick={() => toggleActive(3)} 
                    className={`radio-icon3 ${activeIcon === 3 ? 'active' : ''}`}
                >
                    <MdRadioButtonChecked />
                </div>
                <div className='lockedIcon'>
                    <img src={lockedIcon} alt="Locked Icon" />
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
