import React from 'react';
import '../Styles/SingleRecentProcedureCard.css';
import { FaStar, FaRegStar } from "react-icons/fa";

export default function SingleRecentProcedureCard(props) {
    const { course } = props;

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

    return (
        <div className='srpcard'>
            <div className='rpcicon-container '>
                {renderStars(course.rating)}
            </div>
            <div>{course.rpctitle}</div>
        </div>
    );
}
