import React from 'react';
import './Banner.css';

type BannerInfoType = {
    bannerInfo: {
        bannerSerialNo: number;
        bannerImage: string;
        bannerTittle: string;
        bannerSubTittle: string;
    }
}

const Banner = ({ bannerInfo }: BannerInfoType) => {

    const { bannerImage, bannerSubTittle, bannerTittle } = bannerInfo;



    return (
        <div>
            <div>
                <h1>{bannerTittle}</h1>
                <p></p>
            </div>
        </div>
    );
};

export default Banner;