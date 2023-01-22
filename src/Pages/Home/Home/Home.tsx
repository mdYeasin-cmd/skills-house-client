import React from 'react';
import Banner from '../Banner/Banner';
import bannerImgOne from './../../../assets/Banner/banner-1.jpg';
import bannerImgTwo from './../../../assets/Banner/banner-2.jpg';
import bannerImgThree from './../../../assets/Banner/banner-3.jpg';

interface IBannerItemsInfo {
    bannerSerialNo: number;
    bannerImage: string;
    bannerTittle: string;
    bannerSubTittle: string;
}

type BannerItemsInfoType = IBannerItemsInfo[];

const Home = () => {

    const bannerItemsInfo: BannerItemsInfoType = [
        {
            bannerSerialNo: 1,
            bannerImage: bannerImgOne,
            bannerTittle: 'Learning is a investment of your career',
            bannerSubTittle: 'Every thing is open for evey one'
        },
        {
            bannerSerialNo: 2,
            bannerImage: bannerImgTwo,
            bannerTittle: 'Learning is a investment of your career',
            bannerSubTittle: 'Every thing is open for evey one'
        },
        {
            bannerSerialNo: 3,
            bannerImage: bannerImgThree,
            bannerTittle: 'Learning is a investment of your career',
            bannerSubTittle: 'Every thing is open for evey one'
        },
    ];

    return (
        <div>
            {
                bannerItemsInfo.map((bannerInfo) => <Banner
                    key={bannerInfo.bannerSerialNo}
                    bannerInfo={bannerInfo}
                ></Banner>)
            }
        </div>
    );
};

export default Home;