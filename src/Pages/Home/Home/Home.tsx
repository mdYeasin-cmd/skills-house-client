import React from 'react';
import CourseCard from '../../Courses/CourseCard/CourseCard';
import Banner from '../Banner/Banner';
import Course1 from './../../../assets/CoursesImage/web-design.jpg';
import Course2 from './../../../assets/CoursesImage/graphic-design.jpg';
import Course3 from './../../../assets/CoursesImage/digital-marketing.png';

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
    ]

    return (
        <div>
            <Banner></Banner>
            <div>
                <h2 className="text-4xl text-center font-semibold my-7">Our Courses</h2>
                <div className="flex justify-between pt-5 pb-40 xl:px-16">
                    {
                        courses.map((course, idx) => <CourseCard
                            key={idx}
                            course={course}
                        ></CourseCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;