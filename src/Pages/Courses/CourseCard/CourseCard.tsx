import React from 'react';
import StarRating from '../../../components/StarRating/StarRating';

type CourseProps = {
    course: {
        courseCategory: string,
        courseName: string;
        ratings: number;
        reviewCout: number;
        enrolledStuents: number;
        courseImage: string;
        courseFee: number;
    }
}

const CourseCard = ({ course }: CourseProps) => {

    const { courseCategory, courseImage, courseName, ratings, reviewCout, enrolledStuents, courseFee } = course;

    return (
        <div className="card w-96 bg-base-100 shadow-2xl">
            <figure>
                <img src={courseImage} className="w-full h-[241px]" alt="Shoes" />
            </figure>
            <div className="card-body p-5">
                <h3 className="text-[#51DBDC] font-semibold text-base">{courseCategory}</h3>
                <h2 className="card-title">
                    {courseName}
                </h2>
                <div className="card-actions justify-between items-center">
                    <div className="badge badge-outline p-1">
                        <StarRating ratings={ratings} />
                        <span className="ml-1">|| {reviewCout} Reviews</span>
                    </div>
                    <div className="badge badge-outline p-1">{enrolledStuents} Students</div>
                </div>
                <h2 className="text-xl font-semibold">Course Fee {courseFee} $</h2>
            </div>
        </div>
    );
};

export default CourseCard;