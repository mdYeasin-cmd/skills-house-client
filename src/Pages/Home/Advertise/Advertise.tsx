import Course1 from './../../../assets/CoursesImage/web-design.jpg';
import Course2 from './../../../assets/CoursesImage/graphic-design.jpg';
import Course3 from './../../../assets/CoursesImage/digital-marketing.png';
import instructor1 from './../../../assets/Instructor/instructor-1.jpg';
import instructor2 from './../../../assets/Instructor/instructor-2.jpg';
import instructor3 from './../../../assets/Instructor/instructor-3.jpg';
import './Advertise.css';
import { AiOutlineCheckSquare } from "react-icons/ai";
import { FaHandPointRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper';


interface ICourseFeature {
    features: string[];
    discountRate: string;
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
            discountRate: "25%",
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
        },
        {
            features: [
                "24/7 Support",
                "Expert Trainer",
                "Mentorship",
                "Doubt Clearing Session",
                "Free Resource For Practice"
            ],
            discountRate: "20%",
            lastCloseDate: "10 March 2023",
            courseCategory: 'Design and Multimedia',
            courseName: 'Graphic Design',
            ratings: 5,
            reviewCout: 2301,
            enrolledStuents: 230,
            courseImage: Course2,
            courseFee: 18000,
            instructor: {
                name: "Forkan Uddin",
                designation: "Professional Graphic Designer",
                instructorImg: instructor2
            }
        },
        {
            features: [
                "24/7 Support",
                "Expert Trainer",
                "Mentorship",
                "Doubt Clearing Session",
                "Free Software"
            ],
            discountRate: "18%",
            lastCloseDate: "3 March 2023",
            courseCategory: 'Digital Marketing',
            courseName: 'Digital Marketing',
            ratings: 5,
            reviewCout: 2301,
            enrolledStuents: 230,
            courseImage: Course3,
            courseFee: 25000,
            instructor: {
                name: "Rakib Ahmed",
                designation: "Full Stack Digital Marketer",
                instructorImg: instructor3
            }
        },
    ]

    return (
        <div className="advertise-section">
            <Swiper
                className="banner-info-container"
                modules={[Autoplay, EffectFade]}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                loop={true}
                effect={"fade"}
            >
                {
                    coursesFeature.map((courseFeature, idx) => <SwiperSlide
                        key={idx}
                    >
                        <div className="bg-[#34526e] flex justify-between xl:pl-16 text-white h-[360px]">
                            <div data-aos="fade-left" className="py-20 flex justify-between w-1/2">
                                <div>
                                    <h1 className="text-3xl font-bold">{courseFeature.courseName}</h1>

                                    <h2 className="text-xl mt-6 flex items-center">
                                        <FaHandPointRight className="mr-2" /> Course Feature
                                    </h2>
                                    <ul className="ml-4">
                                        {
                                            courseFeature.features.map(feature => <li className="flex items-center text-lg"
                                            >
                                                <AiOutlineCheckSquare className="mr-1 text-green-400" /> {feature}
                                            </li>)
                                        }

                                    </ul>
                                </div>
                                <div className="text-center">
                                    <img className="w-14 h-14 mx-auto rounded-full" src={courseFeature.instructor.instructorImg} alt="" />
                                    <h1 className="text-lg font-medium">{courseFeature.instructor.name}</h1>
                                    <p>{courseFeature.instructor.designation}</p>
                                    <button className="btn bg-[#51DBDC] hover:bg-[#51DBDC] hover:bg-opacity-80 border-0 mt-2 advertise-enroll-btn">Enroll Now</button>
                                </div>
                                <div>
                                    <div className="flex items-center rounded-full text-center justify-center bg-red-600 w-[120px] h-[120px] p-5 slide-active-zoom-in">
                                        <div>
                                            <h1 className="text-4xl">{courseFeature.discountRate}</h1>
                                            <span className="text-lg">Discount</span> <br />
                                        </div>
                                    </div>
                                    <h2 className="text-center text-xl mt-4">Course Fee <br />
                                        <span className="font-bold">{courseFeature.courseFee} $</span>
                                    </h2>
                                </div>
                            </div>

                            <div data-aos="fade-right" className="advertise-image w-1/2">
                                <img className="w-full h-full" src={courseFeature.courseImage} alt="" />
                            </div>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Advertise;