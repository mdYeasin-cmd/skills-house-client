import React from 'react';
import Course1 from './../../../assets/CoursesImage/web-design.jpg';
import './Advertise.css';

interface ICourseFeature {
    feature: string[];
    discourtRate: string;
    lastCloseDate: string;
    courseCategory: string;
    courseName: string;
    ratings: number;
    reviewCout: number;
    enrolledStuents: number;
    courseImage: string;
    courseFee: number;
    instructorName: string;
}

type CoursesFeatureType = ICourseFeature[];

const Advertise = () => {

    const coursesFeature: CoursesFeatureType = [
        {
            feature: [
                "24/7 Support",
                "Expert Trainer",
                "Mentorship",
                "Doubt Clearing Session"
            ],
            discourtRate: "25%",
            lastCloseDate: "2 March 2023",
            courseCategory: 'Web and Software',
            courseName: 'Web Design',
            ratings: 5,
            reviewCout: 2301,
            enrolledStuents: 230,
            courseImage: Course1,
            courseFee: 20000,
            instructorName: "Nahiyan Siddik"
        }
    ]

    return (
        <div className="bg-[#51DBDC] flex justify-between xl:pl-16 text-white">
            <div className="py-20 flex justify-between w-1/2">
                <div>
                    <h1 className="text-3xl font-bold">{coursesFeature[0].courseName}</h1>

                    <h2 className="text-xl mt-9">Course Feature</h2>
                    <ul className="ml-4">
                        <li>{coursesFeature[0].feature[0]}</li>
                        <li>{coursesFeature[0].feature[1]}</li>
                        <li>{coursesFeature[0].feature[2]}</li>
                        <li>{coursesFeature[0].feature[3]}</li>
                    </ul>
                </div>
                <div className="flex items-center rounded-full text-center justify-center bg-red-600 w-[120px] h-[120px] p-5">
                    <div>
                        <h1 className="text-4xl">25%</h1>
                        <span className="text-lg">Discount</span>
                    </div>
                </div>
            </div>
            <div className="advertise-image w-1/2">
                <img className="w-full" src={coursesFeature[0].courseImage} alt="" />
            </div>
        </div>
    );
};

export default Advertise;