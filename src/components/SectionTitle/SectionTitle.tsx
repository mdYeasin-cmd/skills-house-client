import React from 'react';

type SectionTitleProps = {
    secTitle: string;
    secSubTitle?: string;
}

const SectionTitle = ({ secTitle, secSubTitle }: SectionTitleProps) => {
    return (
        <div>
            <h2 className="text-4xl text-center font-semibold pb-0 pt-14 mx-auto uppercase">{secTitle}</h2>
            <p className="text-center pt-3 pb-5">{secSubTitle}</p>
        </div>
    );
};

export default SectionTitle;