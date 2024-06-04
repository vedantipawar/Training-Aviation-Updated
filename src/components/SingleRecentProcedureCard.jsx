import React from 'react';
import '../Styles/SingleRecentProcedureCard.css';
import { FaStar, FaRegStar } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

export default function SingleRecentProcedureCard(props) {
    const { course } = props;
    const navigate = useNavigate();

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 3; i++) {
            if (i <= rating) {
                stars.push(<FaStar key={i} />); // Use filled star icon with unique key
            } else {
                stars.push(<FaRegStar key={i} />); // Use outline star icon with unique key
            }
        }
        return stars;
    };

    // Only render the card if the rating is less than 3
    if (course.rating >= 3) {
        return null;
    }

    const handleClick = () => {
        navigate(`/course/${course.courseid}`);
    };

    return (
        <div className='srpcard' onClick={handleClick}>
            <div className='rpcicon-container '>
                {renderStars(course.rating)}
            </div>
            <div>{course.rpctitle}</div>
        </div>
    );
}
