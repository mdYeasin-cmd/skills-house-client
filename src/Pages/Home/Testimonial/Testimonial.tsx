import React from 'react';
import reviewer1 from './../../../assets/Reviewer/reviewer-1.jpg';
import reviewer2 from './../../../assets/Reviewer/reviewer-2.jpg';
import reviewer3 from './../../../assets/Reviewer/reviewer-3.jpg';
import reviewer4 from './../../../assets/Reviewer/reviewer-4.jpg';
import reviewer5 from './../../../assets/Reviewer/reviewer-5.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Testimonial.css';
import { Pagination, Autoplay } from 'swiper';

interface IReview {
    reviewerName: string;
    designation: string;
    review: string;
    img: string;
};

type ReviewsType = IReview[];

const Testimonial = () => {

    const reviews: ReviewsType = [
        {
            reviewerName: "Shakil Ahmed",
            designation: "Web Developer",
            review: "Yes, web development is a good career. Mondo's annual Tech and Digital Marketing Salary guide found “Web Developer” was the most in-demand job title in tech.",
            img: reviewer1
        },
        {
            reviewerName: "Niaz Ahmed",
            designation: "Graphic Designer",
            review: "Yes, graphic design is a good career. Mondo's annual Tech and Digital Marketing Salary guide found “Graphic Design” was the most in-demand job title in tech.",
            img: reviewer2
        },
        {
            reviewerName: "Adil Khan",
            designation: "Web Developer",
            review: "Yes, web development is a good career. Mondo's annual Tech and Digital Marketing Salary guide found “Web Developer” was the most in-demand job title in tech.",
            img: reviewer3
        },
        {
            reviewerName: "Karim Rahman",
            designation: "Digital Marketer",
            review: "Yes, digital marketing is a good career. Mondo's annual Tech and Digital Marketing Salary guide found “Digital Marketing” was the most in-demand job title in tech.",
            img: reviewer4
        },
        {
            reviewerName: "Nazmul Islam Sobuj",
            designation: "Web Developer",
            review: "Yes, web development is a good career. Mondo's annual Tech and Digital Marketing Salary guide found “Web Developer” was the most in-demand job title in tech.",
            img: reviewer5
        },

    ];

    return (
        <div className="testimonial-section">
            <div className="dark:bg-gray-800 dark:text-gray-100">
                <div className="flex flex-row items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-16 h-[530px] sm:h-[600px]" data-aos="fade-up">

                    <Swiper
                        breakpoints={{
                            640: {
                                slidesPerView: 3
                                
                            }
                        }}
                        centeredSlides={true}
                        autoplay={{
                            delay: 1000,
                            disableOnInteraction: false
                        }}
                        loop={true}
                        modules={[Pagination, Autoplay]}
                        className="mySwiper"
                    >
                        {
                            reviews.map((review, idx) => <SwiperSlide
                                key={idx}
                            >
                                <div className="flex flex-col w-[80%] sm:max-w-sm mx-auto sm:mx-4 my-0 sm:my-6 shadow-lg border rounded-md">
                                    <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-900">
                                        <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 dark:text-violet-400">
                                                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                                            </svg>
                                            {review.review}
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 dark:text-violet-400">
                                                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                                            </svg>
                                        </p>
                                    </div>
                                    <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-violet-400 dark:text-gray-900">
                                        <img src={review.img} alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full" />
                                        <p className="text-xl font-semibold leading-tight">{review.reviewerName}</p>
                                        <p className="text-sm uppercase">{review.designation}</p>
                                    </div>
                                </div>
                            </SwiperSlide>)
                        }
                    </Swiper>

                </div>
            </div>

        </div >
    );
};

export default Testimonial;