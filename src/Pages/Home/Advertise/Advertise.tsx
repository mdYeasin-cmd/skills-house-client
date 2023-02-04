import React from 'react';
import Course1 from './../../../assets/CoursesImage/web-design.jpg';
import instructor1 from './../../../assets/Instructor/instructor.jpg';
import './Advertise.css';
import { AiOutlineCheckSquare } from "react-icons/ai";
import { FaHandPointRight } from "react-icons/fa";


interface ICourseFeature {
    features: string[];
    discourtRate: string;
    lastCloseDate: string;
    courseCategory: string;
    courseName: string;
    ratings: number;
    reviewCout: number;
    enrolledStuents: number;
    courseImage: string;
    courseFee: number;
    instructor: { name: string; designation: string; instructorImg: string; }
}

type CoursesFeatureType = ICourseFeature[];

const Advertise = () => {

    const coursesFeature: CoursesFeatureType = [
        {
            features: [
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
            instructor: {
                name: "Nahiyan Siddik",
                designation: "Full Stack Web Developer",
                instructorImg: instructor1
            }
        }
    ]

    return (
        <div className="bg-[#34526e] flex justify-between xl:pl-16 text-white">
            <div className="py-20 flex justify-between w-1/2">
                <div>
                    <h1 className="text-3xl font-bold">{coursesFeature[0].courseName}</h1>

                    <h2 className="text-xl mt-6 flex items-center">
                        <FaHandPointRight className="mr-2" /> Course Feature
                    </h2>
                    <ul className="ml-4">
                        {
                            coursesFeature[0].features.map(feature => <li className="flex items-center text-lg"
                            >
                                <AiOutlineCheckSquare className="mr-1 text-green-400" /> {feature}
                            </li>)
                        }

                    </ul>
                </div>
                <div className="text-center">
                    <img className="w-14 h-14 mx-auto rounded-full" src={coursesFeature[0].instructor.instructorImg} alt="" />
                    <h1 className="text-lg font-medium">{coursesFeature[0].instructor.name}</h1>
                    <p>{coursesFeature[0].instructor.designation}</p>
                    <button className="btn bg-[#51DBDC] hover:bg-[#51DBDC] hover:bg-opacity-80 border-0 mt-2">Enroll Now</button>
                </div>
                <div>
                    <div className="flex items-center rounded-full text-center justify-center bg-red-600 w-[120px] h-[120px] p-5">
                        <div>
                            <h1 className="text-4xl">25%</h1>
                            <span className="text-lg">Discount</span> <br />
                        </div>
                    </div>
                    <h2 className="text-center text-xl mt-2">Course Fee <br /> 
                        <span className="font-bold">10000 $</span>
                    </h2>
                </div>
            </div>

            <div className="advertise-image w-1/2">
                <img className="w-full" src={coursesFeature[0].courseImage} alt="" />
            </div>
        </div>
    );
};

export default Advertise;