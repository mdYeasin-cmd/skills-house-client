import React from "react";
import CourseCard from "../../Courses/CourseCard/CourseCard";
import Banner from "../Banner/Banner";
import Course1 from "./../../../assets/CoursesImage/web-design.jpg";
import Course2 from "./../../../assets/CoursesImage/graphic-design.jpg";
import Course3 from "./../../../assets/CoursesImage/digital-marketing.png";
import CategoryCard from "../../Courses/CategoryCard/CategoryCard";
import { BsCodeSlash } from "react-icons/bs";
import { SiMaterialdesignicons } from "react-icons/si";
import { AiTwotoneSound, AiOutlineSecurityScan } from "react-icons/ai";
import Footer from "../../../components/Footer/Footer";
import NewsLetter from "../NewsLetter/NewsLetter";
import Instructor from "../Instructor/Instructor";
import Testimonial from "../Testimonial/Testimonial";
import Advertise from "../Advertise/Advertise";
import Statistics from "../Statistics/Statistics";
// import app from '../../../firebase/firebase.config';

interface ICoursesInfo {
  courseCategory: string;
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

type CourseCategoryType = ICourseCategory[];

const Home = () => {
  const courses: CoursesInfoType = [
    {
      courseCategory: "Web & Software",
      courseName: "Web Design",
      ratings: 5,
      reviewCout: 2301,
      enrolledStuents: 230,
      courseImage: Course1,
      courseFee: 20000,
    },
    {
      courseCategory: "Design and Multimedia",
      courseName: "Graphic Design",
      ratings: 4,
      reviewCout: 2001,
      enrolledStuents: 230,
      courseImage: Course2,
      courseFee: 15000,
    },
    {
      courseCategory: "Digital Marketing",
      courseName: "Digital Marketing",
      ratings: 3,
      reviewCout: 2333,
      enrolledStuents: 230,
      courseImage: Course3,
      courseFee: 30000,
    },
  ];

  const courseCategory: CourseCategoryType = [
    {
      name: "Web and Software",
      icon: <BsCodeSlash />,
    },
    {
      name: "Design and Multimedia",
      icon: <SiMaterialdesignicons />,
    },
    {
      name: "Digital Marketing",
      icon: <AiTwotoneSound />,
    },
    {
      name: "Cyber Security",
      icon: <AiOutlineSecurityScan />,
    },
  ];

  // console.log(app);

  return (
    <div className="mt-[80px]">
      {/* Banner Section */}
      <Banner></Banner>

      {/* Course Category Section */}
      <div className="sm:flex justify-between px-5 xl:px-16 text-center py-5 sm:py-8">
        {courseCategory.map((category, idx) => (
          <CategoryCard key={idx} category={category} />
        ))}
      </div>

      {/* Popular Courses Section */}
      <div className="pb-12 bg-base-200">
        <div>
          <h2 className="text-2xl sm:text-4xl text-center font-semibold pb-1 pt-14 mx-auto uppercase border-b-2 shadow-sm w-[240px] sm:w-[27%] outline-offset-2">
            Popular Courses
          </h2>
          <p className="text-center pt-3 pb-5 text-base px-4 sm:text-lg mt-2">
            All of our popular courses by which students are satisfied
          </p>
        </div>
        <div className="md:flex justify-between pt-5 pb-5 px-5 xl:px-16 overflow-x-hidden">
          {courses.map((course, idx) => (
            <CourseCard key={idx} course={course}></CourseCard>
          ))}
        </div>
        <div className="flex justify-center xl:px-16">
          <button
            data-aos="fade-up"
            className="btn bg-[#51DBDC] hover:bg-[#51DBDC] hover:bg-opacity-80 border-0 mt-5 banner-enroll-btn"
          >
            See More Courses
          </button>
        </div>
      </div>

      {/* Instructor Course Advertise Section */}
      <Advertise />

      {/* Our Statistics Section */}
      <Statistics />

      {/* Instructor Section */}
      <div className="bg-base-200 pt-5">
        <div>
          <h2 className="text-2xl sm:text-4xl text-center font-semibold pb-1 pt-14 mx-auto uppercase border-b-2 shadow-sm w-[220px] sm:w-[24%] outline-offset-2">
            Our Instructor
          </h2>
        </div>
        <Instructor />
      </div>

      {/* Testimonial Section */}
      <div>
        <div>
          <h2 className="text-2xl sm:text-4xl text-center font-semibold pb-1 pt-14 mx-auto uppercase border-b-2 shadow-sm w-[200px] sm:w-[20%] outline-offset-2">
            Testimonials
          </h2>
        </div>
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
