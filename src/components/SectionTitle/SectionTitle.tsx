import React from 'react';

type SectionTitleProps = {
    secTitle: string;
    secSubTitle?: string;
}

const SectionTitle = ({ secTitle }: SectionTitleProps) => {
    return (
        <div>
            <h2 className="text-4xl text-center font-semibold my-7">{secTitle}</h2>
        </div>
    );
};

export default SectionTitle;