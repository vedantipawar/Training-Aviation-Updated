import '../Styles/SingleRecentProcedureCard.css';
import Mycard from './SingleRecentProcedureCard.jsx';
import React, { useEffect, useState } from 'react';


export default function RecentProcedureAllCards() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/courses') // Ensure your server is running on this port
            .then(response => response.json())
            .then(data => setCourses(data))
            .catch(error => console.error('Error fetching courses:', error));
    }, []);

    let box = document.querySelector('.product-container');

    const btnpressprev = () => {
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft - width;
        console.log(width);
    }

    const btnpressnext = () => {
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft + width;
        console.log(width);
    }

    return (
        <div className="product-carousel">
            <button className="pre-btn" onClick={btnpressprev}><p>&lt;</p></button>
            <button className="next-btn" onClick={btnpressnext}><p>&gt;</p></button>

            <div className="product-container">
                {courses.map((course, index) => (
                    <Mycard key={index} course={course} />
                ))}
            </div>
        </div>
    );
}
