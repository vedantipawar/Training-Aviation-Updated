import React from 'react';
import '../Styles/SingleCard.css';
import star from '../images/star.png';
import arrow from '../images/arrow.png'; // Corrected import for the arrow image

export default function SingleCard(props) {
    const { course } = props;
    return (
        <div className='mycard'>
            <div className="image-container">
                <img src={`http://localhost:5000/${course.imagepath}`} alt="Course Image" />
                <div className="completion">{course.completion}%</div>
                <div className="card-title">{course.title}</div>
                <div className="card-subtitle">{course.description}</div>
                <div className='icon-container'>                    
                    <img src={arrow} alt="Arrow Icon" className="icon-ps" />
                    <img src={star} alt="Star Icon" className="icon-ps" />
                </div>
            </div>
        </div>
    );
}
