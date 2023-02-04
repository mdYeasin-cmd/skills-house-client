import './Banner.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper';
import bannerImgOne from './../../../assets/Banner/banner-1.jpg';
import bannerImgTwo from './../../../assets/Banner/banner-2.jpg';
import bannerImgThree from './../../../assets/Banner/banner-3.jpg';

interface IBannerItemsInfo {
    bannerSerialNo: number;
    bannerImage: string;
    bannerTittle: string;
    bannerSubTittle: string;
    quoteAuthor: string;
}

type BannerItemsInfoType = IBannerItemsInfo[];

const Banner = () => {

    const bannerItemsInfo: BannerItemsInfoType = [
        {
            bannerSerialNo: 1,
            bannerImage: bannerImgOne,
            bannerTittle: 'Learning is an investment of your career',
            bannerSubTittle: `All of the top achievers I know are life-long learners. Looking for new skills, insights, and ideas. If they're not learning, they're not growing and not moving toward excellence.`,
            quoteAuthor: 'Denis Waitley'
        },
        {
            bannerSerialNo: 2,
            bannerImage: bannerImgTwo,
            bannerTittle: 'Education is the key to unlocking the world',
            bannerSubTittle: `It had long since come to my attention that people of accomplishment rarely sat back and let things happen to them. They went out and made things happen.`,
            quoteAuthor: 'Denis Waitley'
        },
        {
            bannerSerialNo: 3,
            bannerImage: bannerImgThree,
            bannerTittle: 'Nine-tenths of education is encouragement',
            bannerSubTittle: 'A hundred years from now, it will not matter what kind of car I drove, what kind of house I lived in, how much money I had in the bank. But the world may be a better place because I made a difference in the life of a child.',
            quoteAuthor: 'Denis Waitley'
        },
    ];

    return (
        <div className="banner-area">
            <Swiper
                className="banner-info-container"
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false
                }}
                loop={true}
                effect={"fade"}
                pagination={{ clickable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {
                    bannerItemsInfo.map(bannerInfo => <SwiperSlide
                        key={bannerInfo.bannerSerialNo}
                    >
                        <div
                            style={{
                                backgroundImage: `url(${bannerInfo.bannerImage})`
                            }}
                            className="banner-image"
                        >
                            <div className="flex justify-center items-center h-full text-white text-center">
                                <div>
                                    <h2 className="banner-title text-5xl font-bold uppercase">{bannerInfo.bannerTittle}</h2>
                                    <h3 className="banner-subtitle w-8/12 text-lg mt-3 mx-auto">
                                        {bannerInfo.bannerSubTittle}
                                    </h3>
                                    <button className="btn bg-[#51DBDC] hover:bg-[#51DBDC] hover:bg-opacity-80 border-0 mt-5 banner-enroll-btn">Enroll Now</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Banner;