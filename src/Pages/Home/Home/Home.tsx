import React from 'react';
import CourseCard from '../../Courses/CourseCard/CourseCard';
import Banner from '../Banner/Banner';
import Course1 from './../../../assets/CoursesImage/web-design.jpg';
import Course2 from './../../../assets/CoursesImage/graphic-design.jpg';
import Course3 from './../../../assets/CoursesImage/digital-marketing.png';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import CategoryCard from '../../Courses/CategoryCard/CategoryCard';
import { BsCodeSlash } from "react-icons/bs";
import { SiMaterialdesignicons } from "react-icons/si";
import { AiTwotoneSound, AiOutlineSecurityScan } from "react-icons/ai";
import Footer from '../../../components/Footer/Footer';
import NewsLetter from '../NewsLetter/NewsLetter';
import Instructor from '../Instructor/Instructor';
import Testimonial from '../Testimonial/Testimonial';
import Advertise from '../Advertise/Advertise';
import Statistics from '../Statistics/Statistics';

interface ICoursesInfo {
    courseCategory: string,
    courseName: string;
    ratings: number;
    reviewCout: number;
    enrolledStuents: number;
    courseImage: string;
    courseFee: number;
}

type CoursesInfoType = ICoursesInfo[];

interface ICourseCategory {
    name: string;
    icon: JSX.Element;
}

type CourseCategoryType = ICourseCategory[]

const Home = () => {

    const courses: CoursesInfoType = [
        {
            courseCategory: 'Web and Software',
            courseName: 'Web Design',
            ratings: 5,
            reviewCout: 2301,
            enrolledStuents: 230,
            courseImage: Course1,
            courseFee: 20000
        },
        {
            courseCategory: 'Design and Multimedia',
            courseName: 'Graphic Design',
            ratings: 4,
            reviewCout: 2001,
            enrolledStuents: 230,
            courseImage: Course2,
            courseFee: 15000
        },
        {
            courseCategory: 'Digital Marketing',
            courseName: 'Digital Marketing',
            ratings: 3,
            reviewCout: 2333,
            enrolledStuents: 230,
            courseImage: Course3,
            courseFee: 30000
        }
    ];

    const courseCategory: CourseCategoryType = [
        {
            name: 'Web and Software',
            icon: <BsCodeSlash />
        },
        {
            name: 'Design and Multimedia',
            icon: <SiMaterialdesignicons />
        },
        {
            name: 'Digital Marketing',
            icon: <AiTwotoneSound />
        },
        {
            name: 'Cyber Security',
            icon: <AiOutlineSecurityScan />
        }
    ]

    return (
        <div>
            {/* Banner Section */}
            <Banner></Banner>

            {/* Course Category Section */}
            <div className="flex justify-between xl:px-16 text-center py-8">
                {
                    courseCategory.map((category, idx) => <CategoryCard
                        key={idx}
                        category={category}
                    />)
                }
            </div>

            {/* Popular Courses Section */}
            <div className="pb-12 bg-base-200">
                <SectionTitle
                    secTitle="Popular Courses"
                />
                <div className="flex justify-between pt-5 pb-5 xl:px-16">
                    {
                        courses.map((course, idx) => <CourseCard
                            key={idx}
                            course={course}
                        ></CourseCard>)
                    }
                </div>
            </div>

            {/* Instructor Course Advertise Section */}
            <Advertise />

            {/* Our Statistics Section */}
            <Statistics />

            {/* Instructor Section */}
            <div className="bg-base-200 pt-5">
                <SectionTitle
                    secTitle="Our Instructor"
                />
                <Instructor />
            </div>

            {/* Testimonial Section */}
            <div>   
                <SectionTitle
                    secTitle="Testimonials"
                />
                <Testimonial />
            </div>

            {/* Newsletter Section */}
            <NewsLetter />

            {/* Footer Section */}
            <Footer />
        </div>
    );
};

export default Home;