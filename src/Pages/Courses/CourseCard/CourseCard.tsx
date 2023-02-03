import React from 'react';

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
                <div className="card-actions justify-between">
                    <div className="badge badge-outline">{ratings} {reviewCout} Reviews</div>
                    <div className="badge badge-outline">{enrolledStuents} Students</div>
                </div>
                <h2>{courseFee}</h2>
            </div>
        </div>
    );
};

export default CourseCard;