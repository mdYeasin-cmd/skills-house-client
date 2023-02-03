import React from 'react';

type CategoryCardProps = {
    category: {
        name: string;
        icon: JSX.Element;
    }
}


const CategoryCard = ({ category }: CategoryCardProps) => {
    return (
        <div className="border w-[23%] py-4">
            <div className="flex justify-center">
                <span className='text-4xl'>{category.icon}</span>
            </div>
            <h2 className="text-2xl text-center">{category.name}</h2>


        </div>
    );
};

export default CategoryCard;